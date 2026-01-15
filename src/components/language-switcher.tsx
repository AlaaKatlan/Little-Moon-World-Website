import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(i18n.language === 'ar');

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    setIsArabic(prev => !prev);
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" checked={isArabic} onChange={toggleLanguage} />
        <div className="track">
          <div className="knob">
            {isArabic ? 'AR' : 'EN'}
          </div>
        </div>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
