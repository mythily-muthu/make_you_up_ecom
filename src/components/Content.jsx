import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import ProductsList from "../pages/ProductsList";
import Product from "../pages/Product";
import Users from "../pages/Users";
const Content = ({ showNavbarFooter }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/product/:productid" element={<Product />} />
      <Route path="/productlist" element={<ProductsList />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default Content;
