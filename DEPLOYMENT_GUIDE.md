# دليل نشر المشروع على GitHub | Deployment Guide

## الملفات المطلوبة للنشر | Required Files for Deployment

قم بنسخ هذه الملفات إلى مجلد جديد لرفعها على GitHub:

### 1. ملفات المشروع الأساسية | Core Project Files
```
client/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
└── assets/ (if any)

shared/
└── schema.ts

.github/
└── workflows/
    └── deploy.yml

build.js
package.json
package-lock.json
tsconfig.json
vite.config.ts
tailwind.config.ts
postcss.config.js
components.json
README.md
.gitignore
```

### 2. إعداد ملف .gitignore
```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
dist/
build/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity
```

## خطوات النشر التفصيلية | Detailed Deployment Steps

### الخطوة 1: تحضير الملفات
1. أنشئ مجلد جديد على جهازك باسم `video-iframe-generator`
2. انسخ جميع الملفات المذكورة أعلاه إلى هذا المجلد
3. تأكد من وجود ملف `.gitignore` في المجلد الرئيسي

### الخطوة 2: إنشاء مستودع GitHub
1. اذهب إلى [github.com](https://github.com)
2. انقر على "+" في أعلى اليمين
3. اختر "New repository"
4. أدخل اسم المشروع: `video-iframe-generator`
5. أضف وصف: "أداة توليد كود التضمين للفيديوهات - Video Iframe Generator"
6. اجعل المستودع "Public"
7. لا تختر "Add a README file" (لأن لدينا واحد بالفعل)
8. انقر "Create repository"

### الخطوة 3: رفع الملفات
1. في صفحة المستودع الجديد، انقر "uploading an existing file"
2. اسحب جميع الملفات من مجلد `video-iframe-generator` إلى المتصفح
3. أو انقر "choose your files" واختر جميع الملفات
4. أدخل رسالة الالتزام: "Initial commit - Video Iframe Generator"
5. انقر "Commit changes"

### الخطوة 4: تفعيل GitHub Pages
1. اذهب إلى تبويب "Settings" في المستودع
2. انزل إلى قسم "Pages" في القائمة الجانبية
3. في "Source" اختر "GitHub Actions"
4. سيتم تفعيل النشر التلقائي

### الخطوة 5: انتظار البناء والنشر
1. اذهب إلى تبويب "Actions"
2. ستجد عملية بناء تعمل (Deploy to GitHub Pages)
3. انتظر حتى تكتمل (تأخذ عادة 2-5 دقائق)
4. عندما تكتمل ستجد علامة خضراء ✅

### الخطوة 6: الوصول لموقعك
- موقعك سيكون متاح على: `https://yourusername.github.io/video-iframe-generator`
- استبدل `yourusername` باسم المستخدم الخاص بك في GitHub

## حل المشاكل الشائعة | Troubleshooting

### إذا فشل البناء:
1. تأكد من وجود جميع الملفات المطلوبة
2. تحقق من ملف `package.json` وتأكد من صحة التبعيات
3. تأكد من وجود ملف `.github/workflows/deploy.yml`

### إذا لم يظهر الموقع:
1. تحقق من إعدادات Pages في Settings
2. تأكد أن Source مضبوط على "GitHub Actions"
3. انتظر بضع دقائق إضافية للتحديث

### إذا واجهت مشاكل في الملفات:
1. تأكد من رفع جميع الملفات في المجلد `client`
2. تحقق من وجود ملف `index.html` في مجلد `client`
3. تأكد من وجود ملف `build.js` في المجلد الرئيسي

## معلومات إضافية | Additional Information

- الموقع سيتحدث تلقائياً عند رفع تغييرات جديدة
- يمكنك تعديل الملفات مباشرة في GitHub واختبار التغييرات
- النشر يستغرق عادة 2-5 دقائق بعد كل تحديث