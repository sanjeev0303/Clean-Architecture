export interface IProductInteractor {
    createProduct(input: any): Promise<any>
    updateStock(id: number, stock: number): Promise <any>
    getProduct(limit: number, offset: number): Promise <any>
}
