import React from "react";
import { Home, PieChart, ShoppingBag, CreditCard, User } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { label: "Home", icon: Home, active: false },
    { label: "Portfolio", icon: PieChart, active: false },
    { label: "Shop", icon: ShoppingBag, active: true },
    { label: "Loans", icon: CreditCard, active: false },
    { label: "Account", icon: User, active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-t border-gray-200 py-2 sm:hidden shadow-lg">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center justify-center w-full py-1 ${
                item.active
                  ? "text-fiPurple font-bold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${item.active ? "text-fiPurple" : ""}`} />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
