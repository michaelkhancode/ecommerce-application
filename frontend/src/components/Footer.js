import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">Copyright</Col>
        </Row>
      </Container>
    </footer>
  );
}
