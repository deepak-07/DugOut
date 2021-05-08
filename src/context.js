import { createContext, useState, useReducer } from "react";
import { useContext } from "react";
import { productsDB, itemsInCart, itemsInWishList } from "../src/db";
import { Link } from "react-router-dom";
import cartHandler from "./reducer";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [itemsInCart, setItemsInCart] = useState([]);
  const [state, dispatch] = useReducer(cartHandler, {
    productsDB,
    itemsInCart,
    itemsInWishList,
    sortFilterStates: {
      showInventoryAll: true,
      showFastDeliveryOnly: false,
      sortBy: null,
      showCategory: ""
    }
  });

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
