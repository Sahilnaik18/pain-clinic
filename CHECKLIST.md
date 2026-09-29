# Pain Clinic Card - Launch Checklist

## ✅ Pre-Launch Customization

### 📝 Update Clinic Information
- [ ] Open `src/data/clinic.ts`
- [ ] Update clinic name (if different from "Pain Clinic")
- [ ] Update tagline
- [ ] Update location
- [ ] Update phone number
- [ ] Update email address
- [ ] Update WhatsApp number (with country code)
- [ ] Update opening hours
  - [ ] Open time (display text)
  - [ ] Close time (display text)
  - [ ] Open hour (24-hour number)
  - [ ] Close hour (24-hour number)
- [ ] Update website URL
- [ ] Save file

### 👨‍⚕️ Update Therapist Information
- [ ] Open `src/data/therapists.ts`
- [ ] Replace therapist 1 information
  - [ ] Name
  - [ ] Qualification
  - [ ] Experience
  - [ ] Specialization
  - [ ] Image path
- [ ] Replace therapist 2 information
- [ ] Replace therapist 3 information
- [ ] Replace therapist 4 information
- [ ] (Optional) Add more therapists
- [ ] (Optional) Remove therapists if less than 4
- [ ] Save file

### 🖼️ Add Images
- [ ] Prepare clinic logo (PNG, 512×512px recommended)
- [ ] Save logo as `public/logo.png`
- [ ] Prepare therapist photo 1 (JPG/PNG, 400×400px minimum)
- [ ] Save as `public/images/therapist-1.jpg`
- [ ] Prepare therapist photo 2
- [ ] Save as `public/images/therapist-2.jpg`
- [ ] Prepare therapist photo 3
- [ ] Save as `public/images/therapist-3.jpg`
- [ ] Prepare therapist photo 4
- [ ] Save as `public/images/therapist-4.jpg`

**Note:** If you don't have images yet, the app will show placeholder initials. You can add images later.

## 🧪 Testing

### Local Testing
- [ ] Open terminal in `pain-clinic-card` folder
- [ ] Run `npm install` (if not already done)
- [ ] Run `npm run dev`
- [ ] Open browser to `http://localhost:5173/pain-clinic`

### Functionality Tests
- [ ] Clinic name displays correctly
- [ ] Location shows correctly
- [ ] Logo displays (or shows placeholder)
- [ ] Therapist carousel shows your therapists
- [ ] Carousel auto-rotates every 2 seconds
- [ ] Can click carousel indicators
- [ ] Status badge shows "OPEN NOW" during business hours
- [ ] Status badge shows "CLOSED" outside business hours

### Action Card Tests
- [ ] Click "WEBSITE" - opens your website
- [ ] Click "APPOINTMENT" - opens WhatsApp with message
- [ ] Check WhatsApp number is correct
- [ ] Check message template is correct
- [ ] Click "CALL NOW" - triggers phone dialer
- [ ] Check phone number is correct
- [ ] Click "EMAIL" - opens email client
- [ ] Check email address is correct
- [ ] Click "DIRECTIONS" - shows "not configured" message (expected before deployment)
- [ ] Click "REVIEWS" - shows "not configured" message (expected)
- [ ] Click "INSTAGRAM" - shows "not configured" message (expected)
- [ ] Click "SHARE" - copies link or opens share menu

### Visual Tests
- [ ] No horizontal scrolling
- [ ] No vertical scrolling
- [ ] Everything visible on screen
- [ ] Text is readable
- [ ] Colors look professional
- [ ] Cards are properly spaced
- [ ] Footer displays at bottom

### Mobile Testing (Chrome DevTools)
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar (Ctrl+Shift+M)
- [ ] Test at 360×800 (small Android)
  - [ ] No scrolling
  - [ ] All cards visible
  - [ ] Cards are tappable
- [ ] Test at 390×844 (iPhone 12)
  - [ ] No scrolling
  - [ ] Looks good
- [ ] Test at 414×896 (iPhone 11 Pro Max)
  - [ ] No scrolling
  - [ ] Looks good

## 📦 Build

- [ ] Run `npm run build`
- [ ] Check for any errors
- [ ] Verify `dist` folder was created
- [ ] Build completed successfully

## 🌐 Deployment

### Choose Your Platform

#### Option A: Vercel (Recommended)
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Run `vercel` in project folder
- [ ] Follow prompts (use defaults)
- [ ] Copy deployment URL
- [ ] Test deployed site
- [ ] Verify `/pain-clinic` route works
- [ ] Verify `/qr` route works

