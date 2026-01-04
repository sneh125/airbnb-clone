# 🔧 Troubleshooting Guide

## 🚨 If the page appears blank:

### 1. Check Browser Console
- Press `F12` or `Ctrl+Shift+I` to open Developer Tools
- Go to "Console" tab
- Look for any red error messages
- Take a screenshot and share if needed

### 2. Clear Browser Cache
```bash
# Hard refresh in browser
Ctrl + F5 (Windows)
Cmd + Shift + R (Mac)
```

### 3. Check if Server is Running
```bash
# Make sure you're in the right directory
cd airbnb-clone

# Start the development server
npm run dev

# Should show:
# ➜  Local:   http://localhost:5173/
```

### 4. Verify Installation
```bash
# Check if node_modules exists
ls node_modules

# If not, reinstall dependencies
npm install
```

### 5. Test Build
```bash
# Test if project builds successfully
npm run build

# Should complete without errors
```

### 6. Check Port Conflicts
- If port 5173 is busy, Vite will use a different port
- Check the terminal output for the correct URL
- Try: http://localhost:5174/ or http://localhost:5175/

### 7. Browser Compatibility
- Use Chrome, Firefox, or Edge (latest versions)
- Avoid Internet Explorer

### 8. Network Issues
- Try: http://127.0.0.1:5173/ instead of localhost
- Disable VPN if using one
- Check firewall settings

## 🔍 Common Issues & Solutions:

### Issue: "Cannot resolve module"
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port already in use"
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Issue: Tailwind styles not loading
```bash
# Check if tailwind.config.js exists
ls tailwind.config.js

# Restart development server
npm run dev
```

### Issue: React Router not working
- Make sure you're using the correct URL format
- Check if BrowserRouter is properly set up in App.jsx

## 📞 Quick Test Commands:

```bash
# 1. Check Node.js version (should be 18+)
node --version

# 2. Check npm version
npm --version

# 3. Verify project structure
ls src/

# 4. Test if React is working
npm run dev
```

## ✅ Working Checklist:

- [ ] Node.js 18+ installed
- [ ] npm install completed successfully
- [ ] No errors in terminal
- [ ] Browser console shows no errors
- [ ] Correct URL: http://localhost:5173/
- [ ] Latest browser version

## 🆘 If Still Not Working:

1. **Take a screenshot** of:
   - Terminal output
   - Browser console errors
   - The blank page

2. **Share the error message** exactly as it appears

3. **Try the simple test**:
   ```bash
   # Create a simple test file
   echo "console.log('Test working')" > test.js
   node test.js
   # Should print: Test working
   ```

## 🔄 Reset Project (Last Resort):

```bash
# 1. Backup your changes
cp -r src/ ../src-backup/

# 2. Clean install
rm -rf node_modules package-lock.json
npm install

# 3. Restart server
npm run dev
```

**Most common cause: Browser cache or port conflicts!**