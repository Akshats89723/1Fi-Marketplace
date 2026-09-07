import { MOCK_PRODUCTS, USER_CREDIT_INFO } from "../data/mockProducts";

/**
 * Simulates a network delay for realistic API testing
 */
const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiService = {
  /**
   * Fetch products with search, category filter, and sorting
   */
  async getProducts({ category = "all", search = "", sortBy = "recommended" } = {}) {
    await delay(350);

    let result = [...MOCK_PRODUCTS];

    // Filter by Category
    if (category && category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // Filter by Search Query
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.discountPrice - a.discountPrice);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return {
      success: true,
      products: result,
      totalCount: result.length,
    };
  },

  /**
   * Fetch single product details
   */
  async getProductById(productId) {
    await delay(250);
    const product = MOCK_PRODUCTS.find((p) => p.id === productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return { success: true, product };
  },

  /**
   * Calculate EMI plans dynamically for any total amount & down payment
   */
  calculateEmiPlans(totalAmount, downPaymentAmount = 0) {
    const principal = Math.max(0, totalAmount - downPaymentAmount);
    
    // Standard tenures supported by 1Fi
    const tenures = [3, 6, 9, 12, 18, 24];

    return tenures.map((months) => {
      // 3, 6, 9, 12 months are No-Cost EMI (0% interest). 18 & 24 months are Low-Interest (12% p.a.)
      const isNoCost = months <= 12;
      const annualInterestRate = isNoCost ? 0 : 0.12;

      let monthlyEmi = 0;
      let totalInterest = 0;

      if (isNoCost) {
        monthlyEmi = Math.round(principal / months);
        totalInterest = 0;
      } else {
        const monthlyRate = annualInterestRate / 12;
        // EMI formula: [P x R x (1+R)^N]/[(1+R)^N-1]
        const emiFactor =
          (monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
        monthlyEmi = Math.round(principal * emiFactor);
        totalInterest = Math.round(monthlyEmi * months - principal);
      }

      // Processing fee waived for 1Fi Mutual Fund pledged users
      const processingFee = 0; 
      const mfCollateralPledgeRequired = Math.round(principal * 1.0); // 1:1 Mutual Fund pledge

      return {
        tenureMonths: months,
        monthlyEmi,
        downPaymentAmount,
        totalPrincipal: principal,
        totalInterest,
        processingFee,
        isNoCost,
        totalPayout: monthlyEmi * months + downPaymentAmount,
        mfCollateralPledgeRequired,
      };
    });
  },

  /**
   * Fetch user 1Fi Mutual Fund credit profile
   */
  async getUserCreditProfile() {
    await delay(200);
    return { success: true, user: USER_CREDIT_INFO };
  },

  /**
   * Submit loan / EMI plan application with simulated backend verification
   */
  async submitEmiApplication(applicationPayload) {
    await delay(1200); // simulate loan sanctioning & Mutual Fund auto-pledge lock

    const applicationRef = "1FI-" + Math.floor(100000 + Math.random() * 900000);
    return {
      success: true,
      applicationRef,
      status: "APPROVED_INSTANTLY",
      approvedAmount: applicationPayload.selectedPlan.totalPrincipal,
      monthlyEmi: applicationPayload.selectedPlan.monthlyEmi,
      tenureMonths: applicationPayload.selectedPlan.tenureMonths,
      pledgedCollateral: applicationPayload.selectedPlan.mfCollateralPledgeRequired,
      estimatedDelivery: "2-4 Business Days",
      timestamp: new Date().toISOString(),
    };
  },
};
