import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ShopSphere</div>
      <nav>
        <ul className="nav-items">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
