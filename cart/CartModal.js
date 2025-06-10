import React from "react";
import "./CartModal.css";

const CartModal = ({ onCloseCart }) => {
  const cartItems = [
    { id: "m1", name: "Sushi", price: 22.99, amount: 1 },
   
  ];

  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2);

  const productNames = cartItems.map((item) => item.name).join(", ");

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="cart-header">
          <span className="cart-product-name">{productNames}</span>
        </div>

        <div className="cart-total">
          <h3>Total Amount</h3>
          <p>{totalAmount}</p>
        </div>

        <div className="cart-actions">
          <button className="close-button" onClick={onCloseCart}>
            Close
          </button>
          <button className="order-button">Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
