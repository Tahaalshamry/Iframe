import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, RefreshCw, Maximize } from "lucide-react";
import { convertToEmbedUrl } from "@/lib/video-utils";

interface VideoPreviewProps {
  url: string;
  width: number;
  height: number;
  allowFullscreen: boolean;
  isValid: boolean;
  platform: string;
}

export function VideoPreview({ url, width, height, allowFullscreen, isValid, platform }: VideoPreviewProps) {
  const embedUrl = isValid ? convertToEmbedUrl(url, platform) : "";
  const aspectRatio = height / width;
  const maxWidth = 560;
  const previewWidth = Math.min(width, maxWidth);
  const previewHeight = previewWidth * aspectRatio;

  const handleRefresh = () => {
    // Force iframe reload by changing key
    const iframe = document.querySelector('#preview-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const handleFullscreen = () => {
    const container = document.querySelector('#preview-container');
    if (container && container.requestFullscreen) {
      container.requestFullscreen();
    }
  };

  const renderPreviewContent = () => {
    if (!isValid || !url) {
      return (
        <div className="video-preview-container">
          <div className="text-center text-muted-foreground">
            <Eye className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Video preview will appear here</p>
            <p className="text-xs mt-1">Enter a video URL to get started</p>
          </div>
        </div>
      );
    }

    if (platform.toLowerCase() === 'direct video') {
      return (
        <div className="video-preview-container">
          <video
            key={url}
            controls
            style={{ width: previewWidth, height: previewHeight }}
            className="rounded-lg"
          >
            <source src={url} type="video/mp4" />
            <source src={url} type="video/webm" />
            <source src={url} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    return (
      <div className="video-preview-container">
        <iframe
          id="preview-iframe"
          src={embedUrl}
          style={{ width: previewWidth, height: previewHeight }}
          frameBorder="0"
          allowFullScreen={allowFullscreen}
          loading="lazy"
          className="rounded-lg"
          title="Video Preview"
        />
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Live Preview
          </CardTitle>
          <div className="flex items-center gap-2">
            {isValid && (
              <Badge variant="outline" className="text-xs">
                {platform || "Unknown"}
              </Badge>
            )}
            <Badge variant={isValid ? "default" : "secondary"} className="text-xs">
              {isValid ? "Ready" : "Waiting"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div id="preview-container" className="relative">
          {renderPreviewContent()}
        </div>
        
        {isValid && (
          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              className="flex items-center gap-1"
            >
              <RefreshCw className="h-3 w-3" />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleFullscreen}
              className="flex items-center gap-1"
            >
              <Maximize className="h-3 w-3" />
              Fullscreen
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
