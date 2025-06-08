export interface PlatformPattern {
  name: string;
  patterns: RegExp[];
  embedTemplate?: (id: string, options?: any) => string;
}

export const platformPatterns: PlatformPattern[] = [
  {
    name: "YouTube",
    patterns: [
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
      /youtube\.com\/embed\/([^"&?\/\s]{11})/
    ],
    embedTemplate: (id: string, options: any = {}) => {
      const params = new URLSearchParams();
      if (options.autoplay) params.set('autoplay', '1');
      if (options.mute) params.set('mute', '1');
      const query = params.toString();
      return `https://www.youtube.com/embed/${id}${query ? '?' + query : ''}`;
    }
  },
  {
    name: "Vimeo",
    patterns: [
      /vimeo\.com\/(\d+)/,
      /player\.vimeo\.com\/video\/(\d+)/
    ],
    embedTemplate: (id: string, options: any = {}) => {
      const params = new URLSearchParams();
      if (options.autoplay) params.set('autoplay', '1');
      if (options.muted) params.set('muted', '1');
      const query = params.toString();
      return `https://player.vimeo.com/video/${id}${query ? '?' + query : ''}`;
    }
  },
  {
    name: "Dailymotion",
    patterns: [
      /dailymotion\.com\/video\/([a-zA-Z0-9]+)/,
      /dai\.ly\/([a-zA-Z0-9]+)/
    ],
    embedTemplate: (id: string, options: any = {}) => {
      const params = new URLSearchParams();
      if (options.autoplay) params.set('autoplay', '1');
      const query = params.toString();
      return `https://www.dailymotion.com/embed/video/${id}${query ? '?' + query : ''}`;
    }
  },
  {
    name: "XHamster",
    patterns: [
      /xhamster\.com\/videos\/[^\/]*-(\d+)/,
      /xhamster\.com\/embed\/(\d+)/
    ],
    embedTemplate: (id: string, options: any = {}) => {
      const params = new URLSearchParams();
      if (options.autoplay) params.set('autoplay', '1');
      const query = params.toString();
      return `https://xhamster.com/embed/${id}${query ? '?' + query : ''}`;
    }
  },
  {
    name: "Pornhub",
    patterns: [
      /pornhub\.com\/view_video\.php\?viewkey=([a-zA-Z0-9]+)/,
      /pornhub\.com\/embed\/([a-zA-Z0-9]+)/
    ],
    embedTemplate: (id: string, options: any = {}) => {
      const params = new URLSearchParams();
      if (options.autoplay) params.set('autoplay', '1');
      const query = params.toString();
      return `https://www.pornhub.com/embed/${id}${query ? '?' + query : ''}`;
    }
  },
  {
    name: "Direct Video",
    patterns: [
      /\.(mp4|webm|ogv|avi|mov|wmv|flv|mkv|m4v|3gp)(\?.*)?$/i
    ]
  }
];

export function validateVideoUrl(url: string): boolean {
  if (!url || url.trim() === "") return false;
  
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

export function detectPlatform(url: string): string {
  if (!validateVideoUrl(url)) return "";
  
  for (const platform of platformPatterns) {
    for (const pattern of platform.patterns) {
      if (pattern.test(url)) {
        return platform.name;
      }
    }
  }
  
  return "Generic Platform";
}

export function extractVideoId(url: string, platform: string): string | null {
  const platformData = platformPatterns.find(p => p.name === platform);
  if (!platformData) return null;
  
  for (const pattern of platformData.patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}

export function convertToEmbedUrl(url: string, platform: string, options: any = {}): string {
  if (platform === "Direct Video") {
    return url;
  }
  
  const platformData = platformPatterns.find(p => p.name === platform);
  if (!platformData || !platformData.embedTemplate) {
    return url;
  }
  
  const videoId = extractVideoId(url, platform);
  if (!videoId) {
    return url;
  }
  
  return platformData.embedTemplate(videoId, options);
}

export function generateIframeCode(
  url: string,
  width: number,
  height: number,
  allowFullscreen: boolean = true,
  responsive: boolean = false,
  autoplay: boolean = false
): string {
  if (!validateVideoUrl(url)) return "";
  
  const platform = detectPlatform(url);
  const embedUrl = convertToEmbedUrl(url, platform, { autoplay });
  
  if (platform === "Direct Video") {
    // For direct video files, use HTML5 video element
    const attributes = [
      `width="${width}"`,
      `height="${height}"`,
      'controls'
    ];
    
    if (autoplay) attributes.push('autoplay');
    
    const videoCode = `<video ${attributes.join(' ')}>
    <source src="${embedUrl}" type="video/mp4">
    <source src="${embedUrl}" type="video/webm">
    <source src="${embedUrl}" type="video/ogg">
    Your browser does not support the video tag.
</video>`;

    if (responsive) {
      return `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
        ${videoCode}
    </div>
</div>`;
    }
    
    return videoCode;
  }
  
  // For platform embeds, use iframe
  const attributes = [
    `src="${embedUrl}"`,
    `width="${width}"`,
    `height="${height}"`,
    'frameborder="0"'
  ];
  
  if (allowFullscreen) {
    attributes.push('allowfullscreen');
  }
  
  attributes.push('loading="lazy"');
  
  const iframeCode = `<iframe ${attributes.join(' ')}></iframe>`;
  
  if (responsive) {
    return `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe ${attributes.join(' ')} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>`;
  }
  
  return iframeCode;
}

export function isDirectVideoUrl(url: string): boolean {
  return platformPatterns
    .find(p => p.name === "Direct Video")
    ?.patterns.some(pattern => pattern.test(url)) || false;
}

export function getSupportedFormats(): string[] {
  return [
    "MP4 (.mp4)",
    "WebM (.webm)",
    "OGV (.ogv)",
    "AVI (.avi)",
    "MOV (.mov)",
    "WMV (.wmv)",
    "FLV (.flv)",
    "MKV (.mkv)",
    "M4V (.m4v)",
    "3GP (.3gp)"
  ];
}

export function getSupportedPlatforms(): string[] {
  return platformPatterns
    .filter(p => p.name !== "Direct Video")
    .map(p => p.name);
}
