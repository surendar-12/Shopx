import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-message">No items in cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.image} alt={item.title} className="item-image" />
                <div>
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-price">₹{item.price}</p>
                </div>
              </div>

              <div className="quantity-controls">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>

              <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <div className="checkout-area">
            <h2>Total: ₹{total}</h2>
            <button
              className="checkout-btn"
              onClick={() => {
                dispatch(clearCart());
                alert("✅ Checkout successful!");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
