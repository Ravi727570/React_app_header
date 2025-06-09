import React from "react";
import "./App.css";
import Header from "./header/Header";
import Summary from "./summary/Summary";
import Meals from "./meals/Meals";

function App() {
  
  return (
      <div className="app-container">
        <Header/>
        <main className="content">
          <Summary />
          <Meals />
        </main>
      </div>
    
  );
}

export default App;
