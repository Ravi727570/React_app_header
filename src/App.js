import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Summary from "./summary/Summary";
import Meals from "./meals/Meals";
import './cart/CartModal.css';
import CartModal from "./cart/CartModal";
//import from "./cart/CartContext";



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + item.amount } : i
        );
      }
      return [...prevItems, item];
    });
  };

  return (
    <div className="app-container">
      <Header onOpenCart={() => setIsCartOpen(true)} />
      <main className="content">
        <Summary />
        <Meals onAddToCart={addToCart} />
      </main>
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onCloseCart={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
