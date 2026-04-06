# Nazzy Stichez - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation & Running

1. **Navigate to project directory**
   ```bash
   cd /Users/tobidaniel/Downloads/Nazzy/nazzy-website
   ```

2. **The development server is already running on:**
   ```
   http://localhost:3000
   ```

3. **If you need to restart the server:**
   ```bash
   npm start
   ```

4. **To stop the server:**
   ```
   Press Ctrl+C in the terminal
   ```

## 🧪 Feature Testing Checklist

### Header Features
- [ ] Click **search icon** - search bar appears
- [ ] Type a product name (e.g., "Dress", "Suit") - results appear below
- [ ] Click **heart icon** (♡) - wishlist sidebar opens
- [ ] Click **shopping cart icon** - cart sidebar opens  
- [ ] Click **user icon** - login dropdown appears
- [ ] Enter email and password, click "Sign In"
- [ ] Click **user icon** again - shows welcome message and logout

### Product Gallery (Collections Section)
- [ ] View all products in masonry grid
- [ ] Click **category buttons** (All, Women's, Men's, Bridal) - grid filters
- [ ] Hover over product card - see description and price
- [ ] Click **heart button** on card - adds to wishlist
- [ ] Click **"Add to Cart"** button - adds product to cart
- [ ] Click **product image** - opens detail modal
- [ ] In modal: click **size buttons** - demonstrates size selection
- [ ] In modal: click **color buttons** - demonstrates color selection
- [ ] In modal: click **heart button** - toggles wishlist
- [ ] In modal: click **"Add to Cart"** - adds to cart
- [ ] Close modal - click X or click outside

### Shopping Cart
- [ ] Click cart icon - sidebar slides in from right
- [ ] See list of items with images, prices, quantities
- [ ] Click **+** button - increases quantity
- [ ] Click **-** button - decreases quantity (or removes if 1)
- [ ] Click **"Add to Cart"** to add more items
- [ ] See **total price** updates automatically
- [ ] Click **"Checkout"** button - ready for payment integration
- [ ] Click close (X) - cart sidebar closes

### Wishlist
- [ ] Click heart icon in header - wishlist sidebar opens
- [ ] Shows all wishlist items with images and prices
- [ ] Click **"Add to Cart"** on wishlist item - moves to cart AND removes from wishlist
- [ ] Click **"Remove"** - deletes from wishlist
- [ ] Add empty wishlist and see helpful message
- [ ] Click **"Continue Shopping"** - closes wishlist

### Account & Authentication
- [ ] Click user icon - login form appears
- [ ] Enter any email, any password (no validation needed)
- [ ] Click "Sign In" - shows logged-in status
- [ ] User email appears below welcome message
- [ ] Click user icon again - see logout button
- [ ] Click **"Logout"** - returns to login form
- [ ] Browse menu items (My Orders, Wishlist, Settings)

### Legal Pages (Footer)
- [ ] Scroll to **footer** section
- [ ] Click **"Privacy Policy"** - loads privacy page
- [ ] Verify text content displays correctly
- [ ] Click **"Terms & Conditions"** - loads terms page
- [ ] Click **"Shipping & Returns"** - loads shipping page
- [ ] Page scrolls to top when changing pages
- [ ] Verify all pages have consistent styling

### Mobile Responsiveness
- [ ] Open developer tools (F12) - toggle device toolbar
- [ ] Set to iPhone (375px width) - test all features
- [ ] Click **hamburger menu** (☰) - mobile navigation opens
- [ ] Verify all buttons and text readable on mobile
- [ ] Test cart, wishlist, and search on mobile
- [ ] Resize back to desktop - everything works

### Other Sections
- [ ] Scroll through **Hero** section - impressive visual
- [ ] View **Services** section - custom tailoring, ready-to-wear, bridal
- [ ] Read **About** section - brand values and story
- [ ] Check **Booking** section - dual tabs (consultation + store info)
- [ ] View all **section colors** are navy/gold (not emerald)

## 💡 Key Features Explained

### Search
- Real-time product search across name, description, and category
- Try searching: "dress", "custom", "bridal", "suit", etc.

### Wishlist
- Add items by clicking heart icons
- Move to cart and automatically remove from wishlist
- Useful for customers to save favorites

### Shopping Cart
- Accumulates products with quantities
- Real-time total calculation
- Ready for payment gateway integration

### User Accounts
- Simple login without database validation
- Useful for future order tracking integration
- Shows user email when logged in

### Legal Pages
- Privacy Policy - data collection, usage, security
- Terms & Conditions - service terms, liability
- Shipping & Returns - policies and procedures
- All fully functional and SEO-friendly

## 🎨 Design Details

### Color Scheme
- **Navy** (#1a2240) - Primary/professional
- **Gold** (#D4AF37) - Accent/luxury
- **Cream** (#F5F1E8) - Clean/elegant
- **Dark** (#1a1a1a) - Text/headers

### Fonts
- **Playfair Display** - Elegant serif for headings
- **Montserrat** - Clean sans-serif for body

### Layout
- Max-width 7xl (1280px) - comfortable reading
- Tailwind CSS padding/spacing - consistent rhythm
- Responsive grid - 1 col mobile, 2 col tablet, 3 col desktop

## 📝 Customization Tips

### Change Colors
Edit `src/tailwind.config.js`:
```javascript
theme: {
  colors: {
    navy: '#1a2240',      // Change primary color
    gold: '#D4AF37',       // Change accent color
    cream: '#F5F1E8',      // Change background
  }
}
```

### Add Products
Edit `src/data/products.js`:
```javascript
{
  id: 9,
  name: 'Your Product',
  category: 'womens', // or 'mens', 'bridal'
  price: 299,
  image: 'https://example.com/image.jpg',
  description: 'Short description',
  details: 'Long description',
  size: ['XS', 'S', 'M', 'L', 'XL'],
  color: ['Black', 'Navy', 'White'],
  rating: 4.8,
  reviews: 45
}
```

### Edit Text Content
- Hero text: `src/components/Hero.jsx`
- About text: `src/components/About.jsx`  
- Services: `src/components/Services.jsx`
- Booking form labels: `src/components/Booking.jsx`

## 🔧 Troubleshooting

**Issue**: "Cannot find module" error
- **Solution**: Run `npm install` to install dependencies

**Issue**: Server not running
- **Solution**: Run `npm start` in the project directory

**Issue**: Changes not reflecting
- **Solution**: Refresh the browser (Cmd+R or Ctrl+R)

**Issue**: Cart/wishlist not saving after refresh
- **Solution**: This is normal - features use React state (not database). For persistence, integrate localStorage or a backend database.

## 📦 Deployment

To deploy to production:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Or deploy to Netlify**:
   - Connect GitHub repo
   - Deploy main branch (auto-builds)

## 📞 Support

For customizations or issues:
- Review the **FEATURES_GUIDE.md** for detailed feature documentation
- Check component files in `src/components/`
- All code is well-commented and organized

---

**Happy browsing and testing! 🎉**
