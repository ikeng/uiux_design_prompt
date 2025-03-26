import { PromptFormData, designStyleCharacteristics, platformCharacteristics, CssFeature, JsFeature, AccessibilityFeature } from '../types';
import i18n from '../i18n';

// Function to get translated option name
const getTranslatedOption = (category: string, key: string): string => {
  // Try to get the translation from i18n
  const translatedOption = i18n.t(`generator.${category}.options.${key}`);
  return translatedOption || key;
};

// CSS特性选项文本映射
const getCssFeatureLabel = (feature: CssFeature): string => {
  const labels: Record<CssFeature, {zh: string, en: string}> = {
    'grid': {zh: 'Grid', en: 'Grid'},
    'flexbox': {zh: 'Flexbox', en: 'Flexbox'},
    'cssVariables': {zh: 'CSS变量', en: 'CSS Variables'},
    'cssAnimations': {zh: 'CSS动画和过渡', en: 'CSS Animations & Transitions'},
    'cssFilters': {zh: 'CSS滤镜', en: 'CSS Filters'},
    'cssShapes': {zh: 'CSS Shapes', en: 'CSS Shapes'},
    'mediaqueries': {zh: '媒体查询', en: 'Media Queries'},
    'cssCalc': {zh: 'CSS计算属性', en: 'CSS Calc Functions'}
  };
  
  return i18n.language === 'zh' ? labels[feature].zh : labels[feature].en;
};

// JS特性选项文本映射
const getJsFeatureLabel = (feature: JsFeature): string => {
  const labels: Record<JsFeature, {zh: string, en: string}> = {
    'es6': {zh: 'ES6+', en: 'ES6+'},
    'promises': {zh: 'Promises', en: 'Promises'},
    'asyncAwait': {zh: 'Async/Await', en: 'Async/Await'},
    'modules': {zh: '模块化设计', en: 'Modular Design'},
    'webApis': {zh: 'Web APIs', en: 'Web APIs'},
    'localStorage': {zh: '本地存储', en: 'Local Storage'},
    'serviceWorkers': {zh: '服务工作线程', en: 'Service Workers'}
  };
  
  return i18n.language === 'zh' ? labels[feature].zh : labels[feature].en;
};

// 辅助功能选项文本映射
const getAccessibilityFeatureLabel = (feature: AccessibilityFeature): string => {
  const labels: Record<AccessibilityFeature, {zh: string, en: string}> = {
    'screenReader': {zh: '屏幕阅读器兼容', en: 'Screen Reader Compatible'},
    'keyboardNav': {zh: '键盘导航', en: 'Keyboard Navigation'},
    'highContrast': {zh: '高对比度模式', en: 'High Contrast Mode'},
    'voiceControl': {zh: '语音控制', en: 'Voice Control'},
    'fontResize': {zh: '字体大小调整', en: 'Font Size Adjustment'},
    'colorBlindFriendly': {zh: '色盲友好模式', en: 'Color Blind Friendly'}
  };
  
  return i18n.language === 'zh' ? labels[feature].zh : labels[feature].en;
};

// Function to get app-specific pages based on app type
const getAppPages = (appType: string): string => {
  switch (appType) {
    case 'fitness':
      return i18n.language === 'zh' ? 
        '首页, 锻炼, 营养, 进度, 个人资料, 设置, 社区' : 
        'Home, Workouts, Nutrition, Progress, Profile, Settings, Community';
    case 'ecommerce':
      return i18n.language === 'zh' ? 
        '首页, 商品列表, 商品详情, 购物车, 结账, 订单, 个人账户' : 
        'Home, Product List, Product Details, Cart, Checkout, Orders, Account';
    case 'social':
      return i18n.language === 'zh' ? 
        '动态流, 个人资料, 消息, 通知, 发现, 创建内容, 设置' : 
        'Feed, Profile, Messages, Notifications, Discover, Create, Settings';
    case 'education':
      return i18n.language === 'zh' ? 
        '首页, 课程, 课程详情, 学习进度, 讨论, 个人资料, 设置' : 
        'Home, Courses, Course Details, Progress, Discussions, Profile, Settings';
    case 'finance':
      return i18n.language === 'zh' ? 
        '仪表盘, 账户, 交易, 统计, 预算, 设置, 支持' : 
        'Dashboard, Accounts, Transactions, Analytics, Budget, Settings, Support';
    default:
      return i18n.language === 'zh' ? 
        '首页, 详情页, 列表页, 设置页, 个人资料页, 登录/注册页' : 
        'Home, Details, List, Settings, Profile, Login/Register';
  }
};

