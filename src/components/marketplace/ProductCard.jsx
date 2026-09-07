import React from "react";
import { Star, Shield, ArrowRight, Zap } from "lucide-react";
import { useMarketplace } from "../../context/MarketplaceContext";
import { apiService } from "../../services/api";

export const ProductCard = ({ product }) => {
  const { openProductDetail } = useMarketplace();

  // Calculate starting 12-month EMI estimate
  const emiPlans = apiService.calculateEmiPlans(product.discountPrice || product.basePrice);
  const startingEmi = emiPlans.find((p) => p.tenureMonths === 12) || emiPlans[0];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div
      onClick={() => openProductDetail(product)}
      className="group bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      
      {/* Product Image Container & Badges (Clicking image opens modal) */}
      <div className="relative aspect-4/3 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain max-h-44 w-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Top Left Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-fiPurple-dark/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
            {product.badge}
          </span>
        )}

        {/* Top Right No-Cost EMI Tag */}
        {product.noCostEmiAvailable && (
          <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-xs flex items-center space-x-1">
            <Zap className="w-3 h-3 fill-current text-yellow-300" />
            <span>0% EMI</span>
          </span>
        )}
      </div>

      {/* Product Details Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="font-semibold text-fiPurple uppercase tracking-wider">
              {product.brand}
            </span>
            <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-gray-900 text-base line-clamp-1 group-hover:text-fiPurple transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Color Swatch Options Preview Badge */}
          {product.variants?.colors && (
            <div className="pt-1 flex items-center space-x-1.5">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Colors:
              </span>
              <div className="flex items-center space-x-1">
                {product.variants.colors.map((c) => (
                  <span
                    key={c.name}
                    className="w-3 h-3 rounded-full border border-gray-300 shadow-2xs inline-block"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & EMI Highlight Box */}
        <div className="pt-3 border-t border-gray-100 space-y-3">
          
          {/* Cash Price */}
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-extrabold text-gray-900">
              {formatCurrency(product.discountPrice)}
            </span>
            {product.basePrice > product.discountPrice && (
              <span className="text-xs text-gray-400 line-through font-medium">
                {formatCurrency(product.basePrice)}
              </span>
            )}
          </div>

          {/* 1Fi EMI Benefit Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-xl p-2.5 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                1Fi No-Cost EMI
              </p>
              <p className="text-xs font-extrabold text-fiPurple-dark">
                {formatCurrency(startingEmi.monthlyEmi)} <span className="text-[10px] font-medium text-gray-600">/ mo</span>
              </p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
              12 Mos @ 0%
            </span>
          </div>

          {/* Action CTA Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openProductDetail(product);
            }}
            className="w-full bg-fiPurple hover:bg-fiPurple-dark text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>View EMI Plans</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
