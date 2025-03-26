import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import FormSelect from './FormSelect';
import FormMultiSelect from './FormMultiSelect';
import { PromptFormData, Platform, AppType, DesignStyle, FrontendTech, IconLibrary, FontLibrary, ThemeMode, LayoutType, CssFeature, JsFeature, AccessibilityFeature } from '../types';
import { generatePrompt } from '../utils/promptGenerator';

interface PromptFormProps {
  onGenerate: (prompt: string, formData: PromptFormData) => void;
  initialValues?: Partial<PromptFormData>;
}

const PromptForm: React.FC<PromptFormProps> = ({ onGenerate, initialValues = {} }) => {
  const { t, i18n } = useTranslation();
  
  const [formData, setFormData] = useState<PromptFormData>({
    platform: (initialValues.platform as Platform) || 'web' as Platform,
    appType: (initialValues.appType as AppType) || 'social' as AppType,
    designStyle: (initialValues.designStyle as DesignStyle) || 'materialDesign' as DesignStyle,
    frontendTech: (initialValues.frontendTech as FrontendTech) || 'react' as FrontendTech,
    iconLibrary: (initialValues.iconLibrary as IconLibrary) || 'materialIcons' as IconLibrary,
    fontLibrary: (initialValues.fontLibrary as FontLibrary) || 'googleFonts' as FontLibrary,
    themeMode: (initialValues.themeMode as ThemeMode) || 'dark' as ThemeMode,
    layoutType: (initialValues.layoutType as LayoutType) || 'responsive' as LayoutType,
    imageResources: initialValues.imageResources || 'Unsplash',
    cssFeatures: initialValues.cssFeatures || ['grid', 'flexbox', 'cssVariables'] as CssFeature[],
    jsFeatures: initialValues.jsFeatures || ['es6', 'promises', 'asyncAwait'] as JsFeature[],
    accessibilityFeatures: initialValues.accessibilityFeatures || ['screenReader', 'keyboardNav', 'highContrast'] as AccessibilityFeature[],
  });

  const handleChange = <K extends keyof PromptFormData>(key: K, value: PromptFormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = generatePrompt(formData);
    onGenerate(prompt, formData);
  };

  const handleReset = () => {
    setFormData({
      platform: 'web' as Platform,
      appType: 'social' as AppType,
      designStyle: 'materialDesign' as DesignStyle,
      frontendTech: 'react' as FrontendTech,
      iconLibrary: 'materialIcons' as IconLibrary,
      fontLibrary: 'googleFonts' as FontLibrary,
      themeMode: 'dark' as ThemeMode,
      layoutType: 'responsive' as LayoutType,
      imageResources: 'Unsplash',
      cssFeatures: ['grid', 'flexbox', 'cssVariables'] as CssFeature[],
      jsFeatures: ['es6', 'promises', 'asyncAwait'] as JsFeature[],
      accessibilityFeatures: ['screenReader', 'keyboardNav', 'highContrast'] as AccessibilityFeature[],
    });
  };

  // Create options for each select field from i18n translations
  const getOptions = (category: string) => {
    const options = t(`generator.${category}.options`, { returnObjects: true }) as Record<string, string>;
    return Object.entries(options).map(([value, label]) => ({ value, label }));
  };

  // 创建CSS特性选项，根据当前语言显示不同标签
  const cssOptions = useMemo(() => [
    { value: 'grid', label: i18n.language === 'zh' ? 'Grid' : 'Grid' },
    { value: 'flexbox', label: i18n.language === 'zh' ? 'Flexbox' : 'Flexbox' },
    { value: 'cssVariables', label: i18n.language === 'zh' ? 'CSS变量' : 'CSS Variables' },
    { value: 'cssAnimations', label: i18n.language === 'zh' ? 'CSS动画和过渡' : 'CSS Animations & Transitions' },
    { value: 'cssFilters', label: i18n.language === 'zh' ? 'CSS滤镜' : 'CSS Filters' },
    { value: 'cssShapes', label: i18n.language === 'zh' ? 'CSS Shapes' : 'CSS Shapes' },
    { value: 'mediaqueries', label: i18n.language === 'zh' ? '媒体查询' : 'Media Queries' },
    { value: 'cssCalc', label: i18n.language === 'zh' ? 'CSS计算属性' : 'CSS Calc Functions' },
  ], [i18n.language]);

  // 创建JS特性选项，根据当前语言显示不同标签
  const jsOptions = useMemo(() => [
    { value: 'es6', label: i18n.language === 'zh' ? 'ES6+' : 'ES6+' },
    { value: 'promises', label: i18n.language === 'zh' ? 'Promises' : 'Promises' },
    { value: 'asyncAwait', label: i18n.language === 'zh' ? 'Async/Await' : 'Async/Await' },
    { value: 'modules', label: i18n.language === 'zh' ? '模块化设计' : 'Modular Design' },
    { value: 'webApis', label: i18n.language === 'zh' ? 'Web APIs' : 'Web APIs' },
    { value: 'localStorage', label: i18n.language === 'zh' ? '本地存储' : 'Local Storage' },
    { value: 'serviceWorkers', label: i18n.language === 'zh' ? '服务工作线程' : 'Service Workers' },
  ], [i18n.language]);

  // 创建辅助功能选项，根据当前语言显示不同标签
  const accessibilityOptions = useMemo(() => [
    { value: 'screenReader', label: i18n.language === 'zh' ? '屏幕阅读器兼容' : 'Screen Reader Compatible' },
    { value: 'keyboardNav', label: i18n.language === 'zh' ? '键盘导航' : 'Keyboard Navigation' },
    { value: 'highContrast', label: i18n.language === 'zh' ? '高对比度模式' : 'High Contrast Mode' },
    { value: 'voiceControl', label: i18n.language === 'zh' ? '语音控制' : 'Voice Control' },
    { value: 'fontResize', label: i18n.language === 'zh' ? '字体大小调整' : 'Font Size Adjustment' },
    { value: 'colorBlindFriendly', label: i18n.language === 'zh' ? '色盲友好模式' : 'Color Blind Friendly' },
  ], [i18n.language]);

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-6 rounded-lg shadow-md bg-[rgb(var(--card))]"
    >
      <h2 
        className="text-2xl font-bold mb-6 text-[rgb(var(--card-foreground))]"
      >
        {t('generator.title')}
      </h2>
      <p 
        className="mb-6 text-[rgb(var(--muted-foreground))]"
      >
        {t('generator.subtitle')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <FormSelect
          id="platform"
          label={t('generator.platform.label')}
          options={getOptions('platform')}
          value={formData.platform}
          onChange={(value) => handleChange('platform', value as Platform)}
          required
          placeholder={t('generator.platform.placeholder')}
        />
        
        <FormSelect
          id="appType"
          label={t('generator.appType.label')}
          options={getOptions('appType')}
          value={formData.appType}
          onChange={(value) => handleChange('appType', value as AppType)}
          required
          placeholder={t('generator.appType.placeholder')}
        />
        
        <FormSelect
          id="designStyle"
          label={t('generator.designStyle.label')}
          options={getOptions('designStyle')}
          value={formData.designStyle}
          onChange={(value) => handleChange('designStyle', value as DesignStyle)}
          required
          placeholder={t('generator.designStyle.placeholder')}
        />
        
        <FormSelect
          id="frontendTech"
          label={t('generator.frontendTech.label')}
          options={getOptions('frontendTech')}
          value={formData.frontendTech}
          onChange={(value) => handleChange('frontendTech', value as FrontendTech)}
          required
          placeholder={t('generator.frontendTech.placeholder')}
        />
        
        <FormSelect
          id="iconLibrary"
          label={t('generator.iconLibrary.label')}
          options={getOptions('iconLibrary')}
          value={formData.iconLibrary}
          onChange={(value) => handleChange('iconLibrary', value as IconLibrary)}
          required
          placeholder={t('generator.iconLibrary.placeholder')}
        />
        
        <FormSelect
          id="fontLibrary"
          label={t('generator.fontLibrary.label')}
          options={getOptions('fontLibrary')}
          value={formData.fontLibrary}
          onChange={(value) => handleChange('fontLibrary', value as FontLibrary)}
          required
          placeholder={t('generator.fontLibrary.placeholder')}
        />
        
        <FormSelect
          id="themeMode"
          label={t('generator.themeMode.label')}
          options={getOptions('themeMode')}
          value={formData.themeMode}
          onChange={(value) => handleChange('themeMode', value as ThemeMode)}
          required
          placeholder={t('generator.themeMode.placeholder')}
        />
        
        <FormSelect
          id="layoutType"
          label={t('generator.layoutType.label')}
          options={getOptions('layoutType')}
          value={formData.layoutType}
          onChange={(value) => handleChange('layoutType', value as LayoutType)}
          required
          placeholder={t('generator.layoutType.placeholder')}
        />

        <FormMultiSelect
          id="cssFeatures"
          label={i18n.language === 'zh' ? "CSS特性" : "CSS Features"}
          options={cssOptions}
          value={formData.cssFeatures}
          onChange={(value: string[]) => handleChange('cssFeatures', value as CssFeature[])}
          placeholder={i18n.language === 'zh' ? "选择CSS特性" : "Select CSS Features"}
          className="col-span-2"
        />

        <FormMultiSelect
          id="jsFeatures"
          label={i18n.language === 'zh' ? "JavaScript特性" : "JavaScript Features"}
          options={jsOptions}
          value={formData.jsFeatures}
          onChange={(value: string[]) => handleChange('jsFeatures', value as JsFeature[])}
          placeholder={i18n.language === 'zh' ? "选择JavaScript特性" : "Select JavaScript Features"}
          className="col-span-2"
        />

        <FormMultiSelect
          id="accessibilityFeatures"
          label={i18n.language === 'zh' ? "辅助功能" : "Accessibility Features"}
          options={accessibilityOptions}
          value={formData.accessibilityFeatures}
          onChange={(value: string[]) => handleChange('accessibilityFeatures', value as AccessibilityFeature[])}
          placeholder={i18n.language === 'zh' ? "选择辅助功能" : "Select Accessibility Features"}
          className="col-span-2"
        />
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="submit"
          className="bg-[rgb(var(--primary))] hover:bg-blue-700 text-[rgb(var(--primary-foreground))] font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {t('generator.generateButton')}
        </button>
        
        <button
          type="button"
          onClick={handleReset}
          className="bg-[rgb(var(--secondary))] text-[rgb(var(--secondary-foreground))] font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {t('generator.resetButton')}
        </button>
      </div>
    </form>
  );
};

export default PromptForm; 