# UI/UX Design Prompt Generator

![Version](https://img.shields.io/badge/Version-0.1.0-blue.svg)
![React](https://img.shields.io/badge/React-19.0-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)
![i18n](https://img.shields.io/badge/i18n-Multilingual-green.svg)
![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)

A streamlined and efficient tool that helps UI/UX designers and frontend developers generate professional design prompts, facilitating team collaboration and communication.

[English](./README_EN.md) | [简体中文](./README.md)

## ✨ Features

- 📱 Cross-platform design prompt generation (Web, Mobile, Desktop)
- 🎨 Multiple design systems support (Material Design, iOS Design, Fluent, etc.)
- 🌐 Frontend technology specification adaptation (React, Vue, Angular, etc.)
- 🌓 Light/Dark theme switching
- 🌍 Multilingual support (English/Chinese)
- 📋 Template saving and management
- ♿ Accessibility options

## 🖥️ Preview

![Application Screenshot](https://placeholder-image.com/screenshot.png)

## 🚀 Quick Start

### Prerequisites

- Node.js 14.0+ (18.0+ recommended)
- npm 7.0+ or yarn 1.22+

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/uiux-prompt-generator.git
cd uiux-prompt-generator

# Install dependencies
npm install
# or
yarn install
```

### Development Environment

```bash
npm run dev
# or
yarn dev
```

The application will start at http://localhost:5173

### Production Build

```bash
npm run build
# or
yarn build
```

Production files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📖 User Guide

### Generate Design Prompts

1. Navigate to the "Generator" page
2. Fill in the form according to your requirements:
   - Select target platform (Web, Mobile, etc.)
   - Specify application type (Social, E-commerce, etc.)
   - Choose design style (Material Design, etc.)
   - Configure frontend technology (React, Vue, etc.)
   - Set icon and font libraries
   - Select theme mode
   - Add CSS/JS features
   - Configure accessibility requirements
3. Click the "Generate Prompt" button
4. View and copy the generated prompt

### Template Management

- **Save Template**: After generating a prompt, click "Save as Template" and enter a name
- **Use Template**: Select and load saved templates from the "Templates" page
- **Delete Template**: Click the delete icon in the template list

### Personalization

- **Switch Language**: Click the language icon in the top right corner
- **Switch Theme**: Click the theme icon in the top right corner

## 🧩 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Type Checking**: TypeScript 5.7
- **Routing**: React Router 7
- **Internationalization**: i18next
- **Icons**: Heroicons

## 📁 Project Structure

```
src/
├── components/          # UI components
│   ├── FormMultiSelect.tsx  # Multi-select component
│   ├── FormSelect.tsx       # Select component
│   ├── PromptForm.tsx       # Form component
│   ├── PromptResult.tsx     # Result display
│   ├── SaveTemplateModal.tsx # Save template modal
│   ├── Header.tsx           # Page header
│   └── Footer.tsx           # Page footer
├── contexts/            # React Context
│   ├── LanguageContext.tsx  # Language context
│   └── ThemeContext.tsx     # Theme context
├── pages/               # Page components
│   ├── Home.tsx             # Home page
│   ├── Generator.tsx        # Generator
│   ├── Templates.tsx        # Template management
│   └── About.tsx            # About page
├── types/               # TypeScript types
├── utils/               # Utility functions
└── i18n/                # Internationalization
```

## 🔧 Configuration

### Custom Themes

Customize themes by modifying CSS variables in `src/index.css`:

```css
:root {
  --background: 255, 255, 255;  /* Background color */
  --foreground: 31, 41, 55;     /* Foreground color */
  /* Other variables */
}

.dark {
  --background: 15, 15, 15;     /* Dark mode background */
  --foreground: 255, 255, 255;  /* Dark mode text */
  /* Other variables */
}
```

### Adding New Languages

1. Create a new language file in `src/i18n/resources/`
2. Register the language in `src/i18n/index.ts`
3. Update the language switching logic

## 🤝 Contribution Guidelines

We welcome all forms of contributions, including feature requests, bug reports, and code contributions.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 To-Do List

- [ ] User account system and cloud synchronization
- [ ] Export prompts to PDF/Markdown
- [ ] More design system templates
- [ ] Integration with design tools (Figma plugin)
- [ ] AI-assisted prompt enhancement

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgements

- Thanks to all contributors of the open-source projects used
- Design resources and inspiration: Material Design, Apple HIG, Microsoft Fluent Design
- All users who tested and provided feedback

---

**UI/UX Design Prompt Generator** © 2023 Developer. Released under the [MIT License](LICENSE).

> [Personal Homepage](https://your-website.com) · GitHub [@yourusername](https://github.com/yourusername) 