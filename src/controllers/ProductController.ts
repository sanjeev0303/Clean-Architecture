import { NextFunction, Request, Response } from "express";
import { IProductInteractor } from "../interfaces/IProductIntractor";

export class ProductCotroller {

    private intractor: IProductInteractor

    constructor(intractor: IProductInteractor){
        this.intractor = intractor
    }

    async onCreateProduct(req: Request, res: Response, next: NextFunction) {
        try {

            const body = req.body;

            // validate logic

            const data = await this.intractor.createProduct(body)

            return res.status(200).json(data)


        } catch (error) {
            next(error)
        }
    }
    async onGetProducts(req: Request, res: Response, next: NextFunction) {
        try {

            const offset = parseInt(`req.query.offset`) || 0

            const limit = parseInt(`req.query.limit`) || 10

            const data = await this.intractor.getProduct(limit, offset)

            return res.status(200).json(data)

        } catch (error) {
            next(error)
        }
    }
    async onUpdateStock(req: Request, res: Response, next: NextFunction) {
        try {

            const id = parseInt(req.params.id)
            const stock = req.body.stock

            const data = await this.intractor.updateStock(id, stock)

            return res.status(200).json(data)

        } catch (error) {
            next(error)
        }
    }
}
