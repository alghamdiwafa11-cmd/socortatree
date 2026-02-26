# GitHub Pages Deployment Guide

## Option 1: Upload via GitHub Website (Easiest - No Git Required)

### Step 1: Create/Access Your Repository
1. Go to https://github.com
2. Log into your account
3. Click the **+** icon (top right) → **"New repository"**
4. Name it: `socortatree` (or any name you want)
5. Make it **Public**
6. Click **"Create repository"**

```
┌─────────────────────────────────────────┐
│  Create a new repository                │
├─────────────────────────────────────────┤
│                                         │
│  Repository name:                       │
│  ┌─────────────────────────────────┐    │
│  │  socortatree                    │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ○ Public  ● Private                    │
│    ↑ SELECT PUBLIC                      │
│                                         │
│  [Create repository] ← CLICK THIS      │
│                                         │
└─────────────────────────────────────────┘
```

### Step 2: Upload Your Files
1. In your new repository, click **"uploading an existing file"**

```
┌─────────────────────────────────────────┐
│  socortatree                            │
├─────────────────────────────────────────┤
│                                         │
│  …or create a new repository            │
│  …or push an existing repository        │
│  …or import code from another repo      │
│                                         │
│  📎 uploading an existing file          │
│     ↑ CLICK THIS LINK                   │
│                                         │
└─────────────────────────────────────────┘
```

2. Click **"choose your files"** or drag and drop
3. Select **ALL files** from your `dist` folder
4. Scroll down and click **"Commit changes"**

```
┌─────────────────────────────────────────┐
│  Upload files                           │
├─────────────────────────────────────────┘
│                                         │
│  Drag files here to add them...         │
│                                         │
│  [choose your files] ← OR CLICK THIS   │
│                                         │
│  Selected files:                        │
│  ✅ index.html                          │
│  ✅ about-image.jpg                     │
│  ✅ gallery-1.jpg                       │
│  ✅ gallery-2.jpg                       │
│  ✅ gallery-3.jpg                       │
│  ✅ gallery-4.jpg                       │
│  ✅ gallery-5.jpg                       │
│  ✅ gallery-6.jpg                       │
│  ✅ hero-bg.jpg                         │
│  ✅ robots.txt                          │
│  ✅ sitemap.xml                         │
│  ✅ sitemap-en.xml                      │
│  ✅ sitemap-ar.xml                      │
│  ✅ sitemap-ko.xml                      │
│  ✅ sitemap-ja.xml                      │
│  ✅ favicon.svg                         │
│                                         │
│  Commit changes                         │
│  ┌─────────────────────────────────┐    │
│  │  Upload website files           │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [Commit changes] ← CLICK THIS         │
│                                         │
└─────────────────────────────────────────┘
```

### Step 3: Enable GitHub Pages
1. In your repository, click **"Settings"** tab (top)

```
┌─────────────────────────────────────────┐
│  socortatree                            │
├─────────────────────────────────────────┤
│  Code  Issues  Pull requests  Actions   │
│  Projects  Wiki  Security  Settings ←  │
│                                    CLICK│
└─────────────────────────────────────────┘
```

2. In the left sidebar, click **"Pages"**

```
┌─────────────────────────────────────────┐
│  Settings                               │
├─────────────────┬───────────────────────┤
│                 │                       │
│  General        │                       │
│  Access         │                       │
│  Code and       │                       │
│  automation     │                       │
│  Security       │                       │
│  Analysis       │                       │
│  Branches       │                       │
│  Pages ← CLICK  │                       │
│                 │                       │
└─────────────────┴───────────────────────┘
```

3. Under **"Source"**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
   - Click **"Save"**

```
┌─────────────────────────────────────────┐
│  GitHub Pages                           │
├─────────────────────────────────────────┤
│                                         │
│  Build and deployment                   │
│  Source                                 │
│                                         │
│  Deploy from a branch                   │
│                                         │
│  Branch: ┌─────────────┐  ┌─────────┐   │
│          │ main ▼      │  │ / (root)│   │
│          └─────────────┘  └─────────┘   │
│                           ↑ SELECT THIS │
│                                         │
│  [Save] ← CLICK THIS                    │
│                                         │
└─────────────────────────────────────────┘
```

4. Wait 2-5 minutes for the site to build
5. You'll see a green message: **"Your site is live at https://yourusername.github.io/socortatree"**

---

## Option 2: Using Git Commands (For Developers)

