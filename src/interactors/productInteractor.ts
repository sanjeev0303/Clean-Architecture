import { IProductInteractor } from "../interfaces/IProductIntractor";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this.repository = repository;
  }

  async createProduct(input: any): Promise<any> {
    return this.repository.create(input)
  }
  async updateStock(id: number, stock: number): Promise<any> {
    return this.repository.update(id, stock)
  }
  async getProduct(limit: number, offset: number): Promise<any> {
    return this.repository.find(limit, offset)
  }
}
