import React, { useState } from "react";
import { X, Star, Check, ArrowRight, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { useMarketplace } from "../../context/MarketplaceContext";
import { EmiPlanSelector } from "./EmiPlanSelector";

export const ProductDetailModal = () => {
  const {
    isDetailModalOpen,
    closeProductDetail,
    selectedProduct,
    selectedVariants,
    selectVariant,
    computedPrice,
    selectedEmiPlan,
    startCheckout,
  } = useMarketplace();

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  if (!isDetailModalOpen || !selectedProduct) return null;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  // Active Display Image based on selected color variant or gallery index
  const activeColorObj = selectedVariants.colors;
  const galleryList =
    activeColorObj?.gallery ||
    (activeColorObj?.image ? [activeColorObj.image] : [selectedProduct.image]);

  const activeDisplayImage =
    galleryList[activeGalleryIndex] || galleryList[0] || selectedProduct.image;

  // Construct Dynamic Product Full Title
  const dynamicTitle = `${selectedProduct.name} ${
    selectedVariants.colors ? `(${selectedVariants.colors.name}` : ""
  }${selectedVariants.ram ? `, ${selectedVariants.ram.label}` : ""}${
    selectedVariants.storage ? `, ${selectedVariants.storage.label}` : ""
  }${selectedVariants.colors ? ")" : ""}`;

  const specs = selectedProduct.specifications || {};

  const discountPct =
    selectedProduct.basePrice > computedPrice
      ? Math.round(
          ((selectedProduct.basePrice - computedPrice) /
            selectedProduct.basePrice) *
            100
        )
      : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs overflow-hidden"
      onClick={closeProductDetail}
    >
      {/* Modal Container */}
      <div
        className="relative bg-white w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="shrink-0 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-fiPurple bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {selectedProduct.brand}
            </span>
            {selectedProduct.badge && (
              <>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
                  {selectedProduct.badge}
                </span>
              </>
            )}
          </div>

          <button
            onClick={closeProductDetail}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1 scrollbar-thin">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* LEFT COLUMN: Sticky Gallery + Specs */}
            <div className="md:col-span-5 h-full">
              <div className="sticky top-0 space-y-4 pt-1">

                <div className="flex gap-3">
                  {/* Vertical Side Gallery Thumbnails */}
                  {galleryList.length > 1 && (
                    <div className="flex flex-col space-y-2 shrink-0">
                      {galleryList.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveGalleryIndex(idx)}
                          className={`w-12 h-14 rounded-lg border-2 p-1 bg-white overflow-hidden transition-all cursor-pointer ${
                            activeGalleryIndex === idx
                              ? "border-fiPurple ring-2 ring-purple-200 scale-105 shadow-xs"
                              : "border-gray-200 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt="thumbnail"
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Main Display Image Box */}
                  <div
                    className="flex-1 rounded-2xl p-6 border flex flex-col items-center justify-center relative shadow-xs group min-h-[310px] transition-all duration-300 overflow-hidden"
                    style={{
                      backgroundColor: activeColorObj?.hex
                        ? `${activeColorObj.hex}12`
                        : "#F9FAFB",
                      borderColor: activeColorObj?.hex
                        ? `${activeColorObj.hex}40`
                        : "#F3F4F6",
                    }}
                  >
                    <img
                      key={activeDisplayImage}
                      src={activeDisplayImage}
                      alt={selectedProduct.name}
                      className="max-h-72 object-contain w-full transition-all duration-300 transform group-hover:scale-105"
                    />

                    {selectedProduct.noCostEmiAvailable && (
                      <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                        0% No-Cost EMI
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Highlights */}
                {selectedProduct.highlights?.length > 0 && (
                  <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-4 space-y-2.5">
                    <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider">
                      Key Features &amp; Highlights
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-600">
                      {selectedProduct.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: Options & EMI Plan Selector */}
            <div className="md:col-span-7 space-y-6">

              {/* Product Title */}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
                  {dynamicTitle}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{selectedProduct.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    ({selectedProduct.reviewCount} customer reviews)
                  </span>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="bg-gradient-to-r from-gray-50 to-purple-50/40 border border-gray-200 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    Offer Price (Selected Variant)
                  </p>
                  <div className="flex items-baseline space-x-3 mt-0.5 flex-wrap gap-y-1">
                    <span className="text-2xl font-extrabold text-gray-900">
                      {formatCurrency(computedPrice)}
                    </span>
                    {selectedProduct.basePrice > computedPrice && (
                      <span className="text-sm text-gray-400 line-through font-medium">
                        {formatCurrency(selectedProduct.basePrice)}
                      </span>
                    )}
                    {discountPct > 0 && (
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                        -{discountPct}% off
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                    0% EMI on Mutual Funds
                  </span>
                </div>
              </div>

              {/* COLOR VARIANT SELECTOR */}
              {selectedProduct.variants?.colors && (
                <div className="space-y-3 bg-purple-50/40 border border-purple-100 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Select Colour:
                    </span>
                    <span
                      className="text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-xs"
                      style={{
                        backgroundColor:
                          selectedVariants.colors?.hex || "#4F46E5",
                      }}
                    >
                      {selectedVariants.colors?.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.variants.colors.map((colorOpt) => {
                      const isSelected =
                        selectedVariants.colors?.name === colorOpt.name;
                      return (
                        <button
                          key={colorOpt.name}
                          onClick={() => {
                            selectVariant("colors", colorOpt);
                            setActiveGalleryIndex(0);
                          }}
                          className={`flex items-center space-x-3 p-3 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                            isSelected
                              ? "border-fiPurple bg-white ring-4 ring-purple-200 shadow-md"
                              : "border-gray-200 bg-white hover:border-gray-300 opacity-80 hover:opacity-100"
                          }`}
                        >
                          {/* Color Image Thumbnail */}
                          <div className="w-12 h-12 bg-gray-50 rounded-xl p-1 border border-gray-200 shrink-0 relative overflow-hidden flex items-center justify-center">
                            <img
                              src={colorOpt.image || selectedProduct.image}
                              alt={colorOpt.name}
                              className="w-full h-full object-contain"
                            />
                            <div
                              className="absolute bottom-0 inset-x-0 h-1.5"
                              style={{ backgroundColor: colorOpt.hex }}
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-xs ${
                                isSelected
                                  ? "font-extrabold text-fiPurple"
                                  : "font-bold text-gray-800"
                              }`}
                            >
                              {colorOpt.name}
                            </p>
                          </div>

                          {isSelected ? (
                            <CheckCircle2 className="w-5 h-5 text-fiPurple shrink-0" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STORAGE SELECTOR */}
              {selectedProduct.variants?.storage && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="font-bold text-gray-700">Size / Storage:</span>
                    <span className="font-bold text-gray-900">
                      {selectedVariants.storage?.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {selectedProduct.variants.storage.map((storageOpt) => {
                      const isSelected =
                        selectedVariants.storage?.label === storageOpt.label;
                      return (
                        <button
                          key={storageOpt.label}
                          onClick={() => selectVariant("storage", storageOpt)}
                          className={`p-3 rounded-xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                            isSelected
                              ? "border-fiPurple bg-purple-50/70 ring-2 ring-purple-200 shadow-xs"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-gray-900">
                              {storageOpt.label}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-fiPurple" />
                            )}
                          </div>
                          <span className="text-[10px] text-gray-500 mt-1">
                            {storageOpt.priceOffset === 0
                              ? "Base"
                              : `+${formatCurrency(storageOpt.priceOffset)}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* RAM SELECTOR */}
              {selectedProduct.variants?.ram && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="font-bold text-gray-700">RAM:</span>
                    <span className="font-bold text-gray-900">
                      {selectedVariants.ram?.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedProduct.variants.ram.map((ramOpt) => {
                      const isSelected =
                        selectedVariants.ram?.label === ramOpt.label;
                      return (
                        <button
                          key={ramOpt.label}
                          onClick={() => selectVariant("ram", ramOpt)}
                          className={`p-3 rounded-xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                            isSelected
                              ? "border-fiPurple bg-purple-50/70 ring-2 ring-purple-200 shadow-xs"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-gray-900">
                              {ramOpt.label}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-fiPurple" />
                            )}
                          </div>
                          <span className="text-[10px] text-gray-500 mt-1">
                            {ramOpt.priceOffset === 0
                              ? "Base"
                              : `+${formatCurrency(ramOpt.priceOffset)}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ACTIVE SELECTION SUMMARY */}
              <div className="bg-indigo-50/80 border border-indigo-100 rounded-xl p-3 flex items-center space-x-2 text-xs">
                <Sparkles className="w-4 h-4 text-fiPurple shrink-0" />
                <span className="text-gray-700 font-medium">
                  Active Setup:{" "}
                  <strong className="text-fiPurple font-bold">
                    {selectedProduct.name}
                    {selectedVariants.colors ? ` • ${selectedVariants.colors.name}` : ""}
                    {selectedVariants.storage ? ` • ${selectedVariants.storage.label}` : ""}
                    {selectedVariants.ram ? ` • ${selectedVariants.ram.label}` : ""}
                  </strong>
                </span>
              </div>

              {/* EMI BREAKDOWN SELECTOR */}
              <div className="pt-2 border-t border-gray-200">
                <EmiPlanSelector />
              </div>
            </div>

          </div>
        </div>

        {/* Sticky Action Footer Bar */}
        <div className="shrink-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between shadow-2xl z-20">
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Selected 1Fi EMI Plan
            </p>
            <p className="text-lg sm:text-xl font-extrabold text-fiPurple">
              {formatCurrency(selectedEmiPlan?.monthlyEmi || 0)}
              <span className="text-xs font-medium text-gray-500">
                {" "}/ mo for {selectedEmiPlan?.tenureMonths} mos
              </span>
            </p>
          </div>

          <button
            onClick={startCheckout}
            className="bg-fiPurple hover:bg-fiPurple-dark text-white font-extrabold px-6 py-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center space-x-2 cursor-pointer"
          >
            <span>Proceed with EMI Plan</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

