import express from "express";
import { ProductCotroller } from "../controllers/ProductController";
import { ProductRepository } from "../repositories/ProductRepository";
import { ProductInteractor } from "../interactors/productInteractor";
import { Mailer } from "../ExternalLibraries/mailer";
import { MessageBroker } from "../ExternalLibraries/messageBroker";

const repository = new ProductRepository();
const mailer = new Mailer()
const broker = new MessageBroker()

const interactor = new ProductInteractor(repository, mailer, broker);

const controller = new ProductCotroller(interactor);

const router = express.Router();

router.post("/products", controller.onCreateProduct.bind(controller));

router.get("/products", controller.onGetProducts.bind(controller));

router.patch("/products/:id", controller.onUpdateStock.bind(controller));

export default router;
