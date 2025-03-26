import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, LanguageIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // 判断是否是系统主题
  const isSystemTheme = !localStorage.getItem('theme');

  // 获取主题显示图标
  const getThemeIcon = () => {
    if (isSystemTheme) {
      return <ComputerDesktopIcon className="h-5 w-5" />;
    }
    return theme === 'light' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />;
  };

  // 获取主题按钮样式
  const getThemeButtonClass = () => {
    const baseClass = "p-2 rounded-full flex items-center";
    
    if (isSystemTheme) {
      return `${baseClass} bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white`;
    }
    
    if (theme === 'light') {
      return `${baseClass} bg-amber-100 hover:bg-amber-200 text-amber-800`;
    }
    
    return `${baseClass} bg-blue-800 hover:bg-blue-700 text-white`;
  };

  // 处理主题切换
  const handleToggleTheme = () => {
    toggleTheme();
    // 确保设置了 localStorage 主题
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-[rgb(var(--background-secondary))]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-[rgb(var(--foreground))]">
            {t('app.title')}
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className="hover:underline text-[rgb(var(--foreground))]" 
          >
            {t('navigation.home')}
          </Link>
          <Link 
            to="/generator" 
            className="hover:underline text-[rgb(var(--foreground))]" 
          >
            {t('navigation.generator')}
          </Link>
          <Link 
            to="/templates" 
            className="hover:underline text-[rgb(var(--foreground))]" 
          >
            {t('navigation.templates')}
          </Link>
          <Link 
            to="/about" 
            className="hover:underline text-[rgb(var(--foreground))]" 
          >
            {t('navigation.about')}
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
            aria-label="Switch Language"
          >
            <LanguageIcon className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleToggleTheme}
            className={getThemeButtonClass()}
            aria-label={isSystemTheme ? "Using System Theme" : (theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode')}
          >
            {getThemeIcon()}
            <span className="ml-1.5 text-sm font-medium hidden sm:inline">
              {isSystemTheme ? 
                (language === 'zh' ? '系统' : 'System') : 
                (theme === 'light' ? 
                  (language === 'zh' ? '浅色' : 'Light') : 
                  (language === 'zh' ? '深色' : 'Dark')
                )
              }
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 