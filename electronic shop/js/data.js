// ==========================================
//  ELECTRIC SHOP — Data Layer (data.js)
//  All product data stored in localStorage
// ==========================================

const DB_KEY = 'electricShopProducts';

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'LED Bulb 9W',
    category: 'Lights',
    brand: 'Philips',
    price: 85,
    stock: 150,
    image: 'images/led_bulb.png',
    description: 'Energy-saving LED bulb with 9W power consumption and bright 800 lumen output. Long lifespan of 15,000 hours. Perfect for homes, offices and shops.',
    specs: {
      'Wattage': '9W',
      'Lumens': '800 lm',
      'Color Temp': '6500K (Cool White)',
      'Base Type': 'B22 / E27',
      'Lifespan': '15,000 hrs',
      'Voltage': '220-240V'
    }
  },
  {
    id: 2,
    name: 'LED Tube Light 20W',
    category: 'Lights',
    brand: 'Havells',
    price: 220,
    stock: 80,
    image: 'images/led_bulb.png',
    description: 'High-efficiency T8 LED tube light, ideal for office, warehouse, and commercial spaces. Flicker-free and mercury-free.',
    specs: {
      'Wattage': '20W',
      'Lumens': '2000 lm',
      'Color Temp': '4000K (Neutral White)',
      'Length': '4 ft (1.2m)',
      'Lifespan': '25,000 hrs',
      'Voltage': '220V AC'
    }
  },
  {
    id: 3,
    name: 'Ceiling Fan 1200mm',
    category: 'Fans',
    brand: 'Crompton',
    price: 1850,
    stock: 35,
    image: 'images/ceiling_fan.png',
    description: 'High-speed BEE 5-star rated ceiling fan with 1200mm sweep. Aerodynamic blades for maximum air delivery. Available in multiple finishes.',
    specs: {
      'Sweep': '1200mm',
      'Speed': '350 RPM',
      'Air Delivery': '210 CMM',
      'Power': '75W',
      'Star Rating': '5 Star BEE',
      'Voltage': '220-240V'
    }
  },
  {
    id: 4,
    name: 'Table Fan 400mm',
    category: 'Fans',
    brand: 'Usha',
    price: 950,
    stock: 45,
    image: 'images/ceiling_fan.png',
    description: '400mm high-speed table fan with 3-speed control. Compact and portable design, ideal for personal use in rooms, offices, and kitchens.',
    specs: {
      'Sweep': '400mm',
      'Speeds': '3',
      'Power': '55W',
      'Type': 'Table Fan',
      'Oscillation': 'Yes',
      'Voltage': '220-240V'
    }
  },
  {
    id: 5,
    name: 'Modular Switch 6A',
    category: 'Switches',
    brand: 'Legrand',
    price: 120,
    stock: 200,
    image: 'images/electric_switch.png',
    description: 'Premium modular one-way switch rated at 6A. Fire-resistant, shock-proof polycarbonate body. Easy to install in standard modular switchboards.',
    specs: {
      'Current Rating': '6A',
      'Voltage Rating': '250V',
      'Type': 'One-Way Switch',
      'Material': 'Polycarbonate',
      'Mounting': 'Modular',
      'Standard': 'IS:3854'
    }
  },
  {
    id: 6,
    name: 'Switchboard 6-Module',
    category: 'Switches',
    brand: 'Anchor',
    price: 350,
    stock: 75,
    image: 'images/electric_switch.png',
    description: 'Flat plate 6-module switchboard frame. Compatible with all standard modular switches and sockets. Elegant finish for modern interiors.',
    specs: {
      'Modules': '6',
      'Size': 'Standard',
      'Color': 'White',
      'Material': 'ABS Plastic',
      'Type': 'Flat Plate',
      'Finish': 'Gloss'
    }
  },
  {
    id: 7,
    name: 'Copper Wire 1.5 Sq.mm (90m)',
    category: 'Wires',
    brand: 'Finolex',
    price: 680,
    stock: 60,
    image: 'images/electric_wire.png',
    description: 'ISI marked FR PVC insulated copper conductor wire. 1.5 sq.mm ideal for lighting circuits. Superior conductivity with fire-retardant insulation.',
    specs: {
      'Size': '1.5 sq.mm',
      'Length': '90 meters',
      'Material': 'Copper',
      'Insulation': 'FR PVC',
      'Standard': 'IS:694',
      'Max Voltage': '1100V'
    }
  },
  {
    id: 8,
    name: 'Copper Wire 4 Sq.mm (90m)',
    category: 'Wires',
    brand: 'Polycab',
    price: 1650,
    stock: 40,
    image: 'images/electric_wire.png',
    description: 'Heavy-duty FR PVC insulated copper wire for power circuits and high-load appliances. ISI certified. Excellent heat and moisture resistance.',
    specs: {
      'Size': '4 sq.mm',
      'Length': '90 meters',
      'Material': 'Copper',
      'Insulation': 'FRLS PVC',
      'Standard': 'IS:694',
      'Max Voltage': '1100V'
    }
  },
  {
    id: 9,
    name: 'Extension Board 4-Socket',
    category: 'Tools',
    brand: 'Anchor',
    price: 399,
    stock: 90,
    image: 'images/extension_board.png',
    description: '4-socket extension board with 2-meter cable. Surge protection, master switch, and USB charging port. Ideal for home and office use.',
    specs: {
      'Sockets': '4 Universal',
      'Cable Length': '2 meters',
      'Power Rating': '2500W',
      'Voltage': '220-250V',
      'Protection': 'Surge + Child Safety',
      'USB Ports': '2 x USB-A'
    }
  },
  {
    id: 10,
    name: 'MCB 32A Single Pole',
    category: 'Tools',
    brand: 'Schneider',
    price: 285,
    stock: 55,
    image: 'images/electric_switch.png',
    description: 'Miniature circuit breaker for overload and short-circuit protection. 32A single pole, DIN rail mounted. Quick trip mechanism for reliable protection.',
    specs: {
      'Current': '32A',
      'Poles': 'Single',
      'Breaking Capacity': '10kA',
      'Curve': 'C-Curve',
      'Mounting': 'DIN Rail',
      'Standard': 'IS:8828'
    }
  },
  {
    id: 11,
    name: 'Exhaust Fan 6 inch',
    category: 'Fans',
    brand: 'Havells',
    price: 750,
    stock: 30,
    image: 'images/ceiling_fan.png',
    description: 'Ventilation exhaust fan for kitchens, bathrooms, and offices. Quiet operation, high air flow, durable ABS blade. Easy wall or window mounting.',
    specs: {
      'Size': '6 inch (150mm)',
      'Speed': '2800 RPM',
      'Air Flow': '250 CMH',
      'Power': '30W',
      'Noise': '<45 dB',
      'Voltage': '220V'
    }
  },
  {
    id: 12,
    name: 'LED Strip Light 5m',
    category: 'Lights',
    brand: 'Syska',
    price: 550,
    stock: 65,
    image: 'images/led_bulb.png',
    description: 'Flexible 5-meter RGB LED strip light. 60 LEDs/meter, adhesive backing, cuttable, and waterproof (IP65). Includes 12V adapter and remote.',
    specs: {
      'Length': '5 meters',
      'LEDs/meter': '60',
      'Type': 'RGB',
      'Waterproof': 'IP65',
      'Voltage': '12V DC',
      'Color': 'RGB (16 million)'
    }
  },
  {
    id: 13,
    name: 'Electrician Tool Kit',
    category: 'Tools',
    brand: 'Stanley',
    price: 1299,
    stock: 20,
    image: 'images/extension_board.png',
    description: 'Professional 10-piece electrician tool kit. Includes insulated screwdrivers, pliers, wire stripper, tester, and carrying bag. VDE certified.',
    specs: {
      'Pieces': '10',
      'Insulation': '1000V VDE',
      'Screwdrivers': '4 pcs',
      'Pliers': '2 pcs',
      'Wire Stripper': '1 pc',
      'Tester': '1 pc'
    }
  },
  {
    id: 14,
    name: 'Wall Socket 16A',
    category: 'Switches',
    brand: 'Crabtree',
    price: 180,
    stock: 120,
    image: 'images/electric_switch.png',
    description: 'Heavy-duty 16A wall socket with shutters. Suitable for air conditioners, washing machines, and high-load appliances. Brass contacts for durability.',
    specs: {
      'Current Rating': '16A',
      'Voltage': '250V',
      'Contacts': 'Brass',
      'Shutters': 'Yes',
      'Type': 'Universal Socket',
      'Standard': 'IS:1293'
    }
  },
  {
    id: 15,
    name: 'Electrical Tape (Pack of 5)',
    category: 'Wires',
    brand: '3M',
    price: 145,
    stock: 300,
    image: 'images/electric_wire.png',
    description: 'Premium PVC electrical insulation tape. High voltage resistance (up to 600V), flame retardant, UV resistant. Suitable for wire bundling and insulation.',
    specs: {
      'Pieces': '5 rolls',
      'Width': '19mm',
      'Length': '18m per roll',
      'Voltage': '600V',
      'Temperature': '-18°C to 105°C',
      'Material': 'PVC'
    }
  }
];

