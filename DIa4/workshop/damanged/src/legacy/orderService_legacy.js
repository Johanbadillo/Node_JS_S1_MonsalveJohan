import { fileDb } from "../infra/fileDb.js";
import { emailClient } from "../infra/emailClient.js";

//  Open/closed Porque no esta abierta para su crecimiento de manera vertical y estamos obligados a modificar 
// esta parte si llega a en el futuro terner otras maera o nuevos tpos de cupones especificos ejemplos como cupones de app etc

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
    /*Estamos recibiendo diferentes tipos de notificaciones a la vez aqui se deberia 
    poner una manera o dependencia para poder tener una manera de escoger la manera de tener la notificacion */
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