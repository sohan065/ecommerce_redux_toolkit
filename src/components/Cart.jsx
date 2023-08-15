import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/product/cartSlice";
import { Alert } from "react-bootstrap";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  if (cartProducts.length == 0) {
    return (
      <Alert key="danger" variant="danger">
        Cart Is Empty
      </Alert>
    );
  }
  const card = cartProducts.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center mt-2">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>BDT:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove From Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{card}</div>;
}