### Step 1: Open Terminal/Command Prompt

### Step 2: Navigate to Your dist Folder
```bash
cd /path/to/your/dist/folder
```

### Step 3: Initialize Git and Push
```bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website upload"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/socortatree.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages (same as Option 1, Step 3)

---

## Option 3: Using GitHub Desktop (Easiest for Beginners)

### Step 1: Download GitHub Desktop
1. Go to https://desktop.github.com/
2. Download and install

### Step 2: Add Your Repository
1. Open GitHub Desktop
2. Click **"File"** → **"Add local repository"**
3. Select your `dist` folder
4. Click **"Create repository"**

### Step 3: Publish to GitHub
1. Click **"Publish repository"**
2. Name it: `socortatree`
3. Make it **Public**
4. Click **"Publish Repository"**

### Step 4: Enable GitHub Pages (same as Option 1, Step 3)

---

## Connect Your Custom Domain (socortatree.com)

### Step 1: Add CNAME File to GitHub
1. In your GitHub repository, click **"Add file"** → **"Create new file"**
2. Name it: `CNAME` (all caps, no extension)
3. Content: `socortatree.com`
4. Click **"Commit new file"**

```
┌─────────────────────────────────────────┐
│  Create new file                        │
├─────────────────────────────────────────┤
│                                         │
│  Name your file...                      │
│  ┌─────────────────────────────────┐    │
│  │  CNAME                          │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Edit new file                          │
│  ┌─────────────────────────────────┐    │
│  │  socortatree.com                │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [Commit new file] ← CLICK THIS        │
│                                         │
└─────────────────────────────────────────┘
```

### Step 2: Configure GoDaddy DNS
1. Log into GoDaddy
2. Go to **"My Products"** → **"DNS"**
3. Find your domain: `socortatree.com`
4. Click **"Manage"**

### Step 3: Add DNS Records
Delete any existing A records and add these:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |
| CNAME | www | YOUR_USERNAME.github.io | 1 Hour |

```
┌─────────────────────────────────────────┐
│  DNS Management                         │
├─────────────────────────────────────────┤
│                                         │
│  Records:                               │
│  ┌──────┬──────┬────────────────────┐   │
│  │ Type │ Name │ Value              │   │
│  ├──────┼──────┼────────────────────┤   │
│  │ A    │ @    │ 185.199.108.153   │   │
│  │ A    │ @    │ 185.199.109.153   │   │
│  │ A    │ @    │ 185.199.110.153   │   │
│  │ A    │ @    │ 185.199.111.153   │   │
│  │ CNAME│ www  │ username.github.io│   │
│  └──────┴──────┴────────────────────┘   │
│                                         │
│  [Add New Record]                       │
│                                         │
└─────────────────────────────────────────┘
```

### Step 4: Enable HTTPS in GitHub
1. Go back to your GitHub repository
2. Click **Settings** → **Pages**
3. Check **"Enforce HTTPS"**

---

## Troubleshooting

### "404 File Not Found" Error
- Make sure `index.html` is in the root of your repository
- Wait 5-10 minutes for GitHub Pages to build

### Images Not Loading
- Check that image files were uploaded
- File names are case-sensitive on GitHub

### Custom Domain Not Working
- DNS changes take 24-48 hours to propagate
- Make sure CNAME file is in the repository root
- Check GitHub Pages settings shows your custom domain

### "There isn't a GitHub Pages site here"
- Go to Settings → Pages
- Make sure source is set to main branch
- Wait 2-5 minutes after enabling

---

## Quick Checklist

- [ ] Created GitHub repository
- [ ] Uploaded all files from dist folder
- [ ] Enabled GitHub Pages in Settings
- [ ] Added CNAME file with socortatree.com
- [ ] Configured GoDaddy DNS with GitHub IPs
- [ ] Waited for site to build (2-5 minutes)
- [ ] Website loads at https://socortatree.com

---

## Your GitHub Pages URL Will Be:

**Before custom domain:**
```
https://YOUR_USERNAME.github.io/socortatree
```

**After custom domain:**
```
https://socortatree.com
```

---

## Need Help?

**GitHub Pages Documentation:**
https://docs.github.com/en/pages

**GitHub Support:**
https://support.github.com

**Common Issues:**
- Repository must be **Public** for free GitHub Pages
- Files must be in repository root (not in a subfolder)
- index.html must exist in the root
