export type Platform = 'ios' | 'android' | 'web' | 'crossPlatform' | 'macos' | 'windows';
export type AppType = 'fitness' | 'ecommerce' | 'social' | 'education' | 'finance' | 'travel' | 'music' | 'video' | 'news' | 'productivity' | 'healthcare' | 'game';
export type DesignStyle = 'glassmorphism' | 'neumorphism' | 'flat' | 'skeuomorphism' | 'minimalism' | 'materialDesign' | 'appleDesign' | 'futurism' | 'retro' | '3d';
export type FrontendTech = 'vanillaJS' | 'react' | 'vue' | 'angular' | 'flutter' | 'swiftUI' | 'jetpackCompose' | 'bootstrap' | 'tailwind';
export type IconLibrary = 'fontAwesome' | 'materialIcons' | 'featherIcons' | 'phosphorIcons' | 'ionicons' | 'sfSymbols' | 'bootstrapIcons' | 'heroicons';
export type FontLibrary = 'fontSquirrel' | 'googleFonts' | 'adobeFonts' | 'sfPro' | 'roboto' | 'inter' | 'montserrat' | 'poppins';
export type ThemeMode = 'dark' | 'light' | 'auto' | 'highContrast' | 'custom';
export type LayoutType = 'responsive' | 'adaptive' | 'fluid' | 'grid' | 'fixed';

// CSS特性选项
export type CssFeature = 'grid' | 'flexbox' | 'cssVariables' | 'cssAnimations' | 'cssFilters' | 'cssShapes' | 'mediaqueries' | 'cssCalc';
// JS特性选项
export type JsFeature = 'es6' | 'promises' | 'asyncAwait' | 'modules' | 'webApis' | 'localStorage' | 'serviceWorkers';
// 辅助功能选项
export type AccessibilityFeature = 'screenReader' | 'keyboardNav' | 'highContrast' | 'voiceControl' | 'fontResize' | 'colorBlindFriendly';

export interface PromptFormData {
  platform: Platform;
  appType: AppType;
  designStyle: DesignStyle;
  frontendTech: FrontendTech;
  iconLibrary: IconLibrary;
  fontLibrary: FontLibrary;
  themeMode: ThemeMode;
  layoutType: LayoutType;
  imageResources?: string;
  cssFeatures: CssFeature[];
  jsFeatures: JsFeature[];
  accessibilityFeatures: AccessibilityFeature[];
}

export interface SavedTemplate extends PromptFormData {
  id: string;
  name: string;
  createdAt: string;
}

// 设计风格特性包含中英文值
export type DesignStyleCharacteristicsTranslated = {
  [key in DesignStyle]: {
    zh: string;
    en: string;
  };
};

// 平台特性包含中英文值
export type PlatformCharacteristicsTranslated = {
  [key in Platform]: {
    zh: string;
    en: string;
  };
};

export const designStyleCharacteristics: DesignStyleCharacteristicsTranslated = {
  glassmorphism: {
    zh: '磨砂玻璃效果、半透明度',
    en: 'Frosted glass effect, transparency'
  },
  neumorphism: {
    zh: '软阴影、浅浮雕',
    en: 'Soft shadows, subtle embossing'
  },
  flat: {
    zh: '鲜明色彩、简洁线条',
    en: 'Vibrant colors, clean lines'
  },
  skeuomorphism: {
    zh: '高细节、真实纹理',
    en: 'High detail, realistic textures'
  },
  minimalism: {
    zh: '留白、简约布局',
    en: 'White space, minimal layout'
  },
  materialDesign: {
    zh: '卡片式UI、阴影层次',
    en: 'Card-based UI, shadow hierarchy'
  },
  appleDesign: {
    zh: '简洁、精致、直观',
    en: 'Clean, refined, intuitive'
  },
  futurism: {
    zh: '未来感、科技感、霓虹',
    en: 'Futuristic, tech-focused, neon'
  },
  retro: {
    zh: '复古色彩、像素风格',
    en: 'Retro colors, pixel art style'
  },
  '3d': {
    zh: '立体感、空间感、真实感',
    en: 'Dimensionality, spatial depth, realism'
  }
};

export const platformCharacteristics: PlatformCharacteristicsTranslated = {
  ios: {
    zh: '导航栏、标签栏、滑动手势',
    en: 'Navigation bars, tab bars, swipe gestures'
  },
  android: {
    zh: '底部导航、浮动操作按钮、卡片式UI',
    en: 'Bottom navigation, floating action buttons, card-based UI'
  },
  web: {
    zh: '导航菜单、面包屑导航、响应式布局',
    en: 'Navigation menus, breadcrumb navigation, responsive layouts'
  },
  crossPlatform: {
    zh: '统一设计语言、适配多平台特性',
    en: 'Unified design language, multi-platform adaptation'
  },
  macos: {
    zh: '平滑动画、工具栏、侧边导航',
    en: 'Smooth animations, toolbars, sidebar navigation'
  },
  windows: {
    zh: '磁贴布局、流畅设计、分屏视图',
    en: 'Tile layouts, Fluent Design, split-screen views'
  }
}; 