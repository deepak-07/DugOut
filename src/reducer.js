// import { productsDB, itemsInCart, itemsInWishList } from "./db";

export default function cartHandler(state, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, productsDB: action.payload };

    case "INCREMENT":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    case "DECREMENT":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : state.itemsInCart.filter(
                  (prev) => prev.id !== action.payload.id
                )
            : item
        )
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (prev) => prev.id !== action.payload.id
        )
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        itemsInWishList: [...state.itemsInWishList, { ...action.payload }]
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemsInWishList: state.itemsInWishList.filter(
          (prev) => prev.id !== action.payload.id
        )
      };
    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, { ...action.payload }]
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        itemsInWishList: [...state.itemsInWishList, { ...action.payload }],
        itemsInCart: state.itemsInCart.filter(
          (prev) => prev.id !== action.payload.id
        )
      };
    case "MOVE_TO_CART":
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, { ...action.payload }],
        itemsInWishList: state.itemsInWishList.filter(
          (prev) => prev.id !== action.payload.id
        )
      };
    case "TOGGLE_INVENTORY":
      return (state = {
        ...state,
        sortFilterStates: {
          ...state.sortFilterStates,
          showInventoryAll: !state.sortFilterStates.showInventoryAll
        }
      });

    case "TOGGLE_DELIVERY":
      return (state = {
        ...state,
        sortFilterStates: {
          ...state.sortFilterStates,
          showFastDeliveryOnly: !state.sortFilterStates.showFastDeliveryOnly
        }
      });
    case "SORT":
      return {
        ...state,
        sortFilterStates: { ...state.sortFilterStates, sortBy: action.payload }
      };
    case "TOGGLE_CATEGORY":
      return (state = {
        ...state,
        sortFilterStates: {
          ...state.sortFilterStates,
          showCategory: action.payload
        }
      });
    case "CLEAR_FILTER":
      return {
        ...state,
        sortFilterStates: {
          showInventoryAll: true,
          showFastDeliveryOnly: false,
          sortBy: null
        }
      };
    default:
      console.log("Not working");
  }
}
