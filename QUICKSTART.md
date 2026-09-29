# Quick Start Guide - Pain Clinic Card

Get your digital clinic card running in 5 minutes!

## 🚀 Installation (1 minute)

```bash
cd pain-clinic-card
npm install
```

## 🎨 Customize (2 minutes)

### Update Clinic Info
Edit `src/data/clinic.ts` - Change name, phone, email, location, hours

### Update Therapists
Edit `src/data/therapists.ts` - Add your team members

### Add Images (Optional)
- Logo: `public/logo.png`
- Photos: `public/images/therapist-1.jpg`, etc.

## ✅ Test (1 minute)

```bash
npm run dev
```

Open: http://localhost:5173/pain-clinic

Test all 8 action cards!

## 📦 Build (30 seconds)

```bash
npm run build
```

## 🌐 Deploy (30 seconds)

### Fastest - Vercel:
```bash
npm install -g vercel
vercel
```

### Or drag `dist/` folder to:
- [Netlify Drop](https://app.netlify.com/drop)
- [Surge](https://surge.sh)

## 📱 Generate QR Code

1. Visit: `your-domain.com/qr`
2. Download PNG
3. Print it!

## ✅ Done!

Your clinic card is live. Patients can scan and connect instantly!

---

## 📋 What to Update After Deployment

1. Get Google Maps link → Update `mapUrl` in `clinic.ts`
2. Get Google Reviews link → Update `reviewsUrl` in `clinic.ts`  
3. Get Instagram link → Update `instagramUrl` in `clinic.ts`
4. Update `shareUrl` with your actual domain
5. Rebuild: `npm run build`
6. Redeploy

## 🆘 Having Issues?

See SETUP.md for detailed instructions.

## 🎯 Key Features

- ✅ NO scrolling - Everything fits on screen
- ✅ Auto-rotating therapist carousel
- ✅ 8 instant action cards
- ✅ Dynamic open/closed status
- ✅ Mobile-optimized
- ✅ QR code ready
- ✅ WhatsApp booking
- ✅ One-tap call/email

## 📱 Test Checklist

- [ ] Therapist carousel auto-rotates every 2 seconds
- [ ] Website card opens your website
- [ ] Appointment card opens WhatsApp
- [ ] Call card opens phone dialer
- [ ] Email card opens email app
- [ ] Status shows "OPEN NOW" during business hours
- [ ] All cards are tappable
- [ ] No scrolling needed
- [ ] Works on mobile (360px width)

## 🎉 Success!

Your premium digital clinic card is ready to impress patients!
