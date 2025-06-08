# رفع المشروع على GitHub - خطوات سريعة

## 🎯 الهدف
رفع أداة توليد كود الفيديو على GitHub Pages ليعمل مجاناً على الإنترنت.

## 📋 الخطوات السريعة

### 1. إنشاء حساب GitHub
- اذهب إلى: https://github.com
- انقر "Sign up" وأنشئ حسابك المجاني

### 2. إنشاء مستودع جديد
- انقر الزر الأخضر "+" في أعلى اليمين
- اختر "New repository"
- اكتب الاسم: `video-iframe-generator`
- اختر "Public"
- انقر "Create repository"

### 3. رفع الملفات
- في الصفحة الجديدة، انقر "uploading an existing file"
- اسحب هذه الملفات من مجلد المشروع:

```
📁 الملفات المطلوبة:
✅ package.json
✅ build.js  
✅ tsconfig.json
✅ vite.config.ts
✅ tailwind.config.ts
✅ postcss.config.js
✅ components.json
✅ README.md
✅ .gitignore

📁 المجلدات:
✅ client/ (كامل مع جميع الملفات)
✅ shared/ (ملف schema.ts)
✅ .github/ (مجلد workflows)
```

- أدخل رسالة: "إضافة أداة توليد كود الفيديو"
- انقر "Commit changes"

### 4. تفعيل GitHub Pages
- اذهب لتبويب "Settings"
- انزل لقسم "Pages"
- في "Source" اختر "GitHub Actions"

### 5. انتظار البناء
- اذهب لتبويب "Actions"
- انتظر العلامة الخضراء ✅ (2-5 دقائق)

### 6. الوصول للموقع
رابط موقعك: `https://اسم-المستخدم.github.io/video-iframe-generator`

---

## ❓ في حالة وجود مشاكل

### إذا فشل البناء:
1. تأكد من رفع مجلد `.github/workflows/deploy.yml`
2. تأكد من وجود ملف `build.js`
3. تأكد من رفع مجلد `client` كاملاً

### إذا لم يظهر الموقع:
1. انتظر 10 دقائق إضافية
2. تحقق من إعدادات Pages
3. تأكد أن GitHub Actions مفعل

---

## 🎉 مبروك!
بعد اكتمال هذه الخطوات، ستملك موقعاً مجانياً على الإنترنت لتوليد أكواد تضمين الفيديو!