# GoDaddy Upload Guide - Step by Step

## Method 1: Using GoDaddy File Manager (Easiest)

### Step 1: Log into GoDaddy
1. Go to https://www.godaddy.com
2. Click "Sign In" (top right)
3. Enter your username/email and password

### Step 2: Access Your Hosting
1. After logging in, click **"My Products"** at the top
2. Scroll down to **"Web Hosting"** section
3. Click **"Manage"** next to your hosting plan

```
┌─────────────────────────────────────────┐
│  My Products                            │
├─────────────────────────────────────────┤
│                                         │
│  Web Hosting                            │
│  ┌─────────────────────────────────┐    │
│  │  Socorta Tree Hosting          │    │
│  │  Plan: Economy/Linux           │    │
│  │  [Manage] ← CLICK THIS BUTTON  │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

### Step 3: Open File Manager
1. You'll see the cPanel dashboard
2. Look for **"Files"** section (usually has a folder icon)
3. Click **"File Manager"**

```
┌─────────────────────────────────────────┐
│  cPanel Dashboard                       │
├─────────────────────────────────────────┤
│                                         │
│  FILES SECTION                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │  File   │ │  Images │ │Directory│   │
│  │ Manager │ │         │ │ Privacy │   │
│  │   📁    │ │   🖼️   │ │   🔒   │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                         │
│  CLICK: File Manager                    │
│                                         │
└─────────────────────────────────────────┘
```

### Step 4: Navigate to public_html
1. File Manager opens in a new window
2. Look at the left sidebar - you'll see folders
3. Click on **"public_html"** folder

```
┌─────────────────────────────────────────────┐
│  File Manager                               │
├─────────────────┬───────────────────────────┤
│  FOLDERS        │  FILES IN CURRENT FOLDER  │
│                 │                           │
│  📁 .cagefs     │  (This is where your      │
│  📁 .cl.selector│   website files go)       │
│  📁 .cpanel     │                           │
│  📁 .pki        │                           │
│  📁 etc         │                           │
│  📁 logs        │                           │
│  📁 mail        │                           │
│  📁 public_ftp  │                           │
│  📁 public_html ← CLICK THIS FOLDER         │
│  📁 ssl         │                           │
│  📁 tmp         │                           │
│                 │                           │
└─────────────────┴───────────────────────────┘
```

### Step 5: Upload Your Files
1. Once inside `public_html`, you may see some files (like index.html, cgi-bin)
2. **DELETE any existing files** (select all and click Delete, or move to trash)
3. Click **"Upload"** button (top menu)

```
┌─────────────────────────────────────────────┐
│  public_html                                │
├─────────────────────────────────────────────┤
│                                             │
│  [Upload] [Download] [Delete] [Move] [More] │
│       ↑                                     │
│   CLICK THIS                                │
│                                             │
│  Files currently here:                      │
│  📄 index.html (DELETE THIS)               │
│  📁 cgi-bin                                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Step 6: Select Your Files
1. An upload window opens
2. Click **"Select File"** or drag and drop
3. Navigate to your extracted `dist` folder
4. **Select ALL files** (Ctrl+A or Cmd+A)
5. Click **"Open"** or **"Upload"**

```
┌─────────────────────────────────────────┐
│  Upload Files                           │
├─────────────────────────────────────────┤
│                                         │
│  Drag files here or                     │
│  [Select File] ← CLICK THIS             │
│                                         │
│  Your files:                            │
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
│  ✅ (all other files)                   │
│                                         │
└─────────────────────────────────────────┘
```

### Step 7: Wait for Upload
- Wait for all files to finish uploading
- You'll see a progress bar
- Once complete, click **"Go Back"** or close the window

### Step 8: Verify Upload
1. You should see all your files in the `public_html` folder
2. Make sure `index.html` is there
3. Visit https://socortatree.com in your browser

---

## Method 2: Using FTP (FileZilla)

### Step 1: Download FileZilla
1. Go to https://filezilla-project.org/
2. Download FileZilla Client (free)
3. Install it on your computer

### Step 2: Get FTP Credentials from GoDaddy
1. Log into GoDaddy
2. Go to "My Products" → "Web Hosting"
3. Click "Manage" next to your hosting
4. Scroll down to **"FTP Users"** section
5. Note down:
   - **FTP Host/Server**: (e.g., ftp.socortatree.com)
   - **Username**: (your FTP username)
   - **Password**: (your FTP password)

