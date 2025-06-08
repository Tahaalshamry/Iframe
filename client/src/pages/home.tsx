import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VideoGenerator } from "@/components/video-generator";
import { Code, Github, Smartphone, Zap, CheckCircle, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Code className="text-primary-foreground text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Video Iframe Generator</h1>
                <p className="text-sm text-muted-foreground">Convert video URLs to embed codes instantly</p>
              </div>
            </div>
            <div className="hidden md:flex items-center text-sm text-muted-foreground">
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub Pages Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <VideoGenerator />

        {/* Features Section */}
        <div className="mt-12">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Powerful Features</CardTitle>
              <CardDescription>Everything you need for video embedding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Instant Generation</h3>
                  <p className="text-sm text-muted-foreground">Generate iframe codes instantly from any video URL with real-time preview</p>
                </div>
                
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-success text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Multi-Platform Support</h3>
                  <p className="text-sm text-muted-foreground">Works with direct video files and popular video hosting platforms</p>
                </div>
                
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-warning text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Responsive Ready</h3>
                  <p className="text-sm text-muted-foreground">Generated codes work perfectly on all devices and screen sizes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              <p>&copy; 2024 Video Iframe Generator. Built for developers, by developers.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Github className="h-3 w-3" />
                GitHub Pages Ready
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                Universal Support
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
