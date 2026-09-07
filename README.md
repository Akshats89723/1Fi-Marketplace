# 1Fi Marketplace — SDE Intern Assignment

A fully functional **1Fi Marketplace** section built inside the Shop page of the 1Fi app, as per the SDE Intern Assignment specifications.

---

##  Assignment Overview

> **Objective:** Build the 1Fi Marketplace section within the existing Shop page of the 1Fi app, maintaining consistency with the existing 1Fi app experience.

The Shop page contains three tabs:

| Tab | Status | Description |
|-----|--------|-------------|
| ?? Top Brands | Placeholder | Blank page (as per assignment) |
| ?? Nearby Stores | Placeholder | Blank page (as per assignment) |
| ?? 1Fi Marketplace | ? Fully Implemented | Complete e-commerce experience |

---

## ? Features Implemented

### ??? 1Fi Marketplace
- **Product Grid** — Browse products across categories: Smartphones, Laptops, Audio & Wearables, Smart Home
- **Category Filter Bar** — Filter products by category with animated indicator
- **Product Cards** — Show product image, brand, name, rating, price, discount %, and EMI starting price
- **Click to Open** — Clicking any product card opens the full Product Detail Modal

### ?? Product Detail Modal
- **Image Gallery** — Side thumbnail strip + main product image with hover zoom
- **Color-aware Image Switching** — Selecting a color variant updates the product image instantly (tinted background matches selected color)
- **Color Variant Selector** — Visual card-style selector with image preview, color swatch, and checkmark for selected state
- **Storage & RAM Selectors** — Pill-style selectors with price offsets shown
- **Live Price Calculation** — Price updates dynamically based on selected variants
- **Key Highlights** — Bullet checklist of product highlights
- **Active Selection Summary** — Real-time summary of selected configuration
- **1Fi EMI Plan Selector** — Choose from 3/6/9/12/18/24-month 0% No-Cost EMI plans

### ?? 1Fi EMI Checkout Flow (3-Step)
- **Step 1 — Review Order** — Shows product, selected configuration, and chosen EMI plan
- **Step 2 — Mutual Fund Pledge** — Explains 0% interest via MF collateral pledging (1Fi's unique model)
- **Step 3 — Confirmation** — Order success with animated confirmation

### ?? Header & Credit Limit
- **Credit Limit Modal** — Shows available 1Fi credit limit (?2,50,000) backed by Mutual Fund portfolio
- **Notifications Dropdown** — Recent activity alerts
- **User Profile Modal** — User details (Alex Morgan)

### ?? Product Catalogue (8 Products)
- iQOO Z11 5G
- Apple iPhone 16 Pro
- Samsung Galaxy S25 Ultra 5G
- MacBook Air 15-inch M3
- Sony WH-1000XM5 Headphones
- Apple Watch Series 10
- LG C4 55-inch OLED 4K TV
- Dyson V15 Detect Vacuum
- iPad Air 11-inch M2

---

## ??? Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Framework |
| **Vite 8** | Build Tool & Dev Server |
| **Tailwind CSS v3** | Styling |
| **Lucide React** | Icons |
| **Context API** | Global State Management |
| **Mock API Layer** | Simulated async product fetch |

---

## ?? Getting Started

### Prerequisites
- Node.js v18 or above
- npm v9 or above

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/Akshats89723/1Fi-Marketplace.git

# Navigate into the project
cd 1Fi-Marketplace

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

---

## ?? Project Structure

```
onefi-marketplace/
+-- public/
¦   +-- favicon.svg
+-- src/
¦   +-- components/
¦   ¦   +-- layout/
¦   ¦   ¦   +-- AppHeader.jsx          # Header with credit limit, notifications, profile
¦   ¦   ¦   +-- BottomNav.jsx          # Mobile bottom navigation bar
¦   ¦   ¦   +-- ShopTabsNav.jsx        # Top Brands / Nearby Stores / 1Fi Marketplace tabs
¦   ¦   +-- marketplace/
¦   ¦   ¦   +-- ProductGrid.jsx        # Product listing with category filter
¦   ¦   ¦   +-- ProductCard.jsx        # Individual product card
¦   ¦   ¦   +-- ProductDetailModal.jsx # Full product detail drawer
¦   ¦   ¦   +-- EmiPlanSelector.jsx    # EMI tenure plan selector
¦   ¦   ¦   +-- CheckoutModal.jsx      # 3-step checkout flow
¦   ¦   ¦   +-- MarketplaceHeader.jsx  # Marketplace section header
¦   ¦   +-- placeholder/
¦   ¦       +-- EmptyTabPlaceholder.jsx
¦   +-- context/
¦   ¦   +-- MarketplaceContext.jsx     # Global state (cart, variants, modals)
¦   +-- data/
¦   ¦   +-- mockProducts.js            # Product catalogue with variants & specs
¦   +-- services/
¦   ¦   +-- api.js                     # Mock async API layer
¦   +-- App.jsx
¦   +-- main.jsx
¦   +-- index.css
+-- tailwind.config.js
+-- vite.config.js
+-- package.json
```

---

## ?? Key Design Decisions

1. **0% No-Cost EMI via Mutual Fund Pledge** — Reflects 1Fi'\''s unique product model where the user pledges their MF portfolio as collateral instead of paying interest.
2. **Color Variant Image Switching** — Each color variant has its own product image. Selecting a color instantly swaps the main image, with the image container tinted to match the color — similar to Amazon/Flipkart UX.
3. **Mock API Layer** — Products are fetched via a simulated async API (`services/api.js`) to mirror real-world data fetching patterns.
4. **Context API** — A single `MarketplaceContext` manages all marketplace state (selected product, variants, EMI plan, modals) cleanly across components.
5. **Mobile-first Responsive Design** — Built with a mobile-first approach matching the 1Fi app'\''s mobile form factor.

---

## ?? Screenshots

> Run `npm run dev` and open http://localhost:5173 to see the live app.

---

## ?? Submitted By

**Akshat Sanghvi**
SDE Intern Candidate — 1Fi
Submission Date: 8th September 2026
