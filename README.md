# Create Eleva App

<p align="center">
  <img src="https://raw.githubusercontent.com/TarekRaafat/eleva/master/docs/imgs/Eleva%20Logo.png" alt="Eleva Logo" width="200">
</p>

<p align="center">
  <strong>Set up a modern Eleva.js app by running one command.</strong>
</p>

<p align="center">
  <a href="https://github.com/TarekRaafat/create-eleva-app/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/create-eleva-app">
    <img src="https://img.shields.io/npm/v/create-eleva-app.svg?style=flat" alt="npm version">
  </a>
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg" alt="Node.js Version">
  </a>
</p>

## Overview

Create Eleva App is an officially supported way to create Eleva.js applications. It offers a smooth development experience by providing a professional project structure, development server, modern Vite-based build system, and more.

## Quick Start

```bash
# Using npx (recommended)
npx create-eleva-app my-app

# Using npm
npm init eleva-app my-app

# Using yarn
yarn create eleva-app my-app

# Using pnpm
pnpm create eleva-app my-app
```

Then follow the prompts to configure your project.

## Features

- 🚀 **Instant Setup**: Go from zero to application in seconds
- 🔄 **Interactive Experience**: Helpful prompts guide you through setup
- 🧩 **Optional Router**: Easily add Eleva Router to your project
- 🛠️ **Modern Build System**: Powered by Vite for lightning-fast development
- 🎨 **Elegant Structure**: Professional project organization
- 📚 **Best Practices**: Follows Eleva.js recommended patterns
- 🔧 **Fully Configurable**: Customize to your project needs

## Commands

```bash
# Create a new project with default settings
npx create-eleva-app my-app

# Skip prompts and use defaults
npx create-eleva-app my-app --yes

# Create a project with router
npx create-eleva-app my-app --router

# Create a project without router
npx create-eleva-app my-app --no-router

# Create a TypeScript project
npx create-eleva-app my-app --typescript
```

## Project Structure

The generated project will have the following structure:

```
my-app/
├── public/                # Static assets
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/            # Project assets
│   │   ├── styles/
│   │   │   └── main.css
│   │   └── images/
│   │       └── logo.svg
│   ├── components/        # Reusable components
│   │   ├── App.js
│   │   └── HelloWorld.js
│   ├── routes/            # Router-specific files (if enabled)
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── NotFound.js
│   ├── routes.js          # Route definitions (if router enabled)
│   └── main.js            # Application entry point
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## System Requirements

- Node.js 14.0.0 or later
- npm 6.0.0 or later, yarn 1.22.0 or later, or pnpm 6.0.0 or later

## License

Create Eleva App is open-source software licensed under the [MIT license](https://github.com/TarekRaafat/create-eleva-app/blob/main/LICENSE).
