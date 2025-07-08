import { Product } from "../entities/product.entities";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
  create(data: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  update(id: number, stock: number): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  find(limit: number, offset: number): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
}
