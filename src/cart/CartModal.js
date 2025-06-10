// CartModal.js
import React from "react";
import "./CartModal.css";

const CartModal = ({ cartItems, onCloseCart }) => {
  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Your Cart</h2>
        <ul className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <div className="item-details">
                  <span className="item-name small-text">{item.name}</span>
                  <span className="item-qty">x {item.amount}</span>
                </div>
              </li>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </ul>
        <div className="cart-total">
          <h3>Total Amount</h3>
          <p>{totalAmount}</p>
        </div>
        <div className="cart-actions">
          <button className="close-button" onClick={onCloseCart}>Close</button>
          <button className="order-button">Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
