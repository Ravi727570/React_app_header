import React from "react";
import "./CartModal.css";

const CartModal = ({ cartItems, onCloseCart, onAddItem, onRemoveItem }) => {
  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2);

  return (
    <div className="cart-modal">
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div >
              <span>{item.name}</span>
              <span className="icon"> x {item.amount}</span>
            </div>
            <div>
              <span className="clr">${(item.price * item.amount).toFixed(2)}</span>
              <button className="icon-btn" onClick={() => onRemoveItem(item.id)}>−</button>
              <button className="icon-btn" onClick={() => onAddItem(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className="cart-actions">
        <button onClick={onCloseCart}>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default CartModal;
