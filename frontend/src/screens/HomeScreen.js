import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";

export default function HomeScreen() {
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
