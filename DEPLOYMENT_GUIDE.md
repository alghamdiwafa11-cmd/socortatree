# Socorta Tree - Deployment Guide

## ✅ Step 1: Upload to Your GoDaddy Domain (socortatree.com)

### Option A: Using GoDaddy cPanel (Recommended)

1. **Log into GoDaddy**
   - Go to https://www.godaddy.com and sign in
   - Go to "My Products" → "Web Hosting" → Click "Manage"

2. **Access File Manager**
   - In cPanel, find "Files" section
   - Click "File Manager"
   - Navigate to `public_html` folder

3. **Upload Files**
   - Delete any existing files in `public_html` (backup first if needed)
   - Click "Upload" button
   - Select ALL files from the `dist` folder I provided
   - Wait for upload to complete

4. **Verify Upload**
   - Visit https://socortatree.com
   - Your website should be live!

### Option B: Using FTP Client (FileZilla)

1. **Download FileZilla** from https://filezilla-project.org/

2. **Get FTP Credentials from GoDaddy:**
   - Log into GoDaddy
   - Go to "My Products" → "Web Hosting"
   - Click "Manage" next to your hosting plan
   - Find "FTP Users" section
   - Note: FTP Host, Username, and Password

3. **Connect in FileZilla:**
   - Host: Your FTP host (e.g., ftp.socortatree.com)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

4. **Upload Files:**
   - On left side (Local), navigate to the `dist` folder
   - On right side (Remote), navigate to `public_html`
   - Select all files from `dist` folder
   - Drag and drop to `public_html`
   - Wait for transfer to complete

---

## ✅ Step 2: Submit to Google Search Console

### A. Verify Domain Ownership

1. **Go to Google Search Console:**
   - https://search.google.com/search-console

2. **Add Property:**
   - Click "Add Property"
   - Select "Domain" (recommended)
   - Enter: `socortatree.com`
   - Click "Continue"

3. **Verify via DNS Record (GoDaddy):**
   - Google will give you a TXT record to add
   - Example: `google-site-verification=xxxxxxxxxxxxxxxx`
   
   **Add to GoDaddy DNS:**
   - Log into GoDaddy
   - Go to "My Products" → "DNS"
   - Find your domain
   - Click "Manage DNS"
   - Click "Add" → Select "TXT"
   - Name: `@` (or leave blank)
   - Value: Paste the Google verification code
   - TTL: 1 Hour
   - Click "Save"

4. **Wait 5-10 minutes**, then click "Verify" in Google Search Console

### B. Submit Sitemaps

Once verified, submit these sitemaps:

1. In Google Search Console, go to "Sitemaps" (left menu)

2. Add these URLs one by one:
   ```
   sitemap.xml
   sitemap-en.xml
   sitemap-ar.xml
   sitemap-ko.xml
   sitemap-ja.xml
   ```

3. Click "Submit" for each

### C. Request Indexing (Optional but Recommended)

1. Go to "URL Inspection" tool
2. Enter: `https://socortatree.com`
3. Click "Request Indexing"
4. Repeat for key pages

---

## ✅ Step 3: Language-Specific Sitemaps (Already Created!)

I've created 5 sitemap files for you:

| File | Purpose | URLs |
|------|---------|------|
| `sitemap.xml` | Main sitemap index | Lists all language sitemaps |
| `sitemap-en.xml` | English content | 30+ article URLs |
| `sitemap-ar.xml` | Arabic content | 7 main URLs |
| `sitemap-ko.xml` | Korean content | 7 main URLs |
| `sitemap-ja.xml` | Japanese content | 7 main URLs |

### Features Included:
- ✅ Hreflang tags for multilingual SEO
- ✅ Last modified dates
- ✅ Priority levels
- ✅ Change frequency settings
- ✅ All 30 article URLs

---

## 📋 SEO Checklist

### On-Page SEO (Already Done):
- ✅ Title tags optimized
- ✅ Meta descriptions
- ✅ Keywords: gardening, self-sufficiency, sustainable living
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Hreflang tags for 4 languages
- ✅ Structured data (Schema.org)
- ✅ Robots.txt configured
- ✅ Sitemaps created

