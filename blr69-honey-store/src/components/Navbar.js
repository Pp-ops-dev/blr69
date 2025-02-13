import React from "react";
import "../styles/home.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="logo">BLR69 Honey Store</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
      <button id="logoutBtn">Logout</button>
    </header>
  );
};

export default Navbar;
