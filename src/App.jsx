import "./styles.css";
import { useLang } from "./localiseContext";
import { useCart } from "./context";
import { useTheme } from "./themeContext";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductListing from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import WishList from "./WishList";
import { Routes, Route, NavLink } from "react-router-dom";
import React from "react";

export default function App() {
  const { theme, setTheme } = useTheme();
  const { language, lang, setLang } = useLang();
  const [route, setRoute] = useState("home");
  const { state, fetchAndAddToList } = useCart();

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme ? "white" : "black",
        color: theme ? "black" : "white"
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductListing />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
