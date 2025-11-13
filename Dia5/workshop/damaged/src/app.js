import { OrderServiceLegacy } from "./legacy/orderService_legacy.js";

const svc = new OrderServiceLegacy();

const order = svc.createOrder({
  userEmail: "user@example.com",
  courseId: "NODE-101",
  basePrice: 100,
  coupon: { type: "PERCENT", value: 20 }
});

console.log("Order OK:", order);