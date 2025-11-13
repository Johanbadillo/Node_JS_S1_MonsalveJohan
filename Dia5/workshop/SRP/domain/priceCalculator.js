export class PriceCalculator {
  compute(basePrice, coupon) {
    if (!coupon) return basePrice;
    if (coupon.type === "PERCENT") return basePrice - basePrice * (coupon.value / 100);
    if (coupon.type === "FIXED")   return Math.max(0, basePrice - coupon.value);
    if (coupon.type === "NEWYEAR") return basePrice * 0.75;
    return basePrice; // desconocido
  }
}