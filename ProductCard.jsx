import React from "react";
import "./ProductCard.css";

const ProductCard = ({ id, name, price, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
