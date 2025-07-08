import { IMailer } from "../interfaces/Imailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";
import { IProductInteractor } from "../interfaces/IProductIntractor";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;
  private mailer: IMailer;
  private broker: IMessageBroker

  constructor(repository: IProductRepository, mailer: IMailer, broker: IMessageBroker) {
    this.repository = repository;
    (this.mailer = mailer),
    (this.broker = broker)
  }

  async createProduct(input: any): Promise<any> {
    const data = await this.repository.create(input)
    // do some checks
    await this.mailer.SendEmail("someone@someone.com", data)
    return data
  }
  async updateStock(id: number, stock: number): Promise<any> {
    const data = await this.repository.update(id, stock)
    // do some checks
    await this.broker.NotifyToPromitionService(data)
    return data
  }
  async getProduct(limit: number, offset: number): Promise<any> {
    return this.repository.find(limit, offset)
  }
}
