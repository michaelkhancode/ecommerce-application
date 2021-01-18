import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentScreen() {
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const { shippingAddress } = useSelector((state) => state.cart);

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="paypal or credit card"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

            {/* <Form.Check
              type="radio"
              label="stripe"
              id="stripe"
              name="paymentMethod"
              value="stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>
        <Button type="submit">Continue</Button>
      </Form>
    </FormContainer>
  );
}