// Function to get app-specific features based on app type
const getAppFeatures = (appType: string): string => {
  switch (appType) {
    case 'fitness':
      return i18n.language === 'zh' ? 
        '健身活动追踪(锻炼、步数、卡路里), 饮食和营养记录, 健身数据可视化, 用户资料管理, 健身计划制定, 成就系统' : 
        'Fitness activity tracking (workouts, steps, calories), Diet and nutrition logging, Fitness data visualization, User profile management, Workout plan creation, Achievement system';
    case 'ecommerce':
      return i18n.language === 'zh' ? 
        '产品展示, 购物车系统, 支付流程, 用户评价, 个性化推荐, 订单跟踪' : 
        'Product display, Shopping cart system, Payment process, User reviews, Personalized recommendations, Order tracking';
    case 'social':
      return i18n.language === 'zh' ? 
        '用户资料, 内容发布, 互动功能, 消息系统, 关注系统, 搜索与发现' : 
        'User profiles, Content posting, Interaction features, Messaging system, Follow system, Search and discovery';
    default:
      return i18n.language === 'zh' ? 
        '用户账户管理, 设置与偏好, 通知系统, 搜索功能, 数据可视化, 帮助与支持' : 
        'User account management, Settings and preferences, Notification system, Search functionality, Data visualization, Help and support';
  }
};

// 将多选值数组转换为格式化的字符串
const formatFeatureList = <T extends string>(
  features: T[],
  getLabelFn: (feature: T) => string
): string => {
  return features.map(feature => getLabelFn(feature)).join(', ');
};

// Main function to generate the prompt based on form data
export const generatePrompt = (data: PromptFormData): string => {
  const {
    platform,
    appType,
    designStyle,
    frontendTech,
    iconLibrary,
    fontLibrary,
    themeMode,
    layoutType,
    imageResources = 'Unsplash',
    cssFeatures,
    jsFeatures,
    accessibilityFeatures
  } = data;

  // 格式化多选值
  const formattedCssFeatures = formatFeatureList(cssFeatures, getCssFeatureLabel);
  const formattedJsFeatures = formatFeatureList(jsFeatures, getJsFeatureLabel);
  const formattedAccessibilityFeatures = formatFeatureList(accessibilityFeatures, getAccessibilityFeatureLabel);

  // Get translated values
  const translatedPlatform = getTranslatedOption('platform', platform);
  const translatedAppType = getTranslatedOption('appType', appType);
  const translatedDesignStyle = getTranslatedOption('designStyle', designStyle);
  const translatedFrontendTech = getTranslatedOption('frontendTech', frontendTech);
  const translatedIconLibrary = getTranslatedOption('iconLibrary', iconLibrary);
  const translatedFontLibrary = getTranslatedOption('fontLibrary', fontLibrary);
  const translatedThemeMode = getTranslatedOption('themeMode', themeMode);
  const translatedLayoutType = getTranslatedOption('layoutType', layoutType);

  // Get design style and platform characteristics
  const styleCharacteristics = designStyleCharacteristics[designStyle];
  const platformFeatures = platformCharacteristics[platform];

  // Get app-specific pages and features
  const appPages = getAppPages(appType);
  const appFeatures = getAppFeatures(appType);

  // Generate prompt based on language
  if (i18n.language === 'zh') {
    return `为${translatedPlatform}的${translatedAppType}应用创建一套${translatedDesignStyle}风格的用户界面设计

技术要求：
- 使用${translatedFrontendTech}开发
- 使用${translatedIconLibrary}图标库
- 选择适合${translatedPlatform}风格的${translatedFontLibrary}字体
- 调用${imageResources}图片资源
- 采用${formattedCssFeatures}等现代CSS特性
- 应用${formattedJsFeatures}JavaScript特性

功能与内容要求：
${appFeatures}

设计规范：
- 遵循${translatedDesignStyle}设计语言(${styleCharacteristics.zh})
- 符合${translatedPlatform}人机交互指南(${platformFeatures.zh})
- 包含${translatedThemeMode}支持
- 实现${translatedLayoutType}
- 整合${formattedAccessibilityFeatures}原则

交付物：
- 完整的界面设计(${appPages})
- 页面间导航流程
- 统一的设计系统(色彩、字体、组件规范)`;
  } else {
    return `Create a ${translatedDesignStyle} style user interface design for a ${translatedAppType} application on ${translatedPlatform}

Technical Requirements:
- Developed using ${translatedFrontendTech}
- Utilize ${translatedIconLibrary} icon library
- Select ${translatedFontLibrary} fonts suitable for ${translatedPlatform} style
- Incorporate images from ${imageResources}
- Implement modern CSS features such as ${formattedCssFeatures}
- Apply JavaScript features including ${formattedJsFeatures}

Functionality and Content Requirements:
${appFeatures}

Design Specifications:
- Follow ${translatedDesignStyle} design language (${styleCharacteristics.en})
- Comply with ${translatedPlatform} human interface guidelines (${platformFeatures.en})
- Include support for ${translatedThemeMode}
- Implement ${translatedLayoutType}
- Integrate accessibility principles including ${formattedAccessibilityFeatures}

Deliverables:
- Complete interface design (${appPages})
- Navigation flow between pages
- Unified design system (color, typography, component specifications)`;
  }
}; 