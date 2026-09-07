import React, { createContext, useContext, useState, useEffect } from "react";
import { apiService } from "../services/api";

const MarketplaceContext = createContext();

export const MarketplaceProvider = ({ children }) => {
  // Navigation Tabs: 'top-brands' | 'nearby-stores' | 'marketplace'
  const [activeShopTab, setActiveShopTab] = useState("marketplace");

  // Filtering & Search
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");

  // Products Data State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // User Credit Profile State
  const [userCredit, setUserCredit] = useState(null);

  // Active Product Modal & Variant State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [computedPrice, setComputedPrice] = useState(0);
  const [emiPlans, setEmiPlans] = useState([]);
  const [selectedEmiPlan, setSelectedEmiPlan] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Loan Checkout Modal State
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Review, 2: MF Pledge, 3: Success
  const [isSubmittingLoan, setIsSubmittingLoan] = useState(false);
  const [approvedOrder, setApprovedOrder] = useState(null);

  // Fetch Products whenever filters change
  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await apiService.getProducts({
        category: activeCategory,
        search: searchQuery,
        sortBy,
      });
      setProducts(res.products);
    } catch (err) {
      console.error(err);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [activeCategory, searchQuery, sortBy]);

  // Load User Credit Profile on mount
  useEffect(() => {
    apiService.getUserCreditProfile().then((res) => {
      setUserCredit(res.user);
    });
  }, []);

  // Handle Product Detail Modal Open
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    
    // Initialize default variants
    const defaultVariants = {};
    if (product.variants) {
      Object.keys(product.variants).forEach((key) => {
        defaultVariants[key] = product.variants[key][0];
      });
    }
    setSelectedVariants(defaultVariants);

    // Calculate initial price & EMI plans
    updatePriceAndEmiPlans(product, defaultVariants);
    setIsDetailModalOpen(true);
  };

  // Update Computed Price and EMI Plans when variants change
  const updatePriceAndEmiPlans = (product, variants) => {
    let finalPrice = product.discountPrice || product.basePrice;
    
    // Add variant offset prices
    Object.values(variants).forEach((variantItem) => {
      if (variantItem && variantItem.priceOffset) {
        finalPrice += variantItem.priceOffset;
      }
    });

    setComputedPrice(finalPrice);
    
    // Generate EMI plans for final calculated price
    const plans = apiService.calculateEmiPlans(finalPrice, 0);
    setEmiPlans(plans);

    // Default select 6-Month No-Cost EMI Plan if available
    const defaultPlan = plans.find((p) => p.tenureMonths === 6) || plans[0];
    setSelectedEmiPlan(defaultPlan);
  };

  const selectVariant = (variantType, variantOption) => {
    const newVariants = {
      ...selectedVariants,
      [variantType]: variantOption,
    };
    setSelectedVariants(newVariants);
    updatePriceAndEmiPlans(selectedProduct, newVariants);
  };

  const closeProductDetail = () => {
    setIsDetailModalOpen(false);
    setSelectedProduct(null);
  };

  // Checkout Modal Flow
  const startCheckout = () => {
    if (!selectedEmiPlan || !selectedProduct) return;
    setCheckoutStep(1);
    setIsCheckoutModalOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutModalOpen(false);
    setCheckoutStep(1);
  };

  const submitLoanApplication = async () => {
    try {
      setIsSubmittingLoan(true);
      const payload = {
        product: selectedProduct,
        variants: selectedVariants,
        computedPrice,
        selectedPlan: selectedEmiPlan,
        userCredit,
      };

      const result = await apiService.submitEmiApplication(payload);
      setApprovedOrder(result);
      setCheckoutStep(3); // Step 3: Success Screen
    } catch (err) {
      console.error("Loan application failed", err);
    } finally {
      setIsSubmittingLoan(false);
    }
  };

  return (
    <MarketplaceContext.Provider
      value={{
        activeShopTab,
        setActiveShopTab,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        products,
        loading,
        error,
        userCredit,
        selectedProduct,
        selectedVariants,
        computedPrice,
        emiPlans,
        selectedEmiPlan,
        setSelectedEmiPlan,
        isDetailModalOpen,
        openProductDetail,
        closeProductDetail,
        selectVariant,
        isCheckoutModalOpen,
        startCheckout,
        closeCheckout,
        checkoutStep,
        setCheckoutStep,
        isSubmittingLoan,
        submitLoanApplication,
        approvedOrder,
        reloadProducts: loadProducts,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = () => useContext(MarketplaceContext);
