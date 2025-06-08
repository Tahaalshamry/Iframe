import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link, AlertCircle, CheckCircle, Copy, Play, Video, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface URLInputProps {
  url: string;
  platform: string;
  isValid: boolean;
  onUrlChange: (url: string) => void;
}

export function URLInput({ url, platform, isValid, onUrlChange }: URLInputProps) {
  const [inputValue, setInputValue] = useState(url);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onUrlChange(newValue);
  };

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputValue(text);
      onUrlChange(text);
      toast({
        title: "URL Pasted",
        description: "URL has been pasted from clipboard",
      });
    } catch (error) {
      toast({
        title: "Paste Failed",
        description: "Could not read from clipboard",
        variant: "destructive",
      });
    }
  };

  const getStatusIcon = () => {
    if (!inputValue) return null;
    return isValid ? (
      <CheckCircle className="h-4 w-4 text-success" />
    ) : (
      <AlertCircle className="h-4 w-4 text-destructive" />
    );
  };

  const getPlatformIcon = () => {
    switch (platform.toLowerCase()) {
      case 'youtube':
        return <Play className="h-4 w-4" />;
      case 'vimeo':
        return <Video className="h-4 w-4" />;
      case 'direct video':
        return <Video className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5 text-primary" />
          Video URL Input
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="videoUrl" className="text-sm font-medium">
            Enter Video URL
          </Label>
          <div className="relative mt-2">
            <Input
              id="videoUrl"
              type="url"
              placeholder="https://example.com/video.mp4 or platform video URL"
              value={inputValue}
              onChange={handleInputChange}
              className="pr-20"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
              {getStatusIcon()}
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePasteFromClipboard}
                className="h-auto p-1"
                title="Paste from clipboard"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {inputValue && !isValid && (
            <Alert className="mt-2" variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Invalid URL format or unsupported video type
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Platform Detection */}
        {isValid && platform && (
          <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
            <span className="text-sm font-medium text-muted-foreground">Detected Platform:</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              {getPlatformIcon()}
              {platform}
            </Badge>
          </div>
        )}

        {/* Supported Platforms Info */}
        <Alert>
          <AlertDescription>
            <div className="text-sm">
              <strong className="text-primary">Supported Formats:</strong>
              <div className="mt-1 space-y-1 text-muted-foreground">
                <div>• Direct video files (MP4, WebM, OGV)</div>
                <div>• YouTube, Vimeo, Dailymotion</div>
                <div>• XHamster, Pornhub</div>
                <div>• Other video hosting platforms</div>
                <div>• Custom streaming URLs</div>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
