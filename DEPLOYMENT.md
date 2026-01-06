# 🚀 Deployment Guide: Cloudflare Pages

This guide will help you deploy your Unique Visa Consultancy website to **Cloudflare Pages** using GitHub.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [GitHub Setup](#github-setup)
3. [Cloudflare Pages Setup](#cloudflare-pages-setup)
4. [Database Setup](#database-setup)
5. [Push to GitHub](#push-to-github)
6. [Cloudflare Pages Deployment](#cloudflare-pages-deployment)
7. [Verify Deployment](#verify-deployment)

---

## 📋 Prerequisites

Before deploying, make sure you have:

- ✅ [ ] **GitHub account** - Create one at https://github.com/signup
- ✅ [ ] **Cloudflare account** - Create one at https://dash.cloudflare.com/signup
- ✅ [ ] **Git installed** - Run `git --version` to verify
- ✅ [ ] **Gmail App Password** - Create one at https://myaccount.google.com/apppasswords
- ✅ [ ] **Supabase account** - Create one at https://supabase.com/signup (recommended for PostgreSQL)
- ✅ [ ] **Project files ready** - All code should be committed

---

## 🐙 GitHub Setup

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `unique-visa-website` (or any name you prefer)
3. Description: `Visa consultancy website for Unique Visa Consultancy`
4. IMPORTANT: Make it **Public** (required for free Cloudflare Pages)
5. Click "Create repository"

### Step 2: Copy Your Repository URL

After creating, you'll see a URL like:
```
https://github.com/YOUR_USERNAME/unique-visa-website
```

**Copy this URL** - you'll need it later!

### Step 3: Install Git (if not installed)

**For Windows:**
- Download from: https://git-scm.com/download/win
- Install and restart terminal

**For Mac:**
- Download from: https://git-scm.com/download/mac
- Install and restart terminal

**For Linux:**
- Usually pre-installed, or run: `sudo apt install git`

**Verify Git:**
```bash
git --version
```

---

## 🌤 Cloudflare Pages Setup

### Step 1: Create Cloudflare Account

1. Go to https://dash.cloudflare.com/sign-up
2. Sign up with your email (gcspideysir@gmail.com)
3. Verify your email address
4. Choose a strong password

### Step 2: Create Cloudflare Pages Project

1. After logging in, click **"Pages"** in the sidebar
2. Click **"Create a project"** or **"Connect to Git"**
3. Select **"GitHub"** as your Git provider
4. Click **"Connect to GitHub"** or **"Authorize"**
5. Select your repository: `unique-visa-website` (or whatever you named it)
6. Click **"Authorize"** if prompted
7. Cloudflare will set up everything automatically

### Step 3: Get API Credentials (For GitHub Actions - Optional but Recommended)

1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"**
3. Token name: `Cloudflare Pages Deployment`
4. Permissions needed:
   - Account → Cloudflare Pages: Edit
   - Account → Account Settings: Read
5. Click "Create Token"
6. **Save this token** - you'll need it for GitHub Actions

**Note:** Add this as a GitHub Secret named `CLOUDFLARE_API_TOKEN`

---

## 🗄️ Database Setup

### Why You Need a Cloud Database

**SQLite** (your current setup) doesn't work on Cloudflare Pages because:
- Cloudflare Pages is serverless (no persistent file system)
- Database files aren't preserved between deployments
- SQLite requires local file system

**Recommended:** Use **Supabase** (free PostgreSQL)

### Step 1: Create Supabase Account

1. Go to https://supabase.com/signup
2. Sign up with your email
3. Create a **new project** (it can be free)
4. Project name: `unique-visa-website`

### Step 2: Create PostgreSQL Database

1. In your Supabase project, go to **"SQL Editor"**
2. Or go to **"Database"** → **"New Database"**
3. Choose **"PostgreSQL"** (recommended)
4. Click **"Create Database"**
5. Wait for database to be ready

### Step 3: Get Database Connection String

1. In Supabase, go to **"Project Settings"** → **"Database"**
2. Find **"Connection string"**
3. Click **"Copy"** or **"View"**
4. Save this connection string - you'll need it for production

**Format:**
```
postgresql://postgres.xxx:password@xxx.supabase.co:5432/postgres
```

---

## 📤 Push to GitHub

### Step 1: Initialize Git in Project

Open your terminal and navigate to project:

```bash
cd /home/z/my-project
```

### Step 2: Initialize Git

```bash
git init
```

### Step 3: Add All Files

```bash
git add .
```

### Step 4: Create First Commit

```bash
git commit -m "Initial commit: Unique Visa Consultancy Website"
```

### Step 5: Connect to GitHub (Replace with YOUR actual URL)

```bash
git remote add origin https://github.com/YOUR_USERNAME/unique-visa-website.git
```

### Step 6: Push to GitHub

```bash
git push -u origin main
```

**What happens:**
- Your code is uploaded to GitHub
- Cloudflare will detect the new files
- Automatic deployment will begin

---

## 🌤 Cloudflare Pages Deployment

### Automatic Deployment (Recommended)

Once you've connected GitHub to Cloudflare Pages:

✅ **Automatic on every push** - Cloudflare will deploy automatically
✅ **Build optimization** - Cloudflare builds your Next.js app
✅ **Global CDN** - Fast worldwide content delivery
✅ **Free SSL certificates** - HTTPS enabled automatically
✅ **Custom domain** - Add your own domain if you want

### Manual Deployment (Optional)

If you want to deploy manually:

```bash
# Using the deployment script I added
bun run deploy:cloudflare
```

This will:
1. Build your Next.js project
2. Deploy to Cloudflare Pages using Wrangler
3. Provide deployment URL

---

## 🔧 Configuration Files Added

I've already added these files to your project:

### 1. pages.config.ts
- Configures Cloudflare Pages
- Connects Next.js to Cloudflare Pages adapter
- Handles serverless functions automatically

### 2. next.config.ts
- Updated for Cloudflare Pages
- Changed output to "export" mode
- Optimized for serverless deployment

### 3. package.json
- Added `deploy:cloudflare` script
- Added `pages:build` script
- Added `pages:dev` script for local testing

### 4. prisma/schema.prisma
- Updated to support PostgreSQL
- Added production database URL format
- Both SQLite and PostgreSQL formats documented

### 5. .env.example
- Template for all environment variables
- Database URL placeholder
- Email configuration template
- Cloudflare configuration notes

---

## 🔑 Environment Variables to Set in Cloudflare

After deployment, add these in Cloudflare Pages dashboard:

### Required Variables:

```env
# Database (from Supabase)
DATABASE_URL=postgresql://postgres.xxx:password@xxx.supabase.co:5432/postgres

# Email (for notifications)
NOTIFICATION_EMAIL=gcspideysir@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=gcspideysir@gmail.com
SMTP_PASSWORD=your-gmail-app-password-here
SMTP_FROM=gcspideysir@gmail.com
```

### Important Notes:

1. **Database URL** - Get this from your Supabase dashboard
2. **SMTP_PASSWORD** - Use Gmail App Password (NOT regular password)
3. These variables are required for the app to function properly

---

## 🌐 After Deployment

### Your Website Will Be Live At:

1. **Cloudflare Pages URL:**
   ```
   https://unique-visa-website.pages.dev
   ```

2. **Custom Domain (if you set one):**
   ```
   https://your-domain.com
   ```

### What to Check First:

✅ **All sections visible** - Scroll through the entire page
✅ **Contact form works** - Try submitting a test inquiry
✅ **Email notifications** - Check gcspideysir@gmail.com
✅ **Consultation booking works** - Try booking a consultation
✅ **Google Maps loads** - Check location section
✅ **Mobile responsive** - Test on your phone

### Troubleshooting:

**"Something went wrong" deployment:**
- Check your GitHub repository is public
- Check Cloudflare Pages logs in dashboard
- Verify database connection in production

**"Emails not sending":**
- Verify SMTP_PASSWORD is correct (Gmail App Password)
- Check NOTIFICATION_EMAIL is correct
- Check SMTP settings in Cloudflare

**"Database connection error":**
- Verify DATABASE_URL is correct
- Check Supabase project is active
- Try regenerating connection string in Supabase

---

## 📊 Deployment Architecture

```
GitHub Repository (Your Code)
    ↓ Push
Cloudflare Pages CI/CD (Automatic)
    ↓ Builds Next.js
    ↓ Deploys to Edge Network
    ↓
Cloudflare Edge Network (Global CDN)
    ↓ Serves website worldwide
    ↓
PostgreSQL Database (Supabase)
    ↓ Stores leads & bookings
    ↓
User's Browser
```

---

## 🎯 Quick Deployment Checklist

- [ ] GitHub account created
- [ ] GitHub repository created & made public
- [ ] Git installed on your computer
- [ ] Cloudflare account created
- [ ] GitHub connected to Cloudflare Pages
- [ ] Supabase account created
- [ ] PostgreSQL database created
- [ ] Database connection string copied
- [ ] Git initialized in project folder
- [ ] All files added to git
- [ ] First commit created
- [ ] GitHub remote connected
- [ ] Code pushed to GitHub
- [ ] Automatic deployment started in Cloudflare
- [ ] DATABASE_URL added to Cloudflare environment variables
- [ ] SMTP_PASSWORD added to Cloudflare environment variables
- [ ] Website live and testing all features
- [ ] Contact form submitting successfully
- [ ] Email notifications working

---

## 💡 Pro Tips

1. **Always test locally first** - Make sure everything works before deploying
2. **Use branch names wisely** - Use `main` for production
3. **Keep your secrets safe** - Never commit passwords or API tokens
4. **Monitor Cloudflare logs** - Check deployment status in dashboard
5. **Use PostgreSQL in production** - It's more reliable for serverless
6. **Set up custom domain** - Add your own domain for professional branding
7. **Enable Cloudflare Analytics** - Track visitor statistics (free)
8. **Keep backups** - Even with Cloudflare, keep local backups of important data

---

## 🆘 Need Help?

### Common Questions:

**Q: Can I use SQLite on Cloudflare Pages?**
A: No, use PostgreSQL (Supabase is recommended and free)

**Q: Do I need to pay for hosting?**
A: Cloudflare Pages is FREE for personal projects!

**Q: How long does deployment take?**
A: Usually 2-5 minutes on first push, then faster

**Q: Can I deploy a custom domain?**
A: Yes! Add your domain in Cloudflare Pages settings

**Q: Will my emails work?**
A: Yes, but you need to configure SMTP properly with Gmail App Password

---

## 🎉 Ready to Deploy!

All configuration files have been added to your project:
- ✅ pages.config.ts (Cloudflare Pages config)
- ✅ next.config.ts (Updated for serverless)
- ✅ package.json (Deployment scripts)
- ✅ prisma/schema.prisma (PostgreSQL support)
- ✅ .env.example (Environment variables template)

**Your next steps:**
1. Create GitHub repository
2. Initialize git and push your code
3. Connect GitHub to Cloudflare Pages
4. Set up Supabase PostgreSQL database
5. Add environment variables in Cloudflare
6. Wait for automatic deployment
7. Test your live website!

---

**Good luck with your deployment!** 🚀
