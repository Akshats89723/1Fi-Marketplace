export const CATEGORIES = [
  { id: "all", label: "All Products", icon: "Grid" },
  { id: "mobiles", label: "Smartphones", icon: "Smartphone" },
  { id: "laptops", label: "Laptops & Computing", icon: "Laptop" },
  { id: "audio", label: "Audio & Wearables", icon: "Headphones" },
  { id: "appliances", label: "Smart Home", icon: "Tv" },
];

export const MOCK_PRODUCTS = [
  {
    id: "prod-iqoo",
    name: "iQOO Z11 5G",
    brand: "iQOO",
    category: "mobiles",
    badge: "India's 1st Dimensity 7500",
    rating: 4.8,
    reviewCount: 940,
    basePrice: 55999,
    discountPrice: 39999,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    description: "India's 1st MediaTek Dimensity 7500 Turbo Processor with 3D Curved Display, 1.5K Brightest Display, and AI Captions.",
    highlights: [
      "MediaTek Dimensity 7500 Turbo Processor",
      "3D Curved 1.5K Brightest AMOLED Display",
      "50MP Sony OIS Camera System",
      "80W FlashCharge with 5500mAh battery"
    ],
    specifications: {
      "Display": "6.78-inch 3D Curved AMOLED, 1.5K (2800x1260), 144Hz Refresh Rate, 4500 nits Peak",
      "Processor": "MediaTek Dimensity 7500 Turbo 4nm Octa-Core (Up to 3.25GHz)",
      "Camera System": "50MP Sony OIS Primary + 8MP Ultra-Wide + 16MP HD Selfie",
      "Battery & Charging": "5500 mAh Dual-Cell, 80W FlashCharge (0-100% in 32 mins)",
      "Operating System": "Funtouch OS 15 based on Android 15 (3 Years OS Updates)",
      "Connectivity": "5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, Infrared Remote",
      "Warranty": "1 Year Manufacturer Warranty for Phone & 6 Months for In-Box Charger"
    },
    variants: {
      ram: [
        { label: "8GB RAM", priceOffset: 0 },
        { label: "12GB RAM", priceOffset: 4000 }
      ],
      storage: [
        { label: "128GB Storage", priceOffset: 0 },
        { label: "256GB Storage", priceOffset: 5000 }
      ],
      colors: [
        {
          name: "Aurora Green",
          hex: "#88C9A1",
          image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
          gallery: [
            "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
          ]
        },
        {
          name: "Celestial Blue",
          hex: "#1E3B5C",
          image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
          gallery: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
          ]
        }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 24,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-1",
    name: "Apple iPhone 16 Pro",
    brand: "Apple",
    category: "mobiles",
    badge: "Top Seller",
    rating: 4.9,
    reviewCount: 1240,
    basePrice: 119900,
    discountPrice: 112900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    description: "Experience the ultimate iPhone with titanium design, A18 Pro chip, and revolutionary camera control.",
    highlights: [
      "Grade 5 Titanium design with textured matte glass back",
      "A18 Pro chip with 6-core GPU",
      "48MP Fusion camera system with 5x Telephoto",
      "Up to 29 hours video playback"
    ],
    specifications: {
      "Display": "6.3-inch Super Retina XDR OLED, ProMotion 120Hz, Always-On Display, Ceramic Shield",
      "Processor": "Apple A18 Pro chip with 6-core CPU, 6-core GPU, 16-core Neural Engine",
      "Camera System": "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto + 12MP TrueDepth Front",
      "Battery & Video": "Up to 27 hours video playback, MagSafe wireless charging up to 25W",
      "Build & Durability": "Grade 5 Titanium frame, IP68 water resistance (6m up to 30 mins)",
      "Warranty": "1 Year Apple Limited Warranty & 90 Days Complimentary Technical Support"
    },
    variants: {
      storage: [
        { label: "128GB", priceOffset: 0 },
        { label: "256GB", priceOffset: 10000 },
        { label: "512GB", priceOffset: 30000 },
        { label: "1TB", priceOffset: 50000 }
      ],
      colors: [
        { name: "Natural Titanium", hex: "#A8A6A1", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
        { name: "Desert Titanium", hex: "#C2B29F", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80" },
        { name: "White Titanium", hex: "#F2F1ED", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" },
        { name: "Black Titanium", hex: "#343335", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 24,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-2",
    name: "Samsung Galaxy S25 Ultra 5G",
    brand: "Samsung",
    category: "mobiles",
    badge: "0% No-Cost EMI",
    rating: 4.8,
    reviewCount: 980,
    basePrice: 129999,
    discountPrice: 121999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    description: "Galaxy AI powered flagship with Snapdragon 8 Elite, 200MP Quad Telephoto camera, and built-in S Pen.",
    highlights: [
      "Snapdragon® 8 Elite for Galaxy",
      "200MP main camera with ProVisual Engine",
      "Built-in S Pen for effortless note taking",
      "Dynamic AMOLED 2X 120Hz display"
    ],
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X, QHD+ (3120x1440), 120Hz, Gorilla Armor Glass",
      "Processor": "Snapdragon® 8 Elite Mobile Platform for Galaxy (4nm)",
      "Camera System": "200MP Main + 50MP Ultra Wide + 50MP (5x) + 10MP (3x) + 12MP Front",
      "Battery & Pen": "5000 mAh Battery, 45W Super Fast Charging, Built-in S Pen",
      "AI Features": "Circle to Search, Live Translate, Note Assist, Generative Photo Edit",
      "Warranty": "1 Year Samsung India Warranty for Handset & 6 Months for Accessories"
    },
    variants: {
      storage: [
        { label: "256GB", priceOffset: 0 },
        { label: "512GB", priceOffset: 12000 },
        { label: "1TB", priceOffset: 32000 }
      ],
      colors: [
        { name: "Titanium Gray", hex: "#7E7E7E", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80" },
        { name: "Titanium Black", hex: "#2B2B2B", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80" },
        { name: "Titanium Violet", hex: "#4B3E5F", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 24,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-3",
    name: "MacBook Air 15-inch M3",
    brand: "Apple",
    category: "laptops",
    badge: "Popular for Work",
    rating: 4.9,
    reviewCount: 745,
    basePrice: 134900,
    discountPrice: 124900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "Strikingly thin and fast laptop with liquid retina display and up to 18 hours of battery life.",
    highlights: [
      "Apple M3 8-core CPU, 10-core GPU",
      "15.3-inch Liquid Retina display with 500 nits",
      "1080p FaceTime HD camera",
      "MagSafe 3 charging port"
    ],
    specifications: {
      "Display": "15.3-inch LED-backlit Liquid Retina Display (2880x1864), 500 nits, P3 Wide Color",
      "Processor": "Apple M3 Chip (8-Core CPU, 10-Core GPU, 16-Core Neural Engine)",
      "Audio & Mic": "Six-speaker sound system with force-cancelling woofers, Spatial Audio",
      "Battery Life": "Up to 18 hours Apple TV app movie playback & 15 hours wireless web",
      "Ports & Power": "MagSafe 3, 2x Thunderbolt / USB 4 ports, 3.5mm Headphone jack",
      "Warranty": "1 Year Apple Limited Warranty & 90 Days Tech Support"
    },
    variants: {
      ram: [
        { label: "16GB Unified Memory", priceOffset: 0 },
        { label: "24GB Unified Memory", priceOffset: 20000 }
      ],
      storage: [
        { label: "512GB SSD", priceOffset: 0 },
        { label: "1TB SSD", priceOffset: 20000 }
      ],
      colors: [
        { name: "Midnight", hex: "#1E2530", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" },
        { name: "Starlight", hex: "#E3D8C8", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80" },
        { name: "Space Gray", hex: "#7D7E80", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80" },
        { name: "Silver", hex: "#E0E2E5", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 24,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-4",
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "audio",
    badge: "Best Noise Cancellation",
    rating: 4.7,
    reviewCount: 1520,
    basePrice: 34990,
    discountPrice: 28990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Industry-leading noise canceling with two processors and 8 microphones for unparalleled sound clarity.",
    highlights: [
      "Integrated Processor V1 & HD Noise Canceling Processor QN1",
      "Up to 30-hour battery life with quick charging",
      "Crystal clear hands-free calling with 4 beamforming mics",
      "Ultra-comfortable lightweight design"
    ],
    specifications: {
      "Noise Cancellation": "Dual Processors (V1 + QN1) & 8 Microphones Auto NC Optimizer",
      "Driver Unit": "30mm specially designed carbon fiber composite driver",
      "Battery Life": "30 Hours (NC On) / 40 Hours (NC Off), 3 min charge = 3 hrs playback",
      "Bluetooth & Codecs": "Bluetooth 5.2, LDAC, AAC, SBC, Multi-Point Dual Device Connect",
      "Warranty": "1 Year Sony India Brand Warranty"
    },
    variants: {
      colors: [
        { name: "Black", hex: "#111111", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" },
        { name: "Silver", hex: "#DCDCDC", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80" },
        { name: "Midnight Blue", hex: "#1C2B4B", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 12,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-5",
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "audio",
    badge: "New Release",
    rating: 4.8,
    reviewCount: 610,
    basePrice: 56900,
    discountPrice: 52900,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    description: "The thinnest Apple Watch ever with our biggest display, depth sensor, and advanced health metrics.",
    highlights: [
      "S10 SiP with 64-bit dual-core processor",
      "Sleep apnea notifications & ECG app",
      "Water resistant 50m & depth gauge",
      "Fast charging: 0-80% in ~30 mins"
    ],
    specifications: {
      "Display": "Always-On Retina LTPO3 OLED Display, Up to 2000 nits Brightness",
      "Sensors": "Electrical Heart Sensor (ECG), Blood Oxygen, Depth Gauge, Temperature Sensor",
      "Water & Dust": "50m Water Resistant, IP6X Dust Resistant, EN13319 Dive Standard",
      "Battery & Charge": "Up to 18 hours normal use, Fast charge: 0-80% in 30 mins",
      "Warranty": "1 Year Apple Limited Warranty"
    },
    variants: {
      size: [
        { label: "42mm", priceOffset: 0 },
        { label: "46mm", priceOffset: 3000 }
      ],
      colors: [
        { name: "Jet Black", hex: "#0F0F0F", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80" },
        { name: "Rose Gold", hex: "#E8C5B0", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" },
        { name: "Silver Aluminum", hex: "#D8D9DB", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 12,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-6",
    name: "LG C4 55-inch OLED evo 4K Smart TV",
    brand: "LG",
    category: "appliances",
    badge: "Cinema Experience",
    rating: 4.9,
    reviewCount: 430,
    basePrice: 154990,
    discountPrice: 139990,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    description: "Self-lit OLED pixels delivering infinite contrast, 100% color fidelity, and α9 AI Processor Gen7.",
    highlights: [
      "α9 AI Processor Gen7 4K with AI Picture Pro",
      "144Hz refresh rate & G-Sync for gaming",
      "Dolby Vision & Dolby Atmos built-in",
      "webOS 24 with 5 years of OS updates"
    ],
    specifications: {
      "Display Panel": "55-inch OLED evo 4K Ultra HD (3840x2160), Self-lit Pixels, 144Hz VRR",
      "Processor & AI": "α9 AI Processor Gen7 4K, AI Brightness Control, AI Super Upscaling 4K",
      "Gaming Features": "G-Sync, FreeSync Premium, 4x HDMI 2.1 Ports, 0.1ms Response Time",
      "Audio System": "2.2 Channel 40W Speakers, Dolby Atmos, AI Sound Pro 9.1.2 Virtual Surround",
      "Warranty": "3 Years LG India Comprehensive Brand Warranty"
    },
    variants: {
      size: [
        { label: "55 inch", priceOffset: 0 },
        { label: "65 inch", priceOffset: 45000 }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 24,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-7",
    name: "iPad Air 11-inch M2",
    brand: "Apple",
    category: "laptops",
    badge: "Versatile Power",
    rating: 4.8,
    reviewCount: 512,
    basePrice: 59900,
    discountPrice: 55900,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    description: "Fresh design equipped with the blazing-fast M2 chip, Liquid Retina display, and landscape front camera.",
    highlights: [
      "Apple M2 chip for powerful performance",
      "11-inch Liquid Retina display with True Tone",
      "Supports Apple Pencil Pro and Magic Keyboard",
      "All-day battery life"
    ],
    specifications: {
      "Display": "11-inch Liquid Retina LED-backlit Display (2360x1640), P3 Wide Color, True Tone",
      "Processor": "Apple M2 Chip (8-Core CPU, 9-Core GPU, 16-Core Neural Engine)",
      "Cameras": "12MP Wide Rear Camera + Landscape 12MP Ultra Wide Front Camera with Center Stage",
      "Accessories": "Apple Pencil Pro & Magic Keyboard Compatible",
      "Warranty": "1 Year Apple Limited Warranty"
    },
    variants: {
      storage: [
        { label: "128GB", priceOffset: 0 },
        { label: "256GB", priceOffset: 10000 },
        { label: "512GB", priceOffset: 30000 }
      ],
      colors: [
        { name: "Space Gray", hex: "#53555B", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80" },
        { name: "Blue", hex: "#A4BAC9", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80" },
        { name: "Purple", hex: "#B8B5D4", image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80" },
        { name: "Starlight", hex: "#E5DDD0", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 18,
    mfCollateralRequiredPercent: 100
  },
  {
    id: "prod-8",
    name: "Dyson V15 Detect Cordless Vacuum",
    brand: "Dyson",
    category: "appliances",
    badge: "Smart Home Tech",
    rating: 4.7,
    reviewCount: 390,
    basePrice: 65900,
    discountPrice: 62900,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
    description: "Dyson's most intelligent cordless vacuum with laser illumination that reveals microscopic dust.",
    highlights: [
      "Laser detects particles you can't normally see",
      "Piezo sensor continuously sizes and counts dust particles",
      "Up to 60 minutes run time with click-in battery",
      "Digital Motorbar cleaner head de-tangles hair"
    ],
    specifications: {
      "Filtration": "Whole-machine HEPA filtration traps 99.99% of microscopic particles down to 0.1 microns",
      "Suction Power": "240 AW (Air Watts) Hyperdymium Motor",
      "Run Time": "Up to 60 minutes fade-free suction with click-in battery",
      "Screen": "LCD Screen displays real-time performance, particle count chart & battery life",
      "Warranty": "2 Years Dyson Brand Warranty"
    },
    variants: {},
    emiEligible: true,
    noCostEmiAvailable: true,
    maxTenureMonths: 18,
    mfCollateralRequiredPercent: 100
  }
];

export const USER_CREDIT_INFO = {
  name: "Alex Morgan",
  mutualFundPortfolioValue: 480000,
  creditLimitAvailable: 250000,
  approvedLender: "1Fi Capital Credit Services",
  collateralSymbol: "Nifty 50 Index / Equity MF",
  zeroProcessingFeeEligible: true
};
