import React from "react";
import { CheckCircle2, Zap, Info, Shield } from "lucide-react";
import { useMarketplace } from "../../context/MarketplaceContext";

export const EmiPlanSelector = () => {
  const { emiPlans, selectedEmiPlan, setSelectedEmiPlan } = useMarketplace();

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center space-x-2">
            <span>Select 1Fi EMI Plan</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
              Mutual Fund Backed
            </span>
          </h4>
          <p className="text-xs text-gray-500">
            No liquidation needed. Zero impact on your long-term mutual fund compounding.
          </p>
        </div>
      </div>

      {/* Grid of Tenure Options */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {emiPlans.map((plan) => {
          const isSelected = selectedEmiPlan?.tenureMonths === plan.tenureMonths;

          return (
            <div
              key={plan.tenureMonths}
              onClick={() => setSelectedEmiPlan(plan)}
              className={`relative border-2 rounded-xl p-3.5 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? "border-fiPurple bg-purple-50/60 ring-2 ring-purple-200"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {/* Radio Indicator */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-800">
                  {plan.tenureMonths} Months
                </span>
                {isSelected ? (
                  <CheckCircle2 className="w-4 h-4 text-fiPurple fill-fiPurple text-white" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                )}
              </div>

              {/* Monthly Price */}
              <div>
                <p className="text-base sm:text-lg font-extrabold text-gray-900">
                  {formatCurrency(plan.monthlyEmi)}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">per month</p>
              </div>

              {/* Tag / Badge */}
              <div className="mt-3">
                {plan.isNoCost ? (
                  <span className="inline-flex items-center text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    <Zap className="w-3 h-3 mr-0.5 fill-current text-yellow-500" />
                    0% Interest
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md">
                    12% Low Interest
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Plan Details Breakdown Box */}
      {selectedEmiPlan && (
        <div className="bg-gradient-to-r from-gray-50 to-indigo-50/30 border border-gray-200 rounded-xl p-4 space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-gray-200/80">
            <span className="font-semibold text-gray-600">Selected Tenure:</span>
            <span className="font-bold text-gray-900">{selectedEmiPlan.tenureMonths} Months</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Monthly EMI Amount:</span>
            <span className="font-bold text-fiPurple-dark text-sm">
              {formatCurrency(selectedEmiPlan.monthlyEmi)} / mo
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Interest Payable:</span>
            <span className="font-semibold text-gray-900">
              {selectedEmiPlan.isNoCost ? (
                <span className="text-emerald-600 font-bold">₹0 (No Cost EMI)</span>
              ) : (
                formatCurrency(selectedEmiPlan.totalInterest)
              )}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Processing Fee:</span>
            <span className="font-bold text-emerald-600">₹0 (1Fi Waived)</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-200/80">
            <span className="text-gray-600 flex items-center">
              <Shield className="w-3.5 h-3.5 text-fiPurple mr-1" />
              MF Collateral Pledged:
            </span>
            <span className="font-extrabold text-gray-900">
              {formatCurrency(selectedEmiPlan.mfCollateralPledgeRequired)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
