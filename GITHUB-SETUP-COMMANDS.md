# 🚀 GitHub Setup Commands

## Step 1: Initialize Git Repository
```bash
cd airbnb-clone
git init
```

## Step 2: Add All Files
```bash
git add .
```

## Step 3: First Commit
```bash
git commit -m "🎉 Initial commit: Complete Airbnb Clone with 26 properties

✨ Features:
- 26 unique properties (India + International)
- Advanced filtering system (Category, Country, Price, Search)
- Dark mode with persistence
- Infinite scroll & trending section
- Property details page with React Router
- Wishlist functionality
- Skeleton loading animations
- Fully responsive design
- Professional UI/UX

🛠️ Tech Stack: React, Tailwind CSS, Vite, React Router"
```

## Step 4: Create GitHub Repository
1. Go to https://github.com
2. Click "New Repository" (+ icon)
3. Repository name: `airbnb-clone`
4. Description: `🏠 Professional Airbnb Clone with React & Tailwind CSS - 26 Properties, Advanced Filters, Dark Mode`
5. Make it Public
6. Don't initialize with README (we already have one)
7. Click "Create Repository"

## Step 5: Connect to GitHub
```bash
# Replace 'yourusername' with your actual GitHub username
git remote add origin https://github.com/yourusername/airbnb-clone.git
```

## Step 6: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## 🎯 Alternative: GitHub CLI (if installed)
```bash
# Create repo directly from terminal
gh repo create airbnb-clone --public --description "🏠 Professional Airbnb Clone with React & Tailwind CSS"
git remote add origin https://github.com/yourusername/airbnb-clone.git
git push -u origin main
```

## 🔄 Future Updates
```bash
# When you make changes
git add .
git commit -m "✨ Add new feature: [describe your changes]"
git push
```

## 📝 Repository Settings (After Upload)
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Source: Deploy from branch
5. Branch: main
6. Folder: / (root)
7. Save

Your site will be available at:
`https://yourusername.github.io/airbnb-clone`

## 🏷️ Add Topics (Tags)
In your GitHub repo:
1. Click ⚙️ gear icon next to "About"
2. Add topics: `react`, `tailwind-css`, `airbnb-clone`, `vite`, `javascript`, `responsive-design`, `dark-mode`, `portfolio-project`
3. Save changes

## 📊 Repository Description
```
🏠 Professional Airbnb Clone with React & Tailwind CSS - 26 Properties, Advanced Filters, Dark Mode, Infinite Scroll, Property Details & More!
```

## 🌟 README Badges (Already Added)
- React Badge
- Tailwind CSS Badge  
- Vite Badge
- Airbnb Clone Badge

Your repository is now ready for:
✅ Job Applications
✅ Portfolio Showcase  
✅ Interview Discussions
✅ Open Source Contributions