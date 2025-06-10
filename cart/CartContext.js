import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, amount: item.amount + action.payload.amount }
            : item
        );
        return { items: updatedItems };
      } else {
        return { items: [...state.items, action.payload] };
      }
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0); // Remove item if amount reaches 0
      return { items: updatedItems };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider
      value={{ cartItems: cartState.items, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;