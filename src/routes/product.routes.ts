import express from "express";
import { ProductCotroller } from "../controllers/ProductController";

const controller = new ProductCotroller()

const router = express.Router();

router.post("/products", controller.onCreateProduct);

router.get("/products", controller.onGetProducts);

router.patch("/products/:id", controller.onUpdateStock);

export default router;
