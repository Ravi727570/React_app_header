import React from "react";
import "./App.css";
import Header from "./header/Header";
import Summary from "./summary/Summary";
import Meals from "./meals/Meals";
import CartModal from "./cart/CartModal";

function App() {
  
  return (
      <div className="app-container">
        <Header/>
        <main className="content">
          <Summary />
          <Meals />
          <CartModal/>
        </main>
      </div>
    
  );
}

export default App;
