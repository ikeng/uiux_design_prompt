import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import i18n from '../i18n';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 从localStorage读取保存的语言，如果没有则使用i18n默认语言
  const [language, setLanguage] = useState<string>(() => {
    const savedLanguage = localStorage.getItem('app-language');
    if (savedLanguage) {
      return savedLanguage;
    }
    return i18n.language;
  });

  // 初始化时设置i18n语言
  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    // 保存语言选择到localStorage
    localStorage.setItem('app-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 