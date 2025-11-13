import { fileDb } from "../infra/fileDb.js";

export class OrderRepository {
  save(order) { return fileDb.insert(order); }
  list() { return fileDb.list(); }
}