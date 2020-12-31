import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>List of products</h1>
      <Row>
        {products.map((product, i) => {
          return (
            <Col sm={12} md={6} lg={4}>
              <Product key={product.id} product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
