import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.items.find(p => p.id === Number(id)));
  const dispatch = useDispatch();

  if (!product) return <p className="loading-msg">Loading product details...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="detail-image" />
      <div className="detail-info">
        <h1>{product.title}</h1>
        <p className="detail-price">₹{product.price}</p>
        <p>{product.description}</p>
        <button className="add-cart-btn" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
