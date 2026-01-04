# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### 2. Netlify
```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to netlify.com
```

### 3. GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/airbnb-clone",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Build Commands
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+

## Environment Variables
No environment variables required - all images use external URLs.

## Performance Tips
- Images are lazy loaded
- Tailwind CSS is purged in production
- Vite optimizes bundle size automatically