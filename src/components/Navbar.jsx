import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopX</Link>
      <Link to="/cart" className="cart-link">Cart ({totalItems})</Link>
    </nav>
  );
};

export default Navbar;
