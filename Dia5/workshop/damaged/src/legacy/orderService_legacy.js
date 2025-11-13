import { fileDb } from "../infra/fileDb.js";
import { emailClient } from "../infra/emailClient.js";

export class OrderServiceLegacy {
  createOrder({ userEmail, courseId, basePrice, coupon }) {
    // Validación y cálculo mezclados
    if (!userEmail || !userEmail.includes("@")) {
      throw new Error("Email inválido");
    }
    if (!courseId) {
      throw new Error("courseId requerido");
    }
    let finalPrice = basePrice;
    if (coupon) {
      // lógica rígida y difícil de extender
      if (coupon.type === "PERCENT") {
        finalPrice = basePrice - basePrice * (coupon.value / 100);
      } else if (coupon.type === "FIXED") {
        finalPrice = Math.max(0, basePrice - coupon.value);
      } else if (coupon.type === "NEWYEAR") {
        finalPrice = basePrice * 0.75;
      } else {
        // ¿y nuevos tipos?
      }
    }
    const order = fileDb.insert({
      userEmail,
      courseId,
      basePrice,
      finalPrice,
      createdAt: new Date().toISOString()
    });
    // Notificación mezclada
    emailClient.send(
      userEmail,
      "Tu compra",
      `Gracias por comprar ${courseId}. Pagaste ${finalPrice}`
    );
    // logging directo
    console.log("Order creada:", order.id);
    return order;
  }
}