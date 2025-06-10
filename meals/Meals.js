// Meals.js
import React, { useState } from "react";
import "./Meals.css";

const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
  { id: "m2", name: "Schnitzel", description: "A german specialty!", price: 16.5 },
  { id: "m3", name: "Barbecue Burger", description: "American, raw, meaty", price: 12.99 },
  { id: "m4", name: "Green Bowl", description: "Healthy...and green...", price: 18.99 },
];

const MealItem = ({ meal, onAddToCart }) => {
  const [amount, setAmount] = useState(1);

  const addToCartHandler = () => {
    onAddToCart({ ...meal, amount });
  };

  return (
    <li className="meal-item">
      <div>
        <h3>{meal.name}</h3>
        <p className="description">{meal.description}</p>
        <p className="price">${meal.price.toFixed(2)}</p>
      </div>
      <div>
        <button onClick={addToCartHandler}>+ Add</button>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
      </div>
    </li>
  );
};

const Meals = ({ onAddToCart }) => {
  return (
    <section className="meals">
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </section>
  );
};

export default Meals;
