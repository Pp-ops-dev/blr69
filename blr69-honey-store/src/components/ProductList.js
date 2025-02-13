import React from "react";
import "../styles/home.css";
import wildForestHoney from '../images/wildForestHoney.jpeg'
import multifloraHoney from '../images/multifloraHoney.jpeg'
import organicHoney  from '../images/organicHoney.jpeg'
import flowerHoney from '../images/flowerHoney.jpeg'


const ProductList = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <img src={wildForestHoney} alt="Wild Forest Honey" />
        <h2>Wild Forest Honey</h2>
        <p>Price: ₹500 / 500g | ₹900 / 1kg</p>
      </div>

      <div className="product-card">
        <img src={multifloraHoney} alt="Multiflora Honey" />
        <h2>Multiflora Honey</h2>
        <p>price: ₹450 / 500g | ₹850 / 1kg</p>
      </div>

      <div className="product-card">
        <img src={organicHoney} alt="Pure Organic Honey" />
        <h2>Pure Organic Honey</h2>
        <p>price: ₹600 / 500g | ₹1100 / 1kg</p>
      </div>

      <div className="product-card">
        <img src={flowerHoney} alt="Flower Honey" />
        <h2>Flower Honey</h2>
        <p>price: ₹550 / 500g | ₹1000 / 1kg</p>
      </div>

      <div className="product-card">
        <img src={multifloraHoney} alt="Multiflora Honey" />
        <h2>Multiflora Honey</h2>
        <p>price: ₹450 / 500g | ₹850 / 1kg</p>
      </div>

      <div className="product-card">
        <img src={wildForestHoney} alt="Wild Forest Honey" />
        <h2>Wild Forest Honey</h2>
        <p>Price: ₹500 / 500g | ₹900 / 1kg</p>
      </div>
    </div>
  );
};

export default ProductList;
