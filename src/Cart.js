import { useLang } from "./localiseContext";
import { useCart } from "./context";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { itemsInCart } from "../src/db";

export default function Cart() {
  const { state, dispatch } = useCart();

  return (
    <>
      <br />
      {/* <h2> {language[lang].cart}</h2> */}
      {state.itemsInCart.length !== 0 ? (
        <div className="cart_total">
          <div class="card">
            <div class="card-title">
              <h2>Price Details</h2>
              Sub Total({state.itemsInCart.length}): Rs{" "}
              {state.itemsInCart.reduce((acc, value) => {
                acc += value.price * value.quantity;
                return acc;
              }, 0)}
              <div class="card-body">
                <button className="btn btn-primary">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {state.itemsInCart.length !== 0 ? (
        state.itemsInCart.map((product) => {
          return (
            <div>
              <div key={product.id} class="card">
                <div className="card-badge cb-diagonal">
                  <FontAwesomeIcon
                    className="fontAwesome"
                    icon="times"
                    // color="#e09db9"
                    cursor="pointer"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: product })
                    }
                  />
                </div>
                <div class="card-body">
                  <img src={product.image} alt={product.name} />
                  <div class="card-title">
                    <h2> {product.name}</h2>
                  </div>
                  <p>{product.category}</p>
                  <span className="price">Price:Rs {product.price}</span>

                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: product })
                    }
                  >
                    +
                  </button>
                  {product.quantity}
                  {product.quantity > 1 ? (
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch({ type: "DECREMENT", payload: product })
                      }
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: product })
                      }
                    >
                      -
                    </button>
                  )}
                  <br />
                  {state.itemsInWishList.some(
                    (item) => item.id === product.id
                  ) ? (
                    <button
                      className="btn btn-secondary"
                      // onClick={() =>
                      //   dispatch({ type: "MOVE_TO_WISHLIST", payload: product })
                      // }
                    >
                      Already Wishlisted
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch({ type: "MOVE_TO_WISHLIST", payload: product })
                      }
                    >
                      Move to WishList
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Cart is empty.. :(</h2>
      )}
    </>
  );
}
