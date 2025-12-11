# Python Data Analysis Tutorial - Instructional Webpage

A professional instructional webpage teaching beginners how to perform basic data analysis in Python.

## 🌐 Live Demo

**Live URL:** `https://YOUR-USERNAME.github.io/web-page/`

(Replace YOUR-USERNAME with your actual GitHub username after deployment)

## 🔒 Password Protection

This site is password protected. The default password is: `python2025`

**To change the password:**
1. Open `auth.js`
2. Find the line: `const CORRECT_PASSWORD = "python2025";`
3. Change `"python2025"` to your desired password
4. Save and push to GitHub

## 🚀 Deploying to GitHub Pages (Free)

### Step 1: Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and sign up for free.

### Step 2: Initialize Git Repository
Open PowerShell in your project folder and run:

```powershell
git init
git add .
git commit -m "Initial commit: Python data analysis tutorial"
```

### Step 3: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `web-page`
3. Set to **Public** (required for free GitHub Pages)
4. Do NOT initialize with README
5. Click "Create repository"

### Step 4: Push to GitHub
Replace `YOUR-USERNAME` with your GitHub username:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/web-page.git
git push -u origin main
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source", select `main` branch
5. Click **Save**
6. Wait 2-3 minutes for deployment
7. Your site will be live at: `https://YOUR-USERNAME.github.io/web-page/`

## 📁 Project Structure

```
web-page/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Interactive features (copy code, navigation)
├── auth.js         # Password protection system
└── README.md       # This file
```

## ✨ Features

- ✅ Password protected access
- ✅ Clean, professional design
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Copy-to-clipboard for code blocks
- ✅ Smooth scrolling navigation
- ✅ Step-by-step instructions
- ✅ Troubleshooting section
- ✅ Free hosting on GitHub Pages

## 🔧 Making Updates

After making changes to your files:

```powershell
git add .
git commit -m "Description of your changes"
git push
```

Changes will appear on your live site in 1-2 minutes.

## 🔐 Security Note

The password protection uses client-side JavaScript, which is suitable for basic privacy but not for sensitive data. Anyone with technical knowledge could bypass it. For stronger security, consider server-side authentication.

## 📝 Customization

- **Change password:** Edit `auth.js`
- **Modify colors:** Edit CSS variables in `styles.css`
- **Update content:** Edit `index.html`
- **Change styling:** Modify `styles.css`

## 👤 Author

Created by Sumit Sah

## 📄 License

This project is open source and available for educational purposes.
