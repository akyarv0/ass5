import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductsAdd from "./components/Products/ProductsAdd";
import MyNavbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";

import ProductList from "./components/ProductList/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(
      "https://66140aa62fc47b4cf27b7326.mockapi.io/Tecno-products"
    );
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      <ProductsAdd />
      <ProductList products={products} />
      <Home />
    </div>
  );
}

export default App;
