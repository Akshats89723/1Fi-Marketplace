import React from "react";
import { ProductCard } from "./ProductCard";
import { useMarketplace } from "../../context/MarketplaceContext";
import { SearchX, AlertCircle, RefreshCw } from "lucide-react";

export const SkeletonCard = () => (
  <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-4 animate-pulse">
    <div className="w-full h-44 bg-gray-200 rounded-xl"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded-md w-1/4"></div>
      <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded-md w-full"></div>
    </div>
    <div className="h-12 bg-gray-100 rounded-xl"></div>
    <div className="h-10 bg-gray-200 rounded-xl"></div>
  </div>
);

export const ProductGrid = () => {
  const { products, loading, error, reloadProducts, searchQuery, activeCategory } =
    useMarketplace();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8 text-center max-w-lg mx-auto my-12 space-y-4">
        <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
        <h3 className="text-lg font-bold text-gray-900">Failed to Load Marketplace Products</h3>
        <p className="text-xs text-gray-600">{error}</p>
        <button
          onClick={reloadProducts}
          className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center max-w-md mx-auto my-12 space-y-4">
        <SearchX className="w-12 h-12 text-gray-400 mx-auto" />
        <h3 className="text-lg font-bold text-gray-900">No Products Found</h3>
        <p className="text-xs text-gray-500">
          We couldn't find any products matching "{searchQuery || activeCategory}". Try searching for another item or clear your search filters.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-gray-500 font-medium px-1">
        <span>Showing {products.length} Products</span>
        <span>Eligible for Mutual Fund Collateral Loans</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
