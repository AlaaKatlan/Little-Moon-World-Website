import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ملفات الترجمة
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
    },
    fallbackLng: 'en', // اللغة الافتراضية
    interpolation: {
      escapeValue: false, // مطلوب لاستخدام HTML في النصوص
    },
    detection: {
      order: ['localStorage', 'navigator'], // أولوية الكشف عن اللغة
      caches: ['localStorage'], // حفظ اللغة في localStorage
    },
    react: {
      useSuspense: false, // تجنب استخدام Suspense إذا لم تكن تحتاجه
    },
  });

export default i18n;