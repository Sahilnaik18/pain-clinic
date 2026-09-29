# Pain Clinic Card - Features Overview

## 🎯 Core Design Principles

This is **NOT** a traditional website. It's a premium digital business card designed specifically for QR code scanning.

### ✅ What It IS:
- Single fixed-screen experience
- Mobile-first design
- Instant action cards
- Professional digital presence
- QR-code optimized

### ❌ What It's NOT:
- Multi-page website
- Scrolling landing page
- Blog or content site
- Booking system with backend
- Patient portal

## 📱 User Experience Flow

```
1. Patient scans QR code
   ↓
2. Page loads instantly
   ↓
3. Sees clinic name, location, status
   ↓
4. Rotating physiotherapist profiles
   ↓
5. Grid of action cards
   ↓
6. Taps desired action
   ↓
7. Taken to appropriate destination
```

## 🎨 Visual Hierarchy

```
┌─────────────────────────────┐
│          [LOGO]             │  ← Brand Identity
│                             │
│       PAIN CLINIC           │  ← Clinic Name
│ Physiotherapy & Rehab...    │  ← Tagline
│                             │
│  📍 Kajubaag, Karwar        │  ← Location
│  🟢 OPEN NOW  10AM-8PM      │  ← Dynamic Status
│                             │
├─── OUR PHYSIOTHERAPISTS ────┤  ← Section Divider
│                             │
│   ┌───────────────────┐     │
│   │  [PHOTO]          │     │  ← Auto-Rotating
│   │  Dr. Rahul Desai  │     │     Carousel
│   │  BPT, MPT         │     │     (Changes every
│   │  8+ Years Exp.    │     │      2 seconds)
│   └───────────────────┘     │
│                             │
│      ● ○ ○ ○               │  ← Manual Controls
│                             │
├─────────────────────────────┤
│                             │
│  ┌──────┐  ┌───────┐       │
│  │  🌐  │  │  📅   │       │  ← Action Cards
│  │WEBSITE│  │ APPT  │       │    (Grid Layout)
│  └──────┘  └───────┘       │
│                             │
│  [6 more action cards...]   │
│                             │
├─────────────────────────────┤
│  Pain Clinic • Karwar       │  ← Footer
└─────────────────────────────┘
```

## 🔄 Therapist Carousel Features

### Auto-Play
- Automatically transitions every 2 seconds
- Smooth fade/slide animation
- Continuous loop

### Manual Control
- Tap indicators (● ○ ○ ○) to jump to specific therapist
- Swipe left/right on mobile
- Auto-play pauses for 5 seconds after manual interaction

### Responsive Display
- ONE large card visible at a time
- Professional photo (or initials if missing)
- Name, qualifications, experience
- Specialization highlighted

## 🎯 Action Cards (8 Total)

### 1. Website
- **Icon:** Globe 🌐
- **Action:** Opens clinic website in new tab
- **URL:** From `clinic.website`

### 2. Book Appointment
- **Icon:** Calendar 📅
- **Action:** Opens WhatsApp with pre-filled message
- **Message:** 
  ```
  Hello Pain Clinic,
  I would like to book a physiotherapy appointment.
  Please let me know the available appointment time.
  Thank you.
  ```

### 3. Call Now
- **Icon:** Phone 📞
- **Action:** Opens phone dialer
- **Number:** From `clinic.phone`

### 4. Email
- **Icon:** Mail ✉️
- **Action:** Opens email client
- **Address:** From `clinic.email`

### 5. Directions
- **Icon:** Map Pin 📍
- **Action:** Opens Google Maps
- **URL:** From `clinic.mapUrl`

### 6. Reviews
- **Icon:** Star ⭐
- **Action:** Opens Google Reviews
- **URL:** From `clinic.reviewsUrl`

### 7. Instagram
- **Icon:** Instagram 📷
- **Action:** Opens Instagram profile
- **URL:** From `clinic.instagramUrl`

### 8. Share
- **Icon:** Share2 ↗️
- **Action:** 
  - Uses Web Share API if available (mobile)
  - Falls back to clipboard copy
  - Shows "Clinic link copied!" toast

## 🟢 Dynamic Open/Closed Status

