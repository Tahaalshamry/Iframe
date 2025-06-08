import { useState } from "react";
import { URLInput } from "./url-input";
import { IframeSettings } from "./iframe-settings";
import { CodeOutput } from "./code-output";
import { VideoPreview } from "./video-preview";
import { validateVideoUrl, generateIframeCode, detectPlatform } from "@/lib/video-utils";

export interface VideoState {
  url: string;
  width: number;
  height: number;
  allowFullscreen: boolean;
  responsive: boolean;
  autoplay: boolean;
  platform: string;
  isValid: boolean;
  generatedCode: string;
}

export function VideoGenerator() {
  const [videoState, setVideoState] = useState<VideoState>({
    url: "",
    width: 800,
    height: 450,
    allowFullscreen: true,
    responsive: false,
    autoplay: false,
    platform: "",
    isValid: false,
    generatedCode: ""
  });

  const handleUrlChange = (url: string) => {
    const isValid = validateVideoUrl(url);
    const platform = detectPlatform(url);
    
    setVideoState(prev => ({
      ...prev,
      url,
      isValid,
      platform: isValid ? platform : "",
      generatedCode: isValid ? generateIframeCode(url, prev.width, prev.height, prev.allowFullscreen, prev.responsive, prev.autoplay) : ""
    }));
  };

  const handleSettingsChange = (settings: Partial<VideoState>) => {
    setVideoState(prev => {
      const newState = { ...prev, ...settings };
      
      if (newState.isValid && newState.url) {
        newState.generatedCode = generateIframeCode(
          newState.url,
          newState.width,
          newState.height,
          newState.allowFullscreen,
          newState.responsive,
          newState.autoplay
        );
      }
      
      return newState;
    });
  };

  const generateCode = () => {
    if (videoState.isValid && videoState.url) {
      const code = generateIframeCode(
        videoState.url,
        videoState.width,
        videoState.height,
        videoState.allowFullscreen,
        videoState.responsive,
        videoState.autoplay
      );
      
      setVideoState(prev => ({ ...prev, generatedCode: code }));
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <URLInput
          url={videoState.url}
          platform={videoState.platform}
          isValid={videoState.isValid}
          onUrlChange={handleUrlChange}
        />
        
        <IframeSettings
          width={videoState.width}
          height={videoState.height}
          allowFullscreen={videoState.allowFullscreen}
          responsive={videoState.responsive}
          autoplay={videoState.autoplay}
          onSettingsChange={handleSettingsChange}
          onGenerate={generateCode}
          isValid={videoState.isValid}
        />
      </div>

      {/* Output Section */}
      <div className="space-y-6">
        <VideoPreview
          url={videoState.url}
          width={videoState.width}
          height={videoState.height}
          allowFullscreen={videoState.allowFullscreen}
          isValid={videoState.isValid}
          platform={videoState.platform}
        />
        
        <CodeOutput
          code={videoState.generatedCode}
          isValid={videoState.isValid}
        />
      </div>
    </div>
  );
}
