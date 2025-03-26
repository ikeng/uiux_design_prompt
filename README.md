# UI/UX 设计提示词工具

![版本](https://img.shields.io/badge/版本-0.1.0-blue.svg)
![React](https://img.shields.io/badge/React-19.0-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)
![i18n](https://img.shields.io/badge/i18n-多语言-green.svg)
![许可证](https://img.shields.io/badge/许可证-MIT-brightgreen.svg)

一个简洁高效的工具，帮助UI/UX设计师和前端开发者生成专业的设计提示词，促进团队协作与沟通。

[English](./README_EN.md) | 简体中文

## ✨ 功能特点

- 📱 跨平台设计提示词生成 (Web、移动端、桌面应用)
- 🎨 支持多种设计系统 (Material Design、iOS设计、Fluent等)
- 🌐 前端技术规范适配 (React、Vue、Angular等)
- 🌓 明暗主题切换
- 🌍 多语言支持 (中/英)
- 📋 模板保存与管理
- ♿ 可访问性选项

## 🖥️ 预览

![应用截图](https://placeholder-image.com/screenshot.png)

## 🚀 快速开始

### 前置条件

- Node.js 14.0+ (推荐 18.0+)
- npm 7.0+ 或 yarn 1.22+

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/uiux-prompt-generator.git
cd uiux-prompt-generator

# 安装依赖
npm install
# 或
yarn install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
```

应用将在 http://localhost:5173 启动

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

生产文件将生成在 `dist` 目录中。

### 预览生产构建

```bash
npm run preview
# 或
yarn preview
```

## 📖 使用指南

### 生成设计提示词

1. 导航至"生成器"页面
2. 按照表单填写您的需求：
   - 选择目标平台(Web、移动端等)
   - 指定应用类型(社交、电商等)
   - 选择设计风格(Material Design等)
   - 配置前端技术(React、Vue等)
   - 设置图标与字体库
   - 选择主题模式
   - 添加CSS/JS特性
   - 配置辅助功能需求
3. 点击"生成提示词"按钮
4. 查看并复制生成的提示词

### 模板管理

- **保存模板**: 生成提示词后，点击"保存为模板"并输入名称
- **使用模板**: 在"模板"页面选择并加载已保存的模板
- **删除模板**: 在模板列表中点击删除图标

### 个性化设置

- **切换语言**: 点击页面右上角的语言图标
- **切换主题**: 点击页面右上角的主题图标

## 🧩 技术栈

- **前端框架**: React 19
- **构建工具**: Vite 6
- **样式方案**: Tailwind CSS 4
- **类型检查**: TypeScript 5.7
- **路由管理**: React Router 7
- **国际化**: i18next
- **图标**: Heroicons

## 📁 项目结构

```
src/
├── components/          # UI组件
│   ├── FormMultiSelect.tsx  # 多选组件
│   ├── FormSelect.tsx       # 单选组件
│   ├── PromptForm.tsx       # 表单组件
│   ├── PromptResult.tsx     # 结果显示
│   ├── SaveTemplateModal.tsx # 保存模板弹窗
│   ├── Header.tsx           # 页头
│   └── Footer.tsx           # 页脚
├── contexts/            # React Context
│   ├── LanguageContext.tsx  # 语言上下文
│   └── ThemeContext.tsx     # 主题上下文
├── pages/               # 页面组件
│   ├── Home.tsx             # 首页
│   ├── Generator.tsx        # 生成器
│   ├── Templates.tsx        # 模板管理
│   └── About.tsx            # 关于页面
├── types/               # TypeScript类型
├── utils/               # 工具函数
└── i18n/                # 国际化
```

## 🔧 配置

### 自定义主题

通过修改 `src/index.css` 中的 CSS 变量来自定义主题：

```css
:root {
  --background: 255, 255, 255;  /* 背景色 */
  --foreground: 31, 41, 55;     /* 前景色 */
  /* 其他变量 */
}

.dark {
  --background: 15, 15, 15;     /* 深色模式背景 */
  --foreground: 255, 255, 255;  /* 深色模式文字 */
  /* 其他变量 */
}
```

### 添加新语言

1. 在 `src/i18n/resources/` 中创建新语言文件
2. 在 `src/i18n/index.ts` 中注册语言
3. 更新语言切换逻辑

## 🤝 贡献指南

我们欢迎所有形式的贡献，包括功能请求、Bug报告和代码贡献。

1. Fork 仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 📝 待办事项

- [ ] 用户账户系统与云同步
- [ ] 提示词导出为PDF/Markdown
- [ ] 更多设计系统模板
- [ ] 与设计工具集成(Figma插件)
- [ ] AI辅助提示词完善

## 📄 许可证

本项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- 感谢所有开源项目的贡献者
- 设计资源和灵感来源：Material Design, Apple HIG, Microsoft Fluent Design
- 所有测试和反馈的用户

---

**UI/UX 设计提示词工具** © 2023 开发者。使用 [MIT 许可证](LICENSE)。

> [个人主页](https://your-website.com) · GitHub [@yourusername](https://github.com/yourusername)
