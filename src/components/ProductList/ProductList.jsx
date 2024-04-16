import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ProductList = ({ products }) => {
  // İlk ürünü almak için products dizisinden sadece ilk elemanı kullanıyoruz

  return (
    <>
      {products.map((product, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={product.image} />
       
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Name: {product.name}</ListGroup.Item>
            <ListGroup.Item>Price : {product.price}</ListGroup.Item>
            <ListGroup.Item>Quantity : {product.quantity}</ListGroup.Item>
            <ListGroup.Item>Total Price : {product.price * product.quantity}</ListGroup.Item>
          </ListGroup>
        
        </Card>
      ))}
    </>
  );
};

export default ProductList;