### Logic
```javascript
Current time >= 10:00 AM AND < 8:00 PM
  → Show: 🟢 OPEN NOW  10:00 AM – 8:00 PM

Otherwise
  → Show: ⚪ CLOSED  Opens at 10:00 AM
```

### Features
- Uses browser's local time
- Updates every minute
- Configurable hours in `clinic.ts`

## 📐 Responsive Design

### Mobile (Primary Target)
- **360×800** - Small Android
- **375×812** - iPhone SE, 12 Mini
- **390×844** - iPhone 12, 13, 14
- **414×896** - iPhone 11 Pro Max
- **430×932** - iPhone 14 Pro Max

All content fits in viewport - NO scrolling.

### Desktop
- Centered card design
- Max width: 480px
- Card-like appearance
- Soft background gradient

## 🎨 Color System

```
Navy (#0F2747)     - Headers, primary text
Teal (#0F8B8D)     - Accent, links
Blue (#2563EB)     - Primary actions
Green (#22C55E)    - Open status, positive actions
Slate (#F1F5F9)    - Background
White (#FFFFFF)    - Cards, content areas
```

## ✨ Animations

### Therapist Carousel
- **Fade In/Out:** 300ms ease
- **Slide:** Smooth Y-axis translation
- **Indicators:** Expand active, shrink inactive

### Action Cards
- **Hover:** Subtle gradient overlay
- **Tap:** Scale down to 95%
- **Icon Circles:** Gradient backgrounds
- **Arrow:** Color change on hover

### Status Badge
- **Pulse:** Green dot subtle pulse animation
- **Transition:** Smooth color changes

## 🔐 Privacy & Security

### No Data Collection
- No backend database
- No patient information stored
- No cookies or tracking
- No analytics by default

### Actions
- All actions open external apps/services
- No form submissions
- No data processing
- WhatsApp: Uses official API
- Phone/Email: Uses device protocols

## 📊 Performance

### Build Output
- **HTML:** ~0.6 KB (gzipped: 0.36 KB)
- **CSS:** ~17 KB (gzipped: 3.95 KB)
- **JS:** ~297 KB (gzipped: 98 KB)

### Optimizations
- Code splitting
- Tree shaking
- Minification
- Gzip compression
- Lazy loading (Framer Motion)

### Load Time
- **First Paint:** <1 second
- **Interactive:** <2 seconds
- **Full Load:** <3 seconds

## 🔧 Browser Support

### Tested and Supported:
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 9+)

### Features with Fallbacks:
- Web Share API → Clipboard copy
- Images → Initials placeholders
- Animations → Graceful degradation

## 📱 QR Code Generator

### Separate Route: `/qr`
- Not visible to patients
- For clinic owners only
- Features:
  - QR code preview
  - Download as PNG
  - Copy URL
  - Usage instructions

### QR Settings
- **Size:** 256×256 pixels
- **Error Correction:** High (H level)
- **Format:** SVG (downloadable as PNG)
- **Content:** Full URL to `/pain-clinic`

## 🎯 Use Cases

### For Clinics:
1. Print QR on business cards
2. Display at clinic entrance
3. Add to brochures
4. Include in prescriptions
5. Share on social media
6. Email to patients

### For Patients:
1. Quick access to contact info
2. One-tap appointment booking
3. Easy navigation to clinic
4. Share with family/friends
5. Check if clinic is open
6. Learn about therapists

## 🚀 Future Enhancement Ideas

If you need additional features later:

- [ ] Multiple language support
- [ ] Gallery of clinic photos
- [ ] Patient testimonials slider
- [ ] Insurance providers list
- [ ] Treatment services list
- [ ] Emergency contact button
- [ ] Integration with booking systems
- [ ] Analytics dashboard
- [ ] Dark mode toggle
- [ ] Accessibility improvements (WCAG AAA)

## 📝 Notes

- Keep it simple - that's the strength
- Every added feature reduces the "instant" feel
- Mobile experience is paramount
- Loading speed is critical
- Actions should be immediate
- No friction, no forms, no login

---

**Remember:** This is a digital business card, not a comprehensive website. Its power is in its simplicity and instant usability.
