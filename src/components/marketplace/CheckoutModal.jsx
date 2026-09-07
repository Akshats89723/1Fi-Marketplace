import React from "react";
import {
  X,
  ShieldCheck,
  Zap,
  CheckCircle,
  Loader2,
  ArrowRight,
  Sparkles,
  Lock,
  FileText,
  Calendar,
  Building2
} from "lucide-react";
import { useMarketplace } from "../../context/MarketplaceContext";

export const CheckoutModal = () => {
  const {
    isCheckoutModalOpen,
    closeCheckout,
    checkoutStep,
    selectedProduct,
    selectedVariants,
    computedPrice,
    selectedEmiPlan,
    userCredit,
    isSubmittingLoan,
    submitLoanApplication,
    approvedOrder,
  } = useMarketplace();

  if (!isCheckoutModalOpen || !selectedProduct || !selectedEmiPlan) return null;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Step Indicator Header */}
        <div className="bg-gradient-to-r from-fiPurple-dark to-fiPurple text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold bg-white/20 px-2.5 py-0.5 rounded-full">
                1Fi Credit Checkout
              </span>
              <span className="text-xs text-indigo-200">Step {checkoutStep} of 3</span>
            </div>
            <h3 className="text-lg font-extrabold mt-1">
              {checkoutStep === 1 && "Confirm 1Fi EMI Plan"}
              {checkoutStep === 2 && "Pledging Mutual Fund Collateral"}
              {checkoutStep === 3 && "Loan Sanctioned & Approved!"}
            </h3>
          </div>

          <button
            onClick={closeCheckout}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* STEP 1: Plan Summary & Review */}
          {checkoutStep === 1 && (
            <div className="space-y-6">
              
              {/* Product Info Card */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-16 h-16 object-contain bg-white p-2 rounded-xl border border-gray-100"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {selectedProduct.name}
                  </h4>
                  <div className="text-xs text-gray-500 space-x-2 mt-0.5">
                    {Object.values(selectedVariants).map((v, i) => (
                      <span key={i} className="bg-white px-2 py-0.5 rounded-md border border-gray-200 font-medium">
                        {v.name || v.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* EMI Breakup Summary Card */}
              <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-5 space-y-3">
                <h5 className="font-bold text-fiPurple-dark text-xs uppercase tracking-wider">
                  Loan & EMI Schedule Summary
                </h5>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-gray-500">Loan Principal Amount</p>
                    <p className="font-extrabold text-gray-900 text-sm">
                      {formatCurrency(computedPrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Monthly EMI</p>
                    <p className="font-extrabold text-fiPurple text-sm">
                      {formatCurrency(selectedEmiPlan.monthlyEmi)} / mo
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tenure</p>
                    <p className="font-bold text-gray-800">{selectedEmiPlan.tenureMonths} Months</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Interest Rate</p>
                    <p className="font-bold text-emerald-600">
                      {selectedEmiPlan.isNoCost ? "0% No-Cost EMI" : "12% p.a."}
                    </p>
                  </div>
                </div>
              </div>

              {/* 1Fi Mutual Fund Collateral Pledge Notice */}
              <div className="border border-emerald-200 bg-emerald-50/60 rounded-2xl p-4 flex items-start space-x-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-emerald-900">
                    Mutual Fund Pledge Security ({userCredit?.collateralSymbol})
                  </p>
                  <p className="text-emerald-700 text-[11px] leading-relaxed">
                    By proceeding, you pledge {formatCurrency(selectedEmiPlan.mfCollateralPledgeRequired)} of your existing mutual fund units. Your investments remain in your folio and continue earning returns while servicing EMIs.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={submitLoanApplication}
                disabled={isSubmittingLoan}
                className="w-full bg-fiPurple hover:bg-fiPurple-dark text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmittingLoan ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Verifying Portfolio...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pledge Mutual Funds & Sanction Loan</span>
                  </>
                )}
              </button>

            </div>
          )}

          {/* STEP 2: Processing Simulation */}
          {checkoutStep === 2 && (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center relative">
                <Loader2 className="w-10 h-10 text-fiPurple animate-spin" />
                <Zap className="w-5 h-5 text-yellow-400 absolute fill-current" />
              </div>

              <div className="space-y-2 max-w-sm mx-auto">
                <h4 className="text-lg font-bold text-gray-900">Pledging Mutual Fund Units</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Connecting to CAMS / KFintech registry to execute digital lien marking for {formatCurrency(computedPrice)}...
                </p>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden max-w-md mx-auto">
                <div className="bg-fiPurple h-full w-3/4 animate-pulse"></div>
              </div>
            </div>
          )}

          {/* STEP 3: Approved & Success Screen */}
          {checkoutStep === 3 && approvedOrder && (
            <div className="text-center space-y-6 py-4">
              
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-100">
                <CheckCircle className="w-12 h-12 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Instant Sanction Approved
                </span>
                <h4 className="text-2xl font-extrabold text-gray-900 pt-2">
                  Congratulations, Alex!
                </h4>
                <p className="text-xs text-gray-500">
                  Your 1Fi Marketplace EMI loan has been successfully sanctioned.
                </p>
              </div>

              {/* Order Reference Receipt Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-left space-y-3 max-w-md mx-auto text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Loan Reference ID</span>
                  <span className="font-extrabold text-fiPurple-dark tracking-wide font-mono text-sm">
                    {approvedOrder.applicationRef}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Product</span>
                  <span className="font-bold text-gray-900">{selectedProduct.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Monthly EMI</span>
                  <span className="font-extrabold text-fiPurple">
                    {formatCurrency(approvedOrder.monthlyEmi)} / mo ({approvedOrder.tenureMonths} mos)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Collateral Pledged</span>
                  <span className="font-bold text-emerald-700">
                    {formatCurrency(approvedOrder.pledgedCollateral)} (Mutual Funds)
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-500">Estimated Delivery</span>
                  <span className="font-bold text-gray-900">{approvedOrder.estimatedDelivery}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={closeCheckout}
                  className="w-full bg-fiPurple hover:bg-fiPurple-dark text-white font-extrabold py-3 px-6 rounded-2xl shadow-md transition-all cursor-pointer"
                >
                  Return to 1Fi Shop
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