### Technical SEO (Already Done):
- ✅ Mobile responsive design
- ✅ Fast loading (optimized images)
- ✅ Clean URL structure
- ✅ AdSense integration
- ✅ Cookie consent banner
- ✅ Privacy Policy page
- ✅ Terms of Service page

### Content (Already Done):
- ✅ 30 articles covering:
  - Gardening basics
  - Water conservation
  - Food preservation
  - Survival skills
  - Self-sufficiency
  - Sustainable living

---

## 🌐 Multilingual Support

Your website supports 4 languages:

| Language | Code | URL Parameter |
|----------|------|---------------|
| English | en | Default |
| Arabic | ar | `?lang=ar` |
| Korean | ko | `?lang=ko` |
| Japanese | ja | `?lang=ja` |

### For Users:
- Language switcher in navigation
- Language preference saved in browser
- RTL support for Arabic

---

## 📊 Google AdSense Integration

Your AdSense ID is already integrated:
```
pub-1488198154973567
```

### To Add Ad Units:

1. Log into Google AdSense: https://www.google.com/adsense

2. Create ad units:
   - Go to "Ads" → "By ad unit"
   - Click "Create ad unit"
   - Choose type (Display ads, In-article, etc.)
   - Name it (e.g., "Homepage Banner")
   - Copy the ad code

3. Add to your website:
   - Edit the HTML files in the `dist` folder
   - Paste ad code where you want ads to appear
   - Re-upload the modified files

### Recommended Ad Placements:
- Below hero section
- Between article sections
- Sidebar (if you add one later)
- Footer area

---

## 🔍 Post-Deployment Checklist

After uploading to GoDaddy:

- [ ] Website loads at https://socortatree.com
- [ ] All images display correctly
- [ ] Language switcher works
- [ ] Contact form submits
- [ ] Privacy Policy page accessible
- [ ] Terms of Service page accessible
- [ ] Cookie banner appears
- [ ] Mobile version looks good

---

## 📈 Traffic Growth Tips

### Immediate Actions:
1. **Submit to Google Search Console** (as described above)
2. **Create social media accounts:**
   - Facebook Page
   - Instagram
   - Pinterest (great for gardening!)
   - Twitter/X

3. **Share your content:**
   - Post article links on social media
   - Join gardening Facebook groups
   - Share on Reddit (r/gardening, r/homesteading)

### Long-term Strategy:
1. **Add new articles regularly** (1-2 per week)
2. **Optimize for keywords** using Google Trends
3. **Build email list** (newsletter signup already on site)
4. **Get backlinks** from other gardening blogs
5. **Create YouTube videos** to complement articles

---

## 🆘 Troubleshooting

### Website Not Loading:
- Check DNS settings in GoDaddy
- Ensure files are in `public_html` folder
- Clear browser cache (Ctrl+Shift+R)

### Images Not Showing:
- Verify images uploaded to correct folder
- Check image file names match exactly

### SSL/HTTPS Issues:
- In GoDaddy cPanel, enable "SSL/TLS"
- Wait for SSL certificate to propagate

### Language Not Switching:
- Clear browser cookies
- Check JavaScript is enabled

---

## 📁 Files Included

All files are in the `dist` folder:

```
dist/
├── index.html          (Main page)
├── assets/             (CSS and JS files)
├── *.jpg               (All images)
├── sitemap.xml         (Main sitemap)
├── sitemap-en.xml      (English sitemap)
├── sitemap-ar.xml      (Arabic sitemap)
├── sitemap-ko.xml      (Korean sitemap)
├── sitemap-ja.xml      (Japanese sitemap)
└── robots.txt          (Search engine instructions)
```

---

## 📞 Need Help?

If you encounter any issues:

1. **GoDaddy Support:** https://www.godaddy.com/help
2. **Google Search Console Help:** https://support.google.com/webmasters
3. **Google AdSense Help:** https://support.google.com/adsense

---

## 🎉 You're All Set!

Your multilingual gardening blog is ready to:
- ✅ Drive global traffic (4 languages)
- ✅ Generate AdSense revenue
- ✅ Rank on Google (SEO optimized)
- ✅ Educate people worldwide about self-sufficiency

**Live Preview:** https://aii2nuzdjibqg.ok.kimi.link

Good luck with Socorta Tree! 🌱
