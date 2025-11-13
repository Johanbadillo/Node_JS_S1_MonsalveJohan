import { randomUUID } from "node:crypto";

const memory = { orders: [] };

export const fileDb = {
  insert(order) {
    const withId = { ...order, id: randomUUID() };
    memory.orders.push(withId);
    return withId;
  },
  list() {
    return [...memory.orders];
  }
};