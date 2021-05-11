import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetail } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function ProductScreen() {
  const param = useParams();
  const history = useHistory();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    dispatch(listProductDetail(param.id));
  }, []);

  const addToCartHandler = () => {
    history.push(`/cart/${param.id}?qty=${qty}`);
  };

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Price: ${product.price}</h2>
              </ListGroup.Item>
              <ListGroup.Item> {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Price:</Col>
                    <Col md={6}>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Status:</Col>
                    <Col md={6}>
                      <strong>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col sm={4}>Qty</Col>
                      <Col sm={8}>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => {
                            console.log(e.target.value);
                            setQty(e.target.value);
                          }}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Row>
                    <Col sm={12}>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock == 0}
                      >
                        Add to Cart
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
