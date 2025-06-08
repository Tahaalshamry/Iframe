# قائمة الملفات المطلوبة للرفع على GitHub

## المجلدات والملفات التي يجب نسخها:

### 📁 المجلد الرئيسي (Root Directory)
```
✅ package.json
✅ package-lock.json  
✅ tsconfig.json
✅ vite.config.ts
✅ tailwind.config.ts
✅ postcss.config.js
✅ components.json
✅ build.js
✅ README.md
✅ DEPLOYMENT_GUIDE.md
✅ .gitignore (سيتم إنشاؤه)
```

### 📁 مجلد .github
```
.github/
└── workflows/
    └── deploy.yml
```

### 📁 مجلد client
```
client/
├── index.html
├── src/
│   ├── components/
│   │   ├── ui/ (جميع الملفات)
│   │   ├── code-output.tsx
│   │   ├── iframe-settings.tsx
│   │   ├── url-input.tsx
│   │   ├── video-generator.tsx
│   │   └── video-preview.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── queryClient.ts
│   │   ├── utils.ts
│   │   └── video-utils.ts
│   ├── pages/
│   │   ├── home.tsx
│   │   └── not-found.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
```

### 📁 مجلد shared
```
shared/
└── schema.ts
```

---

## خطوات النسخ والرفع:

### 1️⃣ إنشاء مجلد المشروع
- أنشئ مجلد جديد باسم `video-iframe-generator`

### 2️⃣ نسخ الملفات
- انسخ جميع الملفات والمجلدات المذكورة أعلاه
- تأكد من الحفاظ على هيكل المجلدات كما هو

### 3️⃣ إنشاء ملف .gitignore
أنشئ ملف `.gitignore` في المجلد الرئيسي واكتب فيه:
```
node_modules/
dist/
.env
.DS_Store
*.log
coverage/
.vscode/
.idea/
```

### 4️⃣ الرفع على GitHub
- اتبع التعليمات في ملف `DEPLOYMENT_GUIDE.md`
- ارفع جميع الملفات دفعة واحدة

---

## ✅ التحقق من اكتمال الملفات

تأكد من وجود هذه الملفات الأساسية:
- [ ] `package.json` - يحتوي على معلومات المشروع والتبعيات
- [ ] `build.js` - سكريبت البناء لـ GitHub Pages  
- [ ] `.github/workflows/deploy.yml` - إعدادات النشر التلقائي
- [ ] `client/index.html` - الصفحة الرئيسية
- [ ] `client/src/App.tsx` - تطبيق React الرئيسي
- [ ] `README.md` - دليل المشروع

---

## 🚀 بعد الرفع

1. انتظر 2-5 دقائق لاكتمال البناء
2. اذهب إلى تبويب "Actions" لمتابعة التقدم
3. بعد اكتمال البناء، ستجد الموقع على:
   `https://yourusername.github.io/video-iframe-generator`