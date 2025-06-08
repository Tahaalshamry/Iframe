# أداة توليد كود التضمين للفيديوهات | Video Iframe Generator

أداة ويب قوية لتحويل روابط الفيديو من منصات متعددة إلى كود iframe قابل للتضمين مع معاينة مباشرة.

A powerful web-based tool for converting video URLs from multiple platforms into embeddable iframe code with live preview functionality.

## Features

- **Multi-Platform Support**: Works with YouTube, Vimeo, Dailymotion, XHamster, Pornhub, and direct video files
- **Live Preview**: See your video instantly before generating the embed code
- **Customizable Settings**: Adjust dimensions, enable/disable fullscreen, responsive mode, and autoplay
- **Clean Code Generation**: Generates valid HTML5 iframe and video element code
- **Copy to Clipboard**: One-click copying of generated embed codes
- **Responsive Design**: Modern UI that works on all devices
- **Dark Mode Support**: Toggle between light and dark themes

## Supported Formats

### Video Platforms
- YouTube
- Vimeo  
- Dailymotion
- XHamster
- Pornhub
- Other video hosting platforms

### Direct Video Files
- MP4 (.mp4)
- WebM (.webm)
- OGV (.ogv)
- AVI (.avi)
- MOV (.mov)
- WMV (.wmv)
- FLV (.flv)
- MKV (.mkv)
- M4V (.m4v)
- 3GP (.3gp)

## How to Use

1. **Enter Video URL**: Paste any supported video URL in the input field
2. **Platform Detection**: The app automatically detects the video platform
3. **Customize Settings**: Adjust iframe dimensions and playback options
4. **Live Preview**: View the video in the preview section
5. **Generate Code**: Click "Generate Iframe Code" to create embed code
6. **Copy & Use**: Copy the generated code and paste it into your website

## نشر المشروع على GitHub Pages | GitHub Pages Deployment

### خطوات النشر بالعربية:

1. **إنشاء حساب GitHub** (إذا لم يكن لديك):
   - اذهب إلى [github.com](https://github.com)
   - انقر على "Sign up" وأنشئ حسابك

2. **إنشاء مستودع جديد**:
   - انقر على "+" في أعلى اليمين
   - اختر "New repository"
   - أدخل اسم المشروع: `video-iframe-generator`
   - اجعل المستودع "Public"
   - انقر "Create repository"

3. **رفع الملفات**:
   - انقر "uploading an existing file"
   - اسحب جميع ملفات المشروع أو انقر "choose your files"
   - أدخل رسالة: "Initial commit"
   - انقر "Commit changes"

4. **تفعيل GitHub Pages**:
   - اذهب إلى تبويب "Settings"
   - انزل إلى قسم "Pages"
   - في "Source" اختر "GitHub Actions"
   - احفظ الإعدادات

5. **الوصول للموقع**:
   - موقعك سيكون متاح على: `https://yourusername.github.io/video-iframe-generator`

### English Instructions:

1. **Create GitHub Account**: Visit [github.com](https://github.com) and sign up
2. **Create New Repository**: Click "+" → "New repository" → Name it `video-iframe-generator`
3. **Upload Files**: Upload all project files to the repository
4. **Enable GitHub Pages**: Go to Settings → Pages → Source: "GitHub Actions"
5. **Access Your Site**: `https://yourusername.github.io/video-iframe-generator`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Shadcn/ui
- **Build Tool**: Vite
- **Backend**: Express.js (for development)
- **Deployment**: GitHub Pages compatible

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.