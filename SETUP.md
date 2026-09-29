# Pain Clinic Card - Setup Instructions

## ✅ Installation Complete!

Your digital clinic card has been successfully created and built. Here's how to customize and deploy it.

## 📝 Step 1: Update Clinic Information

Edit `src/data/clinic.ts` to update your clinic details:

```typescript
export const clinic = {
  name: "Pain Clinic",
  tagline: "Physiotherapy & Rehabilitation",
  location: "Kajubaag, Karwar",
  website: "https://spinephysio.in",
  phone: "8762697832",
  email: "sahilnaik1515@gmail.com",
  whatsapp: "918762697832",  // Include country code without +
  openingHours: {
    open: "10:00 AM",
    close: "8:00 PM",
    openHour: 10,    // 24-hour format
    closeHour: 20    // 24-hour format
  },
  // Update these URLs after setup:
  mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
  reviewsUrl: "REPLACE_WITH_GOOGLE_MAPS_REVIEWS_LINK",
  instagramUrl: "REPLACE_WITH_INSTAGRAM_LINK",
  shareUrl: "https://spinephysio.in"
};
```

### How to Get Google Maps Link:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your clinic
3. Click "Share" button
4. Copy the link
5. Paste it as `mapUrl`

### How to Get Google Reviews Link:
1. On your Google Maps listing
2. Click on "Reviews" tab
3. Copy the URL
4. Paste it as `reviewsUrl`

## 👨‍⚕️ Step 2: Update Physiotherapist Information

Edit `src/data/therapists.ts`:

```typescript
export const therapists = [
  {
    name: "Dr. Rahul Desai",
    qualification: "BPT, MPT",
    experience: "8+ Years Experience",
    specialization: "Orthopaedic Physiotherapy",
    image: "/images/therapist-1.jpg"
  },
  // Add more therapists...
];
```

## 🖼️ Step 3: Add Images

### Add Clinic Logo:
Place your logo at: `public/logo.png`
- Recommended size: 512x512px or 1024x1024px
- Format: PNG with transparent background

### Add Therapist Photos:
Place photos in `public/images/`:
- `therapist-1.jpg`
- `therapist-2.jpg`
- `therapist-3.jpg`
- `therapist-4.jpg`

Recommended specs:
- Size: 400x400px minimum
- Format: JPG or PNG
- Professional headshots work best

**Note:** If images are missing, the app will show initials as placeholders.

## 🚀 Step 4: Test Locally

Run the development server:

```bash
npm run dev
```

Visit: `http://localhost:5173/pain-clinic`

Test all features:
- [ ] Therapist carousel auto-rotates
- [ ] All 8 action cards work
- [ ] Website opens correctly
- [ ] WhatsApp appointment works
- [ ] Phone call works
- [ ] Email works
- [ ] Status badge shows correct open/closed

## 📦 Step 5: Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

## 🌐 Step 6: Deploy

### Option A: Vercel (Recommended - FREE)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd pain-clinic-card
   vercel
   ```

3. Follow prompts (use default settings)

4. Your site will be live at: `https://your-project.vercel.app/pain-clinic`

### Option B: Netlify (FREE)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag and drop the `dist/` folder
4. Your site is live!

### Option C: GitHub Pages (FREE)

1. Create GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select branch and `/dist` folder
5. Save

### Option D: Any Web Host

Upload the contents of the `dist/` folder to your web server.

## 🔗 Step 7: Update URLs After Deployment

Once deployed, update these in `src/data/clinic.ts`:

```typescript
shareUrl: "https://your-actual-domain.com/pain-clinic"
```

And in `src/pages/QRGenerator.tsx`, the QR code will automatically use your domain.

## 📱 Step 8: Generate QR Code

1. Visit: `https://your-domain.com/qr`
2. Download the QR code image
3. Print it on:
   - Business cards
   - Posters
   - Clinic entrance
   - Brochures
   - Prescription pads

## ✅ Final Checklist

- [ ] Updated clinic information
- [ ] Updated therapist information
- [ ] Added logo image
- [ ] Added therapist photos
- [ ] Updated Google Maps link
- [ ] Updated Google Reviews link
- [ ] Updated Instagram link
- [ ] Tested locally
- [ ] Built for production
- [ ] Deployed to hosting
- [ ] Updated shareUrl with actual domain
- [ ] Generated and downloaded QR code
- [ ] Printed QR code

## 🎯 Testing on Mobile

After deployment, test on actual smartphones:

### Test These Viewports:
- iPhone SE (375x667)
- iPhone 12 (390x844)
- Samsung Galaxy (360x800)
- iPhone 14 Pro Max (430x932)

### Test These Features:
1. Scan QR code with phone camera
2. Page loads instantly
3. No scrolling required
4. Therapist carousel works
5. Tap "Website" - opens browser
6. Tap "Appointment" - opens WhatsApp with message
7. Tap "Call" - opens phone dialer
8. Tap "Email" - opens email app
9. Tap "Directions" - opens Google Maps
10. Tap "Reviews" - opens Google Reviews
11. Tap "Instagram" - opens Instagram
12. Tap "Share" - opens share menu or copies link

## 🔧 Troubleshooting

### QR Code doesn't scan?
- Make sure the image is high quality
- Print size should be at least 2x2 inches
- Don't stretch or distort the QR code

### WhatsApp doesn't open?
- Make sure `whatsapp` in clinic.ts includes country code
- Format: `918762697832` (no + or spaces)

### Links don't work?
- Check that URLs don't have extra quotes or spaces
- Test each link manually first

### Images don't show?
- Check file paths match exactly
- File names are case-sensitive
- Use `/images/therapist-1.jpg` format

## 📞 Support

For technical issues, refer to the main README.md or contact your developer.

## 🎉 You're Done!

Your premium digital clinic card is ready. Patients can now scan your QR code and instantly access your clinic information!
