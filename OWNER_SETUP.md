# Owner Setup Guide

This document explains the accounts and services the business owner needs to create for production deployment of the Krishnatri Associates website.

## Overview

The application requires several third-party services to function properly. All services offer **free tiers** that are sufficient for initial deployment. **No charges will occur unless you explicitly upgrade to a paid plan.**

---

## Required Accounts

### 1. Gmail / SMTP Account for Email Sending

**Purpose:** Send email notifications to the admin when users submit contact forms, enquiries, or career applications.

**Setup Steps:**
1. Use an existing Gmail account or create a new Gmail account for business use
2. Enable "App Passwords" for the account:
   - Go to Google Account settings → Security
   - Enable 2-Step Verification (if not already enabled)
   - Go to "App passwords" and generate a new app password
   - Save this password securely (you'll need it for `.env` configuration)

**Configuration:**
- Add to `backend/.env`:
  ```
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your-app-password
  ADMIN_EMAIL=admin@yourdomain.com
  ```

**Free Tier:** Gmail allows up to 500 emails per day on the free tier, which is sufficient for most small businesses.

**Cost:** Free (unless you need more than 500 emails/day)

---

### 2. Cloudinary Account for File Storage

**Purpose:** Store and serve gallery images and resume files uploaded by users.

**Setup Steps:**
1. Visit [cloudinary.com](https://cloudinary.com) and sign up for a free account
2. After signup, go to the Dashboard
3. Copy your credentials:
   - Cloud Name
   - API Key
   - API Secret

**Configuration:**
- Add to `backend/.env`:
  ```
  CLOUDINARY_CLOUD_NAME=your-cloud-name
  CLOUDINARY_API_KEY=your-api-key
  CLOUDINARY_API_SECRET=your-api-secret
  ```

**Free Tier Includes:**
- 25 GB storage
- 25 GB monthly bandwidth
- 25,000 monthly transformations
- Unlimited uploads

**Cost:** Free (sufficient for most small businesses)

---

### 3. MongoDB Atlas (Optional - Future Database)

**Purpose:** Store contact form submissions, enquiries, and career applications in a database (currently using JSON files).

**Setup Steps:**
1. Visit [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and sign up
2. Create a free cluster (M0 - Free tier)
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string

**Configuration:**
- Add to `backend/.env` (when database is implemented):
  ```
  MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
  ```

**Free Tier Includes:**
- 512 MB storage
- Shared RAM and vCPU
- No credit card required

**Cost:** Free (M0 cluster is permanently free)

**Note:** Currently, the application uses JSON files for storage. MongoDB integration is planned for future updates.

---

### 4. Domain + Hosting (Optional - Future Deployment)

**Purpose:** Host the website on a custom domain instead of localhost.

**Options:**

#### Option A: Vercel (Frontend) + Railway/Render (Backend)
- **Frontend:** Deploy React app to Vercel (free tier available)
- **Backend:** Deploy Node.js backend to Railway or Render (free tier available)
- **Domain:** Purchase from Namecheap, GoDaddy, or Google Domains (~$10-15/year)

#### Option B: Full-Stack Hosting
- **Platforms:** Heroku, DigitalOcean, AWS (all have free tiers or low-cost options)
- **Domain:** Purchase separately and connect

**Free Tier Options:**
- Vercel: Free for personal projects
- Railway: $5/month free credit
- Render: Free tier available
- Heroku: No longer free, but low-cost options available

**Cost:** Domain ~$10-15/year, Hosting varies (free tiers available)

**Note:** For initial testing, you can run the application locally. Production hosting is optional.

---

### 5. Billing Information (Optional - Future)

**Purpose:** Required only if you upgrade to paid plans for any service.

**When Needed:**
- If you exceed Cloudinary free tier limits
- If you need more Gmail sending capacity
- If you upgrade MongoDB Atlas cluster
- If you choose paid hosting plans

**Important:** 
- **No credit card is required for free tiers**
- You can use all services on free plans indefinitely
- Only upgrade when you need additional features or capacity

---

## Environment Variables Summary

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
PORT=4000
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourdomain.com

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Admin Security
ADMIN_SECRET_KEY=your-secure-random-key-here

# MongoDB (Optional - Future)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

---

## Setup Checklist

- [ ] Create Gmail account and generate app password
- [ ] Create Cloudinary account and get credentials
- [ ] Set up `backend/.env` file with all required variables
- [ ] Test email sending functionality
- [ ] Test file upload functionality
- [ ] (Optional) Set up MongoDB Atlas for future database integration
- [ ] (Optional) Purchase domain and set up hosting

---

## Support & Troubleshooting

### Email Not Sending?
- Verify app password is correct (not your regular Gmail password)
- Ensure 2-Step Verification is enabled
- Check spam folder for test emails

### Cloudinary Upload Failing?
- Verify all three credentials (Cloud Name, API Key, API Secret) are correct
- Check Cloudinary dashboard for usage limits
- Ensure file size is under 10MB

### General Issues?
- Ensure all environment variables are set correctly
- Check that `.env` file is in the `backend/` directory
- Verify no typos in variable names
- Restart the server after changing `.env` file

---

## Cost Summary

| Service | Free Tier | Paid Plans Start At |
|---------|-----------|---------------------|
| Gmail | 500 emails/day | N/A (sufficient for most) |
| Cloudinary | 25 GB storage, 25 GB bandwidth | $99/month |
| MongoDB Atlas | 512 MB storage | $9/month |
| Domain | N/A | ~$10-15/year |
| Hosting | Varies by platform | $5-20/month |

**Total Estimated Monthly Cost (Free Tier): $0**

---

## Next Steps

1. Complete the setup checklist above
2. Test all functionality in development environment
3. Deploy to production when ready
4. Monitor usage and upgrade only if needed

Remember: **All services offer free tiers that are sufficient for initial deployment. No charges will occur unless you explicitly upgrade to a paid plan.**
