import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getAllProduct } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";
import Alert from "react-bootstrap/Alert";
export default function Product() {
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };
  if (status === StatusCode.LOADING) {
    return <p>Loading........</p>;
  }
  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something Went Wrong
      </Alert>
    );
  }
  const card = data.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{card}</div>;
}
