import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAdress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingScreen() {
  const history = useHistory();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postal, setPostal] = useState();
  const [country, setCountry] = useState();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAdress({ address, city, postal, country }));
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>city</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postal">
          <Form.Label>postal Code</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter postal code"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Proceed to Payment</Button>
      </Form>
    </FormContainer>
  );
}
