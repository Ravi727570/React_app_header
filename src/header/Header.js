import React from "react";
import "./Header.css";
//import CartContext from "./cart/CartContext"; 

const Header = () => {

  return (
    <>
    <header className="header">
      <h1 className="title">ReactMeals</h1>
      <button className="cart-button" >
        🛒 Your Cart <span className="cart-badge"></span>
      </button>
    </header>
    <div className="main-image">
      <img src="/food.jpg" alt="Delicious food spread" />
    </div>
    </>
  );
};

export default Header;