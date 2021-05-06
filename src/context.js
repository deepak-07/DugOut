import { createContext, useState, useReducer } from "react";
import { useContext } from "react";
import { productsDB, itemsInCart, itemsInWishList } from "../src/backend/db";
import { Link } from "react-router-dom";
import cartHandler from "./reducer";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [itemsInCart, setItemsInCart] = useState([]);
  const [state, dispatch] = useReducer(cartHandler, {
    productsDB: [],
    itemsInCart: [],
    itemsInWishList: [],
    sortFilterStates: {
      showInventoryAll: true,
      showFastDeliveryOnly: false,
      sortBy: null,
      showCategory: ""
    }
  });

  async function fetchAndAddToList({ url, dispatchType, list }) {
    try {
      const { data, status } = await axios.get(url);

      if (status === 200) {
        dispatch({ type: dispatchType, payload: data[list] });
      }
    } catch (error) {
      // alert(error);
    }
  }
  async function removeFromListAndServer({
    url,
    item,
    dispatchType,
    toastMessage
  }) {
    try {
      const { status } = await axios.delete(`${url}/${item.id}`);
      if (status === 204) {
        dispatch({ type: dispatchType, payload: item });
      }
    } catch (error) {
      // alert(error);
    }
  }

  async function addToListAndServer({ url, list, postItem, dispatchType }) {
    try {
      const { data, status } = await axios.post(`${url}`, postItem);

      if (status === 201) {
        dispatch({ type: dispatchType, payload: data[list] });
      }
    } catch (error) {
      // alert(error);
    }
  }

  async function updateListAndServer({ url, postObject, dispatchType, item }) {
    try {
      const { status } = await axios.put(`${url}/${item.id}`, postObject);
      if (status === 200) {
        dispatch({
          type: dispatchType,
          payload: item
        });
      }
    } catch (error) {
      // alert(error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        fetchAndAddToList,
        removeFromListAndServer,
        addToListAndServer,
        updateListAndServer
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
