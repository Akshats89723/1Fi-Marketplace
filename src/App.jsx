import React from "react";
import { MarketplaceProvider, useMarketplace } from "./context/MarketplaceContext";
import { AppHeader } from "./components/layout/AppHeader";
import { ShopTabsNav } from "./components/layout/ShopTabsNav";
import { BottomNav } from "./components/layout/BottomNav";
import { MarketplaceHeader } from "./components/marketplace/MarketplaceHeader";
import { ProductGrid } from "./components/marketplace/ProductGrid";
import { ProductDetailModal } from "./components/marketplace/ProductDetailModal";
import { CheckoutModal } from "./components/marketplace/CheckoutModal";
import { EmptyTabPlaceholder } from "./components/placeholder/EmptyTabPlaceholder";
import { Store, ShoppingBag } from "lucide-react";

function ShopContent() {
  const { activeShopTab } = useMarketplace();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 sm:pb-12 space-y-6">
      {activeShopTab === "top-brands" && (
        <EmptyTabPlaceholder
          title="Top Brands Directory"
          icon={Store}
          description="Explore top brand partnerships and direct manufacturer offers coming soon."
        />
      )}

      {activeShopTab === "nearby-stores" && (
        <EmptyTabPlaceholder
          title="Nearby Partner Stores"
          icon={ShoppingBag}
          description="Find 1Fi partner retail outlets near your area for instant offline Mutual Fund EMI checkout."
        />
      )}

      {activeShopTab === "marketplace" && (
        <div className="space-y-6 animate-fadeIn">
          <MarketplaceHeader />
          <ProductGrid />
        </div>
      )}

      {/* Modals */}
      <ProductDetailModal />
      <CheckoutModal />
    </main>
  );
}

export default function App() {
  return (
    <MarketplaceProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
        <AppHeader />
        <ShopTabsNav />
        <ShopContent />
        <BottomNav />
      </div>
    </MarketplaceProvider>
  );
}
