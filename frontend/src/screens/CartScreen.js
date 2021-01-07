import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartActions";

export default function CartScreen() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const productId = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const proceedToHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col sm={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length == 0 ? (
          <Message>
            Cart Is Empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => {
              return (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col sm={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col sm={3}>
                      <Link to={"/product/" + item.product}>{item.name}</Link>
                    </Col>

                    <Col md={2}>{item.price * item.qty}</Col>
                    <Col sm={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col
                      sm={2}
                      type="button"
                      variant="light"
                      onClick={(e) => dispatch(removeFromCart(item.product))}
                    >
                      <i className="fas fa-trash"></i>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col sm={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>
                (
                {cartItems.reduce((accum, item) => {
                  return accum + Number(item.qty);
                }, 0)}
                ) Items
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              SubTotal $
              {cartItems.reduce((accum, item) => {
                return accum + Number(item.qty) * Number(item.price);
              }, 0)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                onClick={proceedToHandler}
                className="btn-block"
                disabled={cartItems.length == 0}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
