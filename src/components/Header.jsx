import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Create this file for styling

function Header() {
  return (
    <header className="header">
      <h1>My Shopping Cart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;
