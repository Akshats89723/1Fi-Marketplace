import React from "react";
import { Search, SlidersHorizontal, Sparkles, ShieldCheck, X } from "lucide-react";
import { CATEGORIES } from "../../data/mockProducts";
import { useMarketplace } from "../../context/MarketplaceContext";

export const MarketplaceHeader = () => {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  } = useMarketplace();

  return (
    <div className="space-y-6">
      
      {/* 1Fi Hero Promotional Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-fiPurple-dark via-fiPurple to-indigo-700 text-white p-6 sm:p-8 shadow-xl shadow-indigo-100">
        <div className="absolute right-0 top-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-purple-400/20 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-0 -ml-12 -mb-12 w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span>1Fi Mutual Fund Credit Facility</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Shop Top Tech on <span className="text-emerald-300 underline decoration-emerald-400 decoration-wavy">0% No-Cost EMI</span>
          </h1>
          <p className="text-sm text-indigo-100 leading-relaxed">
            Pledge your Mutual Fund units seamlessly. Keep your wealth growing while enjoying flexible monthly EMI plans up to 24 months with ₹0 processing fees.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-white/90">
            <div className="flex items-center space-x-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Instant Loan Approval</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Investment Liquidation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Sort Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search iPhone, MacBook, Sony, LG..."
            className="w-full pl-10 pr-9 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fiPurple focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
            <SlidersHorizontal className="w-4 h-4 text-fiPurple" />
            <span>Sort by:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-gray-800 text-xs font-semibold rounded-lg px-3 py-2 focus:ring-2 focus:ring-fiPurple focus:outline-none cursor-pointer"
          >
            <option value="recommended">Featured & Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Category Chips Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-fiPurple text-white shadow-md shadow-indigo-200 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

    </div>
  );
};
