import React, { useState } from "react";
import "./Meals.css";

const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
  { id: "m2", name: "Schnitzel", description: "A german specialty!", price: 16.5 },
  { id: "m3", name: "Barbecue Burger", description: "American, raw, meaty", price: 12.99 },
  { id: "m4", name: "Green Bowl", description: "Healthy...and green...", price: 18.99 },
  { id: "m5", name: "Pizza", description: "Cheesy and delightful", price: 14.99 },
  { id: "m6", name: "Pasta", description: "Classic Italian pasta", price: 13.99 },
];

const MealItem = ({ meal }) => {
  const [amount, setAmount] = useState(1);

  return (
    <li className="meal-item">
      <div>
        <h3>{meal.name}</h3>
        <p className="description">{meal.description}</p>
        <p className="price">${meal.price.toFixed(2)}</p>
      </div>
      <div className="meal-actions">
        <div className="amount-container">
          <label htmlFor={`amount-${meal.id}`} className="bold-label">Amount</label>
          <input
            id={`amount-${meal.id}`}
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="amount-input small-input"
          />
        </div>
        <button className="bold-button wider-button">
          + Add
        </button>
      </div>
    </li>
  );
};

const Meals = () => {
  return (
    <section className="meals">
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
};

export default Meals;
