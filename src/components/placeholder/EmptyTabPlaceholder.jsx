import React from "react";
import { Store, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { useMarketplace } from "../../context/MarketplaceContext";

export const EmptyTabPlaceholder = ({ title, icon: Icon, description }) => {
  const { setActiveShopTab } = useMarketplace();

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center max-w-lg mx-auto my-12 shadow-xs space-y-6">
      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto text-fiPurple border border-purple-100">
        <Icon className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
          {description || "This section is currently under development. Please check out 1Fi Marketplace for 0% EMI products backed by Mutual Funds."}
        </p>
      </div>

      <div className="pt-2">
        <button
          onClick={() => setActiveShopTab("marketplace")}
          className="inline-flex items-center space-x-2 bg-fiPurple hover:bg-fiPurple-dark text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>Explore 1Fi Marketplace</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
