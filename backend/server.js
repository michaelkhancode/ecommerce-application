const express = require("express");
const app = express();
const products = require("./data/products");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send(`api is running on PORT ${process.env.PORT}`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  res.json(product);
});

app.listen(
  process.env.PORT,
  console.log(`server up on PORT ${process.env.PORT}`)
);
