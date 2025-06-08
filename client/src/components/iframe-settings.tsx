import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings, Wand2 } from "lucide-react";

interface IframeSettingsProps {
  width: number;
  height: number;
  allowFullscreen: boolean;
  responsive: boolean;
  autoplay: boolean;
  onSettingsChange: (settings: any) => void;
  onGenerate: () => void;
  isValid: boolean;
}

export function IframeSettings({
  width,
  height,
  allowFullscreen,
  responsive,
  autoplay,
  onSettingsChange,
  onGenerate,
  isValid
}: IframeSettingsProps) {
  
  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(e.target.value) || 800;
    onSettingsChange({ width: newWidth });
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(e.target.value) || 450;
    onSettingsChange({ height: newHeight });
  };

  const handleCheckboxChange = (setting: string, checked: boolean) => {
    onSettingsChange({ [setting]: checked });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          Iframe Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="iframeWidth" className="text-sm font-medium">
              Width
            </Label>
            <Input
              id="iframeWidth"
              type="number"
              value={width}
              onChange={handleWidthChange}
              min="200"
              max="1920"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="iframeHeight" className="text-sm font-medium">
              Height
            </Label>
            <Input
              id="iframeHeight"
              type="number"
              value={height}
              onChange={handleHeightChange}
              min="200"
              max="1080"
              className="mt-1"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="allowFullscreen"
              checked={allowFullscreen}
              onCheckedChange={(checked) => handleCheckboxChange('allowFullscreen', checked as boolean)}
            />
            <Label htmlFor="allowFullscreen" className="text-sm font-medium">
              Allow Fullscreen
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="responsive"
              checked={responsive}
              onCheckedChange={(checked) => handleCheckboxChange('responsive', checked as boolean)}
            />
            <Label htmlFor="responsive" className="text-sm font-medium">
              Responsive
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="autoplay"
              checked={autoplay}
              onCheckedChange={(checked) => handleCheckboxChange('autoplay', checked as boolean)}
            />
            <Label htmlFor="autoplay" className="text-sm font-medium">
              Autoplay
            </Label>
          </div>
        </div>

        <Button 
          onClick={onGenerate}
          disabled={!isValid}
          className="w-full"
          size="lg"
        >
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Iframe Code
        </Button>
      </CardContent>
    </Card>
  );
}