// ── DB Functions ──
function getProducts() {
  const stored = localStorage.getItem(DB_KEY);
  if (!stored) {
    localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(stored);
}

function saveProducts(products) {
  localStorage.setItem(DB_KEY, JSON.stringify(products));
}

function getProductById(id) {
  return getProducts().find(p => p.id === parseInt(id));
}

function addProduct(product) {
  const products = getProducts();
  const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { ...product, id: newId };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
}

function updateProduct(id, updates) {
  const products = getProducts();
  const idx = products.findIndex(p => p.id === parseInt(id));
  if (idx !== -1) {
    products[idx] = { ...products[idx], ...updates };
    saveProducts(products);
    return products[idx];
  }
  return null;
}

function deleteProduct(id) {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== parseInt(id));
  saveProducts(filtered);
}

function getCategories() {
  const products = getProducts();
  const cats = [...new Set(products.map(p => p.category))];
  return cats.sort();
}

function getProductsByCategory(category) {
  return getProducts().filter(p => p.category === category);
}

// ── Shared UI Helpers ──
function showToast(message, type = 'success') {
  const existing = document.querySelectorAll('.toast');
  existing.forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✓' : '✗'}</span> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3800);
}

function formatPrice(price) {
  return '₹' + Number(price).toLocaleString('en-IN');
}

