import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`api is running on PORT ${process.env.PORT}`);
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`server up on PORT ${process.env.PORT}`)
);
