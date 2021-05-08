import { useCart } from "./context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function WishList() {
  const { state, dispatch } = useCart();
  return (
    <>
      {/* <h1>WishList</h1> */}
      {state.itemsInWishList.length !== 0 ? (
        state.itemsInWishList.map((product) => {
          return (
            <div
              className="card"
              style={{ border: "2px solid black", padding: "5px 5px" }}
            >
              <div className="card-badge cb-diagonal">
                <FontAwesomeIcon
                  className="fontAwesome"
                  icon="times"
                  // color="#e09db9"
                  cursor="pointer"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
                  }
                />
              </div>
              <div className="card-body">
                <img
                  src={product.image}
                  width="50%"
                  height="auto"
                  alt={product.name}
                />

                <div class="card-title">
                  <h4> {product.name}</h4>
                  <br />
                </div>
                {" Rs" + product.price}

                {state.itemsInCart.some((item) => item.id === product.id) ? (
                  " Already in Cart"
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch({ type: "MOVE_TO_CART", payload: product })
                    }
                  >
                    {/* {language[lang].addToCart} */}
                    Move to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <h2>Save your wishes here...</h2>
      )}
    </>
  );
}
