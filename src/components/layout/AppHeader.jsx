import React, { useState } from "react";
import { ShieldCheck, Bell, User, Zap, Sparkles, X, CheckCircle, PieChart, Lock, ChevronRight, Check } from "lucide-react";
import { useMarketplace } from "../../context/MarketplaceContext";

export const AppHeader = () => {
  const { userCredit } = useMarketplace();

  // Modals & Dropdown States
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(true);

  const creditLimit = userCredit
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(userCredit.creditLimitAvailable)
    : "₹2,50,000";

  const portfolioVal = userCredit
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(userCredit.mutualFundPortfolioValue)
    : "₹4,80,000";

  const notificationsList = [
    {
      id: 1,
      title: "Credit Limit Pre-Approved!",
      time: "10 mins ago",
      desc: `₹2,50,000 credit limit approved based on your Mutual Fund portfolio value of ${portfolioVal}.`,
      icon: Zap,
      color: "text-yellow-500 bg-yellow-50",
    },
    {
      id: 2,
      title: "0% No-Cost EMI Active",
      time: "1 hour ago",
      desc: "Shop smartphones & gadgets up to 12 months with 0% interest and ₹0 processing fee.",
      icon: Sparkles,
      color: "text-fiPurple bg-purple-50",
    },
    {
      id: 3,
      title: "KYC & CAMS Lien Verified",
      time: "Yesterday",
      desc: "Your Mutual Fund CAMS folio status is active for 1-click instant loan sanction.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fiPurple-dark via-fiPurple to-fiPurple-light flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-indigo-200 cursor-pointer">
                1Fi
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-gray-900 text-lg tracking-tight">1Fi Shop</span>
                  <span className="bg-indigo-50 text-fiPurple text-xs font-semibold px-2 py-0.5 rounded-full border border-indigo-100">
                    Marketplace
                  </span>
                </div>
                <p className="text-xs text-gray-500 hidden sm:block">
                  0% EMI Loans Against Mutual Fund Holdings
                </p>
              </div>
            </div>

            {/* Interactive Header Action Buttons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              
              {/* 1. MF Credit Limit Badge (CLICKABLE) */}
              <button
                onClick={() => setIsCreditModalOpen(true)}
                className="bg-gradient-to-r from-purple-50 via-indigo-50 to-emerald-50 hover:from-purple-100 hover:to-emerald-100 border border-purple-200/80 rounded-full px-3.5 py-1.5 flex items-center space-x-2 shadow-2xs transition-all cursor-pointer group"
                title="Click to view 1Fi Mutual Fund Credit Limit details"
              >
                <div className="w-6 h-6 rounded-full bg-fiPurple text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  <Zap className="w-3.5 h-3.5 fill-current text-yellow-300" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">MF Credit Limit</p>
                  <p className="text-xs font-extrabold text-fiPurple-dark">{creditLimit}</p>
                </div>
                <span className="hidden md:inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 mr-0.5" /> Instant
                </span>
              </button>

              {/* 2. Notification Bell Dropdown (CLICKABLE) */}
              <div className="relative">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="p-2 text-gray-500 hover:text-fiPurple hover:bg-purple-50 rounded-full transition-colors relative cursor-pointer"
                  title="Notifications"
                >
                  <Bell className="w-5 h-5" />
                  {unreadNotifications && (
                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white animate-pulse"></span>
                  )}
                </button>

                {/* Notifications Dropdown Panel */}
                {isNotificationOpen && (
                  <div
                    className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-fadeIn space-y-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-4 h-4 text-fiPurple" />
                        <span className="font-bold text-gray-900 text-sm">Notifications</span>
                      </div>
                      {unreadNotifications && (
                        <button
                          onClick={() => setUnreadNotifications(false)}
                          className="text-[11px] font-semibold text-fiPurple hover:underline"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    <div className="space-y-2.5 max-h-72 overflow-y-auto">
                      {notificationsList.map((n) => {
                        const Icon = n.icon;
                        return (
                          <div
                            key={n.id}
                            className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <div className={`p-2 rounded-xl shrink-0 ${n.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-gray-900">{n.title}</p>
                                <span className="text-[10px] text-gray-400">{n.time}</span>
                              </div>
                              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                                {n.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. User Profile Avatar (CLICKABLE) */}
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white shadow-md flex items-center justify-center text-white font-extrabold text-xs cursor-pointer hover:scale-105 transition-transform"
                title="View Profile & Portfolio"
              >
                AM
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* 1. CREDIT LIMIT BREAKDOWN MODAL */}
      {isCreditModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setIsCreditModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 space-y-6 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-fiPurple text-white flex items-center justify-center">
                  <Zap className="w-4 h-4 fill-current text-yellow-300" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-base">1Fi Credit Profile</h3>
              </div>
              <button
                onClick={() => setIsCreditModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-fiPurple-dark via-fiPurple to-indigo-700 rounded-2xl p-5 text-white space-y-3 shadow-lg">
              <p className="text-xs text-indigo-200 font-bold uppercase tracking-wider">
                Available Mutual Fund Credit Limit
              </p>
              <p className="text-3xl font-extrabold">{creditLimit}</p>
              
              <div className="pt-2 flex items-center justify-between border-t border-white/20 text-xs">
                <span>Total MF Portfolio:</span>
                <span className="font-extrabold text-emerald-300">{portfolioVal}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-600">Approved Lender:</span>
                <span className="font-bold text-gray-900">{userCredit?.approvedLender || "1Fi Capital Services"}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-600">Pledge Security:</span>
                <span className="font-bold text-gray-900">{userCredit?.collateralSymbol || "Nifty 50 Equity MF"}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-600">Processing Fee:</span>
                <span className="font-extrabold text-emerald-600">₹0 (Waived)</span>
              </div>
            </div>

            <button
              onClick={() => setIsCreditModalOpen(false)}
              className="w-full bg-fiPurple hover:bg-fiPurple-dark text-white font-bold py-3 rounded-xl shadow-md transition-colors cursor-pointer text-xs"
            >
              Close Credit Profile
            </button>
          </div>
        </div>
      )}

      {/* 2. USER PROFILE MODAL */}
      {isProfileModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setIsProfileModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 space-y-6 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                  AM
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base">Alex Morgan</h3>
                  <p className="text-xs text-gray-500">alex.morgan@1fi.app</p>
                </div>
              </div>
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-900">
                <span className="flex items-center font-bold">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-600" /> KYC Verified
                </span>
                <span className="text-[10px] bg-emerald-200 text-emerald-800 font-extrabold px-2 py-0.5 rounded-md">
                  ACTIVE
                </span>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
                <p className="font-bold text-gray-900">Linked Mutual Fund Folios</p>
                <div className="space-y-1.5 text-gray-600">
                  <div className="flex justify-between">
                    <span>Nifty 50 Index Fund</span>
                    <span className="font-semibold text-gray-900">₹2,80,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HDFC Flexi Cap Fund</span>
                    <span className="font-semibold text-gray-900">₹2,00,000</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="w-full bg-fiPurple hover:bg-fiPurple-dark text-white font-bold py-3 rounded-xl shadow-md transition-colors cursor-pointer text-xs"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
