import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";
const router = express.Router();

// description: fetch all products
// route GET -> /api/products
// access anybody
router.route("/").get(getProducts);

// description: fetch single product by id
// route GET -> /api/products/:id
// access anybody
router.route("/:id").get(getProductById);

export default router;
