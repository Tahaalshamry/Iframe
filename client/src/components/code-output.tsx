import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Code, Copy, Check, Info, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeOutputProps {
  code: string;
  isValid: boolean;
}

export function CodeOutput({ code, isValid }: CodeOutputProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyCode = async () => {
    if (!code) {
      toast({
        title: "No Code to Copy",
        description: "Generate iframe code first",
        variant: "destructive",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Code Copied",
        description: "Iframe code has been copied to clipboard",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Could not copy code to clipboard",
        variant: "destructive",
      });
    }
  };

  const codeLength = code ? code.length : 0;
  const lineCount = code ? code.split('\n').length : 0;

  return (
    <div className="space-y-6">
      {/* Generated Code Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Generated Iframe Code
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyCode}
              disabled={!code}
              className="flex items-center gap-2"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <pre className="code-block min-h-[120px] whitespace-pre-wrap">
              <code>
                {code || "<!-- Generated iframe code will appear here -->\n<!-- Enter a video URL and click \"Generate Iframe Code\" to get started -->"}
              </code>
            </pre>
          </div>
          
          {/* Code Statistics */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1">
                <Code className="h-3 w-3" />
                HTML
              </span>
              <span>{codeLength} characters</span>
              <span>{lineCount} lines</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Valid HTML5</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Instructions Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-warning" />
            Usage Instructions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <p className="text-muted-foreground">Paste your video URL in the input field above</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <p className="text-muted-foreground">Customize iframe dimensions and settings as needed</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <p className="text-muted-foreground">Click "Generate Iframe Code" to create the embed code</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                4
              </div>
              <p className="text-muted-foreground">Copy the generated code and paste it into your website</p>
            </div>
          </div>

          {isValid && code && (
            <Alert className="mt-4">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Your iframe code is ready! Copy it and paste it into your HTML where you want the video to appear.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
