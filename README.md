# Pain Clinic - Digital Clinic Card

A production-quality, fixed-screen digital business card for Pain Clinic physiotherapy center. This is a QR-code destination page designed to look like a premium smart clinic card, NOT a traditional website.

## 🎯 Key Features

- **Single Fixed Screen** - No scrolling, everything fits in viewport
- **Rotating Physiotherapist Carousel** - Auto-plays every 2 seconds
- **8 Action Cards** - Website, Appointment, Call, Email, Directions, Reviews, Instagram, Share
- **Dynamic Open/Closed Status** - Automatically updates based on clinic hours
- **Mobile-First Design** - Optimized for smartphone screens
- **QR Code Generator** - Separate page for clinic owners to generate QR codes

## 🚀 Getting Started

### Installation

```bash
cd pain-clinic-card
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173/pain-clinic` to see the clinic card.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📋 Configuration

### Update Clinic Information

Edit `src/data/clinic.ts`:

```typescript
export const clinic = {
  name: "Pain Clinic",
  tagline: "Physiotherapy & Rehabilitation",
  location: "Kajubaag, Karwar",
  website: "https://spinephysio.in",
  phone: "8762697832",
  email: "sahilnaik1515@gmail.com",
  whatsapp: "918762697832",
  openingHours: {
    open: "10:00 AM",
    close: "8:00 PM",
    openHour: 10,
    closeHour: 20
  },
  mapUrl: "REPLACE_WITH_GOOGLE_MAPS_LINK",
  reviewsUrl: "REPLACE_WITH_GOOGLE_MAPS_REVIEWS_LINK",
  instagramUrl: "REPLACE_WITH_INSTAGRAM_LINK",
  shareUrl: "https://spinephysio.in"
};
```

### Update Physiotherapists

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
  // ... add more therapists
];
```

### Add Images

1. **Logo**: Place your logo at `public/logo.png`
2. **Therapist Photos**: Place photos in `public/images/`:
   - `therapist-1.jpg`
   - `therapist-2.jpg`
   - `therapist-3.jpg`
   - `therapist-4.jpg`

If images are missing, the app will show placeholder initials.

## 🎨 Design Philosophy

This is **NOT** a traditional website. It's a digital business card that:

- ❌ NO page scrolling
- ❌ NO vertical website layout
- ❌ NO navbar or navigation
- ❌ NO hamburger menu
- ❌ NO long webpage sections

✅ Single fixed screen that fits everything in viewport
✅ Premium card-like appearance
✅ Mobile-optimized experience
✅ Instant actions (call, email, directions, etc.)

## 📱 Routes

- `/pain-clinic` - Main clinic card (patient-facing)
- `/qr` - QR code generator (for clinic owners)

## 🧪 Testing Checklist

Test the following before deployment:

- [ ] Test at 360×800 viewport
- [ ] Test at 390×844 viewport
- [ ] Test at 414×896 viewport
- [ ] Confirm NO vertical scrolling
- [ ] Confirm NO horizontal scrolling
- [ ] Therapist carousel auto-rotates every 2 seconds
- [ ] Can manually control therapist carousel
- [ ] Website link opens correctly
- [ ] WhatsApp appointment opens with pre-filled message
- [ ] Phone call works
- [ ] Email opens mail client
- [ ] Map link works (after configuration)
- [ ] Reviews link works (after configuration)
- [ ] Instagram link works (after configuration)
- [ ] Share button works (Web Share API or clipboard)
- [ ] QR code generator displays and downloads correctly
- [ ] Open/Closed status updates correctly
- [ ] All action cards are tappable
- [ ] No console errors

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Router** - Routing
- **qrcode.react** - QR code generation

## 📦 Project Structure

```
src/
├── components/
│   ├── ClinicHeader.tsx       # Logo, name, location, status
│   ├── TherapistCarousel.tsx  # Auto-rotating therapist profiles
│   ├── ActionCard.tsx         # Individual action card
│   ├── ActionGrid.tsx         # Grid of 8 action cards
│   └── StatusBadge.tsx        # Open/Closed indicator
├── data/
│   ├── clinic.ts              # Clinic configuration
│   └── therapists.ts          # Therapist data
├── pages/
│   ├── PainClinic.tsx         # Main clinic card page
│   └── QRGenerator.tsx        # QR code generator
├── utils/
│   └── isOpen.ts              # Check if clinic is open
├── App.tsx                    # Router setup
├── main.tsx                   # Entry point
└── index.css                  # Global styles + Tailwind
```

## 🌐 Deployment

### Deploy to Vercel, Netlify, or similar:

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Update `qrUrl` in `QRGenerator.tsx` with your domain
4. Update `shareUrl` in `clinic.ts` with your domain

### Important Configuration After Deployment:

1. Get your Google Maps link and update `mapUrl` in `clinic.ts`
2. Get your Google Reviews link and update `reviewsUrl` in `clinic.ts`
3. Update `instagramUrl` in `clinic.ts`
4. Generate QR code at `/qr` route
5. Download and print QR code

## 📄 License

Private project for Pain Clinic.

## 🆘 Support

For issues or customization, contact the developer.
