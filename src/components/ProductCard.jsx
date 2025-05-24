import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">₹{product.price}</p>
    </Link>
  </div>
);

export default ProductCard;
