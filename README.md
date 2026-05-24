# ⚡ ElectricHub — Complete Electronic Shop Website

ElectricHub is a modern, premium, multi-page e-commerce template for an electrical and electronics retail store. It features a stunning dark-theme design with neon blue and warm amber accents, fully fluid responsive layouts, interactive elements, a mock database powered by browser `localStorage`, and a fully functional protected Admin Dashboard.

## 🌟 Key Features

- **7 Interlinked Pages:**
  - 🏠 **Home Page (`index.html`):** Animated hero section, interactive categories grid, hand-picked featured products, and modern CTA banners.
  - 📦 **Products Listing (`products.html`):** Complete collection view with real-time live search, interactive category dropdown filtering, and sorting (by price, name, stock).
  - 🔍 **Product Details (`product-detail.html`):** High-resolution product images, full technical specifications tables, stock status indicators, a direct WhatsApp Enquiry click-through, and automated related products suggestion.
  - 🗂️ **Category Browser (`category.html`):** Pill-based tab interface for quick product catalog navigation by type (Lights, Fans, Switches, Wires, Tools).
  - ℹ️ **About Us (`about.html`):** The store's history, timeline of statistics, licensed credentials, values, and photo gallery.
  - 📞 **Contact Us (`contact.html`):** Detailed office cards, interactive map layout, direct WhatsApp floating support, and a complete contact form with input validation and custom success toast notifications.
  - ⚙️ **Admin Dashboard (`admin.html`):** A secure console with real-time statistics (Total products, categories, total inventory value, low-stock warnings) and a full **CRUD system** (Create, Read, Update, Delete) to manage the store catalogue.

- **💾 Browser-Based Database:**
  - Powered entirely by `localStorage`. No complex server-side installations or API integrations are required to run or evaluate the project.
  - Pre-seeded with **15 professional products** across multiple categories.
  - Fully reactive UI updates immediately upon any Admin CRUD modifications.

- **🎨 Modern Design System:**
  - Sleek **dark mode** background palette tailored for high-tech electronics retail.
  - Classy **glassmorphism** card effects, hover triggers, active state highlighting, and smooth keyframe micro-animations.
  - Standardized modern typography using Google Fonts (Inter).
  - High-quality, professional, custom-generated placeholder product images.

---

## 📂 Project Structure

```
electronic shop/
├── index.html           # Home Page
├── products.html        # Products Catalogue (Search & Filters)
├── product-detail.html  # Dynamic Product details & Specifications
├── category.html        # Category filter view
├── about.html           # Team background & Timeline
├── contact.html         # Contact details & Enquiry form
├── admin.html           # Secure store catalogue management
├── css/
│   ├── style.css        # Global CSS stylesheet & core Design System tokens
│   └── pages.css        # Page-specific design layout enhancements
├── js/
│   └── data.js          # Main DB engine (localStorage wrapper & shared header/footer)
└── images/              # Custom high-quality web-optimized product assets
```

---

## 🚀 Getting Started

No compilers, local servers (Node.js/npm), or database installations are needed!

1. **Download/Clone** this repository.
2. Navigate into the `electronic shop` directory.
3. Double-click **`index.html`** to open it instantly in your web browser.

---

## ⚙️ Administrative Access

- **Route:** Open `admin.html` in your browser.
- **Default Authentication Password:** `admin123`
- *Note: Session-based state saves your log-in status so you don't have to enter the password repeatedly during editing.*

---

## 🔧 Personalisation Guide

1. **Updating Brand Name / Contact Information:**
   Open `js/data.js` and edit the strings inside `renderNavbar()` and `renderFooter()` functions.
   
2. **Enabling Your Personal WhatsApp Number:**
   Search for the phone number `919876543210` across all files and replace it with your own personal phone number (including country code, without the `+` prefix).

3. **Modifying the Admin Password:**
   Open `admin.html`, locate the variable `const ADMIN_PASS = 'admin123';` on the script section, and update it to your preferred string.

4. **Adjusting Colors & Styles:**
   All colors, borders, shadows, and spacing parameters are represented as global variables under the `:root` pseudo-class inside `css/style.css`. Adjust values here to refresh the branding instantly.

---

## 🛡️ License

This project is open-source and free to use for educational, demonstration, or commercial e-commerce modifications. 
Made with ⚡ and pure web technologies.