#### Option B: Netlify
- [ ] Go to [netlify.com](https://netlify.com)
- [ ] Sign up / Log in
- [ ] Drag `dist` folder to deploy
- [ ] Wait for deployment
- [ ] Copy site URL
- [ ] Test deployed site

#### Option C: Other
- [ ] Deploy `dist` folder to your hosting
- [ ] Configure routing for SPA
- [ ] Test deployed site

## 🔗 Post-Deployment Configuration

### Get Google Links
- [ ] Find clinic on [Google Maps](https://maps.google.com)
- [ ] Click "Share" button
- [ ] Copy link
- [ ] Open `src/data/clinic.ts`
- [ ] Replace `mapUrl` with Google Maps link
- [ ] On Google Maps, click "Reviews" tab
- [ ] Copy URL
- [ ] Replace `reviewsUrl` with Reviews link
- [ ] Save file

### Update Social Media
- [ ] Get your Instagram profile URL
- [ ] Open `src/data/clinic.ts`
- [ ] Replace `instagramUrl` with your Instagram URL
- [ ] Update `shareUrl` with your actual deployed URL
- [ ] Save file

### Rebuild and Redeploy
- [ ] Run `npm run build`
- [ ] Redeploy to hosting
  - Vercel: `vercel --prod`
  - Netlify: drag new `dist` folder
  - Other: re-upload `dist` folder

### Final Testing
- [ ] Visit deployed site
- [ ] Test "DIRECTIONS" - now opens Google Maps
- [ ] Test "REVIEWS" - now opens Google Reviews
- [ ] Test "INSTAGRAM" - now opens Instagram
- [ ] Test "SHARE" - shares correct URL

## 📱 QR Code Generation

- [ ] Visit `your-domain.com/qr`
- [ ] QR code displays correctly
- [ ] URL shown is correct
- [ ] Click "Copy URL" - copies to clipboard
- [ ] Click "Download QR Code (PNG)"
- [ ] QR code downloads as PNG file
- [ ] Open PNG file
- [ ] Image is clear and scannable

### Print QR Codes
- [ ] Design business card with QR code
- [ ] Design poster with QR code
- [ ] Design brochure with QR code
- [ ] Print materials
- [ ] Test scanning QR code with phone camera
- [ ] Verify it opens your clinic card
- [ ] Test with multiple phones (iOS, Android)

## 🧪 Real-World Testing

### Phone Camera Test
- [ ] iPhone - scan QR code with camera app
- [ ] Android - scan QR code with camera app
- [ ] QR code opens site correctly
- [ ] Site loads quickly
- [ ] No scrolling needed
- [ ] All cards are tappable

### Action Tests on Real Phone
- [ ] Tap "WEBSITE" - opens in browser
- [ ] Tap "APPOINTMENT" - opens WhatsApp
- [ ] WhatsApp has pre-filled message
- [ ] Can send WhatsApp message
- [ ] Tap "CALL NOW" - opens phone dialer
- [ ] Can make call
- [ ] Tap "EMAIL" - opens mail app
- [ ] Can send email
- [ ] Tap "DIRECTIONS" - opens Maps app
- [ ] Can navigate to clinic
- [ ] Tap "REVIEWS" - opens browser to reviews
- [ ] Tap "INSTAGRAM" - opens Instagram app/browser
- [ ] Tap "SHARE" - opens share menu
- [ ] Can share via SMS, WhatsApp, etc.

### User Experience Test
- [ ] Ask colleague to scan QR code
- [ ] Observe if they understand interface
- [ ] Can they book appointment easily?
- [ ] Can they call without confusion?
- [ ] Does status badge make sense?
- [ ] Do they find it professional?

## 🎯 Distribution

### Physical Distribution
- [ ] Print QR codes on business cards
- [ ] Display QR code at clinic entrance
- [ ] Add QR code to brochures
- [ ] Include QR code on prescription pads
- [ ] Add to clinic signage

### Digital Distribution
- [ ] Share URL on clinic website
- [ ] Share URL on Google My Business
- [ ] Share URL on Facebook page
- [ ] Share URL on Instagram bio
- [ ] Share URL in email signature
- [ ] Share in WhatsApp status

## ✅ Launch Day

- [ ] Verify site is live
- [ ] Test QR code one final time
- [ ] Distribute QR codes to staff
- [ ] Place QR code at reception
- [ ] Announce on social media
- [ ] Send announcement to existing patients
- [ ] Monitor for any issues
- [ ] Celebrate! 🎉

## 📊 Post-Launch

### Week 1
- [ ] Monitor if QR codes are being scanned
- [ ] Ask patients for feedback
- [ ] Check if appointment booking is working
- [ ] Verify all links still work

### Month 1
- [ ] Review usage
- [ ] Update therapist info if changed
- [ ] Update hours for holidays if needed
- [ ] Consider adding more features if needed

### Ongoing
- [ ] Update therapist photos periodically
- [ ] Keep opening hours current
- [ ] Update links if they change
- [ ] Rebuild and redeploy after changes

## 🆘 Troubleshooting

### If Something Doesn't Work:

**QR code won't scan:**
- [ ] Check QR code image quality
- [ ] Ensure minimum 2×2 inch print size
- [ ] Test with multiple phone cameras

**WhatsApp won't open:**
- [ ] Verify WhatsApp number includes country code
- [ ] Format: `918762697832` (no spaces or +)
- [ ] Check phone has WhatsApp installed

**Links don't work:**
- [ ] Check URLs in `clinic.ts` have no typos
- [ ] Ensure URLs start with `https://`
- [ ] Test each URL manually in browser

**Site doesn't load:**
- [ ] Check deployment status
- [ ] Verify domain/URL is correct
- [ ] Check browser console for errors

**Images don't show:**
- [ ] Verify image files exist in `public/` folder
- [ ] Check file names match exactly
- [ ] File names are case-sensitive

---

## 🎉 Completion

When all checkboxes are ticked, your Pain Clinic digital card is fully launched and operational!

**Congratulations!** 🎊

Your patients can now scan your QR code and instantly access your professional clinic card.
