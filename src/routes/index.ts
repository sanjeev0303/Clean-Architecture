import express from "express";
import {
  CreateProduct,
  GetProducts,
  UpdateProductStock,
} from "../controllers/xproductController";

const router = express.Router();

router.post("/products", CreateProduct);

router.get("/products", GetProducts);

router.patch("/products/:id", UpdateProductStock);

export default router;
