import React from "react";
import { ShoppingBag, Store, Sparkles } from "lucide-react";
import { useMarketplace } from "../../context/MarketplaceContext";

export const ShopTabsNav = () => {
  const { activeShopTab, setActiveShopTab } = useMarketplace();

  const tabs = [
    {
      id: "top-brands",
      label: "Top Brands",
      icon: Store,
      badge: null,
    },
    {
      id: "nearby-stores",
      label: "Nearby Stores",
      icon: ShoppingBag,
      badge: null,
    },
    {
      id: "marketplace",
      label: "1Fi Marketplace",
      icon: Sparkles,
      badge: "0% EMI",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-6 sm:space-x-8 overflow-x-auto scrollbar-none" aria-label="Shop Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeShopTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveShopTab(tab.id)}
                className={`py-4 px-1 inline-flex items-center space-x-2 border-b-2 font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "border-fiPurple text-fiPurple font-bold"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-fiPurple" : "text-gray-400"}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1.5 text-[10px] uppercase tracking-wide font-extrabold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-fiPurple text-white"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
