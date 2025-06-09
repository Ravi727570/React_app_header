import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";
import CartContext from "./CartContext";

const Backdrop = ({ onClose }) => (
  <div className="backdrop" onClick={onClose}></div>
);

const ModalOverlay = ({ onClose }) => {
  const { cartItems, addItem, removeItem } = useContext(CartContext);

  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2);

  return (
    <div className="modal">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
              <div className="item-actions">
                <span className="item-quantity">x {item.amount}</span>
                <button className="minus-btn" onClick={() => removeItem(item.id)}>
                  -
                </button>
                <button className="plus-btn" onClick={() => addItem({ id: item.id, amount: 1 })}>
                  +
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </ul>
      <div className="cart-total">
        <h3>Total Amount</h3>
        <p>${totalAmount}</p>
      </div>
      <div className="cart-actions">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <button className="order-button">Order</button>
      </div>
    </div>
  );
};

const CartModal = ({ onCloseCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onCloseCart} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onCloseCart} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CartModal;