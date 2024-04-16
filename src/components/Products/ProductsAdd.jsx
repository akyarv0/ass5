import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import axios from "axios";

function ProductsAdd({ products, setProducts, getProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const handleAddName = (e) => {
    setName(e.target.value);
  };
  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };
  const handleAddQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleAddImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engeller

    try {
      const res = await axios.post(
        "https://66140aa62fc47b4cf27b7326.mockapi.io/Tecno-products",
        {
          name: name,
          price: price,
          quantity: quantity,
          image: image,
        }
      );
      const newProduct = res.data; // Yeni eklenen ürünün bilgilerini al
      setProducts([...products, newProduct]); // Yeni ürünü listeye ekleyerek state'i güncelle
      console.log("Product added:", newProduct);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Form className="w-50 m-auto mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Name"
          required
          value={name}
          onChange={handleAddName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Price"
          value={price}
          required
          onChange={handleAddPrice}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Quantity"
          required
          value={quantity}
          onChange={handleAddQuantity}
        />
      </Form.Group>

      <Form.Label>Product Image</Form.Label>
      <InputGroup className="mb-3" value={image} onChange={handleAddImage}>
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <Button variant="success" type="submit">
        Add to Cart
      </Button>
    </Form>
  );
}

export default ProductsAdd;
