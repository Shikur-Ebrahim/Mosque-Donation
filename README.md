# Mosque Donation Landing Page

> A production-ready, mobile-first mosque donation landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🕌 Overview

This page is designed for Facebook video ad traffic. Users land on a simple, beautiful page where they can:

- **Copy the CBE bank account number** with one tap
- **Contact via WhatsApp, Telegram, or IMO** if they need help

## ✨ Features

- ⚡ Next.js 15 App Router (React Server Components)
- 📱 Mobile-first, optimized for 360px screens
- 🎨 Islamic green (#0F8A5F) + Gold (#D4AF37) theme
- 🌙 Smooth animations & hover effects
- 📋 One-tap clipboard copy with visual feedback
- ♿ Fully accessible (ARIA labels, keyboard nav, high contrast)
- 🔍 SEO optimized (OpenGraph, Twitter card, meta)
- 🚀 Vercel-ready deployment

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

All contact links and account info are in **one file**:

```
lib/constants.ts
```

```ts
export const WHATSAPP_NUMBER = "251912345678"; // Change me
export const TELEGRAM_USERNAME = "your_username"; // Change me
export const IMO_NUMBER = "251912345678"; // Change me
export const CBE_ACCOUNT = "1000754882291";
export const ACCOUNT_HOLDER = "Abdela Adem";
```

> Just update `lib/constants.ts` — all links across the site update automatically.

## 📁 Project Structure

```
mosque-donation-page/
├── app/
│   ├── layout.tsx        # Root layout, fonts & metadata
│   ├── page.tsx          # Main page (server component)
│   └── globals.css       # Global styles & animations
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── DonationCard.tsx  # CBE account + copy button
│   ├── ContactButtons.tsx # WhatsApp / Telegram / IMO
│   ├── Footer.tsx        # Footer with blessing text
│   └── Button.tsx        # Reusable animated button
├── lib/
│   └── constants.ts      # ← Edit contact info here
├── vercel.json           # Vercel deployment config
└── .prettierrc           # Code formatting
```

## 🏗️ Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Deploy to Vercel (one command)
npx vercel --prod
```

## 🌐 Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

---

*May Allah reward you. ጃዛከላሁ ኸይራ* 🌙
