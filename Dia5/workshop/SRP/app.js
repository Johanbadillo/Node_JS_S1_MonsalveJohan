import { OrderService } from "./domain/orderService.js";
import { OrderValidator } from "./domain/orderValidator.js";
import { PriceCalculator } from "./domain/priceCalculator.js";
import { OrderRepository } from "./data/orderRepository.js";
import { Notifier } from "./app/notifier.js";

const service = new OrderService({
    validator: new OrderValidator(),
    calc: new PriceCalculator(),
    repo: new OrderRepository(),
    notifier: new Notifier()
});

const order = service.createOrder({
    userEmail: 'user@example.com',
    courseId: 'NODE-101',
    basePrice: 100,
    coupon: { type: "PERCENT", value: 20 }
});

console.log(order);
