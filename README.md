# Nazzy Stichez - Professional Fashion Website

A sophisticated, high-end fashion website for Nazzy Stichez, a bespoke tailoring and contemporary fashion brand celebrating African heritage and precision craftsmanship.

## 🌟 Features

### Design Highlights
- **Color Palette**: Deep emerald green (#0D5C4A), gold accents (#D4AF37), and crisp white
- **Typography**: Playfair Display for headings, Montserrat for body text
- **Aesthetic**: Minimalist, elegant, and premium with sophisticated animations

### Website Sections

1. **Header Navigation**
   - Sticky navigation bar with site logo
   - Desktop and mobile responsive menus
   - Quick access buttons for search, account, and shopping cart
   - "Book Consultation" CTA button

2. **Hero Section**
   - Full-screen impact with gradient overlay
   - Tagline: "Precision in Every Stitch"
   - Decorative animated elements
   - Dual CTA buttons for collections and consultations

3. **Lookbook/Collections**
   - Masonry-style gallery layout
   - Filter categories: All, Women's, Men's, Bridal
   - Showcase of custom designs and ready-to-wear pieces
   - Hover effects revealing product details

4. **Services**
   - Three main service offerings:
     - Custom Tailoring - Bespoke garments
     - Ready-to-Wear Collections - Limited editions
     - Bridal Alterations - Expert seamstress work
   - Experience section with statistics
   - Service highlight cards with feature lists

5. **About Us**
   - Brand story and heritage celebration
   - Core values displayed in a grid layout
   - Team highlight section
   - Imagery and testimonials

6. **Booking/Store**
   - Dual-tab interface:
     - **Consultation Booking**: Form to schedule appointments
     - **Store Information**: Location, hours, featured products
   - Client testimonials
   - Features and benefits section

7. **Footer**
   - Brand information and social media links
   - Quick navigation links
   - Services directory
   - Newsletter subscription form
   - Legal links (Privacy, Terms, Shipping)

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.4
- **Styling**: Tailwind CSS 3
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Fonts**: Google Fonts (Playfair Display, Montserrat)
- **CSS Processing**: PostCSS with Autoprefixer

## 📦 Project Structure

```
nazzy-website/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Lookbook.jsx    # Collections gallery
│   │   ├── Services.jsx    # Services overview
│   │   ├── About.jsx       # About section
│   │   ├── Booking.jsx     # Booking & store
│   │   └── Footer.jsx      # Footer
│   ├── App.js              # Main app component
│   ├── App.css             # Custom app styles
│   ├── index.css           # Global styles with Tailwind
│   └── index.js            # React entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd nazzy-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  'emerald': {
    900: '#0D5C4A',
    700: '#1a7e5c',
  },
  'gold': '#D4AF37',
  'cream': '#F5F1E8',
}
```

### Images
Replace placeholder images in components with actual product images:
- Update image URLs in `Lookbook.jsx`
- Add actual product photos to the `About.jsx` section

### Content
Update all text content in component files to match your specific messaging:
- Brand tagline in `Hero.jsx`
- Service descriptions in `Services.jsx`
- About section in `About.jsx`
- Contact information in `Booking.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (base)
- Tablet (md: 768px)
- Desktop (lg: 1024px)

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## 🎯 Key Features Implemented

✅ Minimalist and sophisticated design  
✅ Premium color palette with gold accents  
✅ Full responsive mobile design  
✅ Smooth scroll navigation  
✅ Filter functionality in collections  
✅ Interactive booking form  
✅ Email subscription form  
✅ Accessible HTML and ARIA labels  
✅ Hover animations and transitions  
✅ Modern React patterns with functional components  
✅ Tailwind CSS utility-first approach  

## 📝 Future Enhancements

- Add image optimization and lazy loading
- Implement backend API for form submissions
- Add shopping cart functionality
- Integrate payment gateway
- Add blog/journal section
- Implement user authentication
- Add product filtering and search
- Create admin dashboard for content management
- Deploy to production (Vercel, Netlify, AWS, etc.)

## 📄 License

© 2024-2026 Nazzy Stichez. All rights reserved. | Precision in Every Stitch.

## 📞 Contact

For inquiries about customizations or deployment, contact the development team.

---

**Live Site**: http://localhost:3000  
**Development Build** - Not optimized for production use.

### Build for Production
```bash
npm run build
```

The build folder will be ready to deploy to any static hosting service.