function getStockBadge(stock) {
  if (stock <= 0) return '<span class="badge badge-red">Out of Stock</span>';
  if (stock <= 10) return `<span class="badge badge-amber">Low Stock (${stock})</span>`;
  return `<span class="badge badge-green">In Stock (${stock})</span>`;
}

function buildProductCard(product) {
  return `
    <div class="product-card animate-in" onclick="window.location.href='product-detail.html?id=${product.id}'">
      <img class="product-card-img" src="${product.image}" alt="${product.name}" onerror="this.src='images/led_bulb.png'">
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-brand">by ${product.brand}</div>
        <div style="margin-bottom:0.5rem">${getStockBadge(product.stock)}</div>
        <div class="product-card-footer">
          <div class="product-card-price">
            <span>₹</span>${Number(product.price).toLocaleString('en-IN')}
          </div>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); window.location.href='product-detail.html?id=${product.id}'">
            View →
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderNavbar(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'products.html', label: 'Products' },
    { href: 'category.html', label: 'Categories' },
    { href: 'about.html', label: 'About Us' },
    { href: 'contact.html', label: 'Contact' }
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
    <nav class="navbar" id="mainNav">
      <a href="index.html" class="nav-logo">
        <div class="logo-icon">⚡</div>
        <span><span class="brand-name">Electric</span><span class="brand-accent">Hub</span></span>
      </a>
      <div class="nav-links" id="navLinks">${links}</div>
      <div class="nav-actions">
        <a href="admin.html" class="btn-admin">⚙ Admin</a>
        <div class="hamburger" id="hamburger" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="nav-logo" style="margin-bottom:1rem">
              <div class="logo-icon">⚡</div>
              <span><span class="brand-name">Electric</span><span class="brand-accent">Hub</span></span>
            </div>
            <p>Your trusted electrical shop for all wiring, lighting, fans, switches, and tools. Serving the community for over 15 years.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="index.html">Home</a>
            <a href="products.html">Products</a>
            <a href="category.html">Categories</a>
            <a href="about.html">About Us</a>
          </div>
          <div class="footer-col">
            <h4>Categories</h4>
            <a href="category.html?cat=Lights">Lights</a>
            <a href="category.html?cat=Fans">Fans</a>
            <a href="category.html?cat=Switches">Switches</a>
            <a href="category.html?cat=Wires">Wires</a>
            <a href="category.html?cat=Tools">Tools</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="tel:+919876543210">📞 +91 98765 43210</a>
            <a href="mailto:info@electrichub.in">✉ info@electrichub.in</a>
            <a href="contact.html">📍 View Location</a>
            <a href="https://wa.me/919876543210" target="_blank">💬 WhatsApp</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 ElectricHub. All rights reserved.</span>
          <span>Made with ⚡ for quality electrical products</span>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/919876543210" target="_blank" class="whatsapp-float" title="Chat on WhatsApp">💬</a>
  `;
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});
