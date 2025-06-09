import React from "react";
import "./App.css";
import Header from "./header/Header";
import Summary from "./summary/Summary";

//import CartModal from "./cart/CartModal";
//import CartContext, { CartProvider } from "./cart/CartContext";

function App() {
  
  return (
      <div className="app-container">
        <Header/>
        <Summary/>
      </div>
    
  );
}

export default App;
