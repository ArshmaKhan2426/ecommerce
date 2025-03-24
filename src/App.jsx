import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contact from "./pages/contact";
import About from "./pages/About";
import PlaceOrders from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productid" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/place-order" element={<PlaceOrders />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