```
┌─────────────────────────────────────────┐
│  FTP Users                              │
├─────────────────────────────────────────┤
│                                         │
│  FTP Host: ftp.socortatree.com         │
│  Username: yourusername                │
│  Password: ••••••••••                  │
│                                         │
│  [Create FTP User]                      │
│                                         │
└─────────────────────────────────────────┘
```

### Step 3: Connect in FileZilla
1. Open FileZilla
2. Enter your credentials:

```
┌─────────────────────────────────────────┐
│  FileZilla Quickconnect                 │
├─────────────────────────────────────────┤
│                                         │
│  Host:     ftp.socortatree.com         │
│  Username: yourusername                │
│  Password: yourpassword                │
│  Port:     21                          │
│                                         │
│  [Quickconnect] ← CLICK THIS           │
│                                         │
└─────────────────────────────────────────┘
```

3. Click **"Quickconnect"**

### Step 4: Upload Files
1. On the **LEFT side** (Local): Navigate to your `dist` folder
2. On the **RIGHT side** (Remote): Navigate to `public_html`
3. Select all files on the left (Ctrl+A)
4. Drag and drop to the right side

```
┌─────────────────────────────────────────────────────────────┐
│  FileZilla                                                  │
├──────────────────────────────┬──────────────────────────────┤
│  LOCAL (Your Computer)       │  REMOTE (GoDaddy Server)     │
│                              │                              │
│  📁 Desktop                  │  📁 .cagefs                  │
│  📁 Documents                │  📁 etc                      │
│  📁 Downloads                │  📁 logs                     │
│  📁 socortatree              │  📁 mail                     │
│    📁 dist ← OPEN THIS       │  📁 public_html ← GO HERE    │
│      📄 index.html           │      (upload files here)     │
│      📄 about-image.jpg      │                              │
│      📄 hero-bg.jpg          │                              │
│      📄 gallery-1.jpg        │                              │
│      📄 ...                  │                              │
│                              │                              │
│  [SELECT ALL] → DRAG → DROP  │                              │
│                              │                              │
└──────────────────────────────┴──────────────────────────────┘
```

5. Wait for all files to transfer (bottom shows progress)

---

## Method 3: Using cPanel's "Upload" Feature (Alternative)

### Step 1-3: Same as Method 1
(Log in → My Products → Manage Hosting → File Manager)

### Step 4: Use Upload Feature
1. In File Manager, click `public_html`
2. Click **"Upload"** button at the top
3. Click **"Choose File"**
4. You can upload files one by one OR
5. Create a ZIP file first, upload it, then extract:

### Upload as ZIP and Extract:
1. Create a ZIP of your `dist` folder on your computer
2. In File Manager, click **"Upload"**
3. Select the ZIP file
4. After upload, right-click the ZIP file
5. Click **"Extract"**
6. Files will be extracted to `public_html`

```
┌─────────────────────────────────────────┐
│  Right-Click Menu                       │
├─────────────────────────────────────────┤
│                                         │
│  📦 dist.zip                            │
│                                         │
│  [View]                                 │
│  [Edit]                                 │
│  [Download]                             │
│  [Extract] ← CLICK THIS                │
│  [Compress]                             │
│  [Delete]                               │
│                                         │
└─────────────────────────────────────────┘
```

---

## Troubleshooting

### "404 Not Found" Error
- Make sure `index.html` is directly in `public_html`
- Not in a subfolder like `public_html/dist/`

### "403 Forbidden" Error
- Check file permissions (should be 644 for files, 755 for folders)
- In File Manager, right-click file → Change Permissions

### Images Not Showing
- Make sure all image files were uploaded
- Check file names match exactly (case-sensitive)

### Website Still Shows Old Content
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 5-10 minutes for DNS/cache to update

### Can't Find File Manager
- Look for "cPanel" or "Control Panel" in your GoDaddy account
- Some plans use "Managed WordPress" - you may need to contact GoDaddy to switch to cPanel hosting

---

## Quick Checklist

- [ ] Logged into GoDaddy
- [ ] Accessed Web Hosting → Manage
- [ ] Opened File Manager
- [ ] Navigated to `public_html`
- [ ] Deleted old files (if any)
- [ ] Uploaded all files from `dist` folder
- [ ] Verified `index.html` is in `public_html`
- [ ] Visited https://socortatree.com
- [ ] Website displays correctly!

---

## Need Help?

**GoDaddy Support:**
- Phone: 1-480-505-8877
- Chat: https://www.godaddy.com/help

**Common Issues:**
- If you have "Managed WordPress" hosting, you may need to contact GoDaddy to switch to cPanel hosting
- Make sure your domain is pointing to the correct hosting (check DNS settings)
