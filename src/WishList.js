import { useCart } from "./context";
import { Link } from "react-router-dom";

export default function WishList() {
  const { state, dispatch } = useCart();
  return (
    <>
      {/* <h1>WishList</h1> */}
      {state.itemsInWishList !== [] ? (
        state.itemsInWishList.map((product) => {
          return (
            <div style={{ border: "2px solid black", padding: "5px 5px" }}>
              <h4> {product.name}</h4>
              <img
                src={product.image}
                width="50%"
                height="auto"
                alt={product.name}
              />
              <br />
              {" Rs" + product.price}

              <br />
              {state.itemsInCart.some((item) => item.id === product.id) ? (
                "Already in Cart"
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "MOVE_TO_CART", payload: product })
                  }
                >
                  {/* {language[lang].addToCart} */}
                  Move to Cart
                </button>
              )}
            </div>
          );
        })
      ) : (
        <h2>Save your wishes here...</h2>
      )}
    </>
  );
}
