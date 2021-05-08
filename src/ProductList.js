import { useLang } from "./localiseContext";
import { useCart } from "./context";
import { useTheme } from "./themeContext";
import { Filter } from "./Filter";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./ProductList.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTimes,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
library.add(faHeart, faTimes, faShoppingCart);

export default function ProductListing() {
  const { theme } = useTheme();
  const {
    state: {
      productsDB,
      itemsInCart,
      itemsInWishList,
      sortFilterStates: { showInventoryAll, showFastDeliveryOnly, sortBy }
    },
    dispatch
  } = useCart();

  const { language, lang } = useLang();

  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return [...productList].sort((a, b) => b.price - a.price);
    } else if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return [...productList].sort((a, b) => a.price - b.price);
    } else return productList;
  }
  function getFilteredData(
    productList,
    showFastDeliveryOnly,
    showInventoryAll
  ) {
    return productList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }
  // function getSelectedCategoryData(productList, category) {
  //   return category
  //     ? productList.filter((item) => {
  //         return item.category === category;
  //       })
  //     : productList;
  // }

  const sortedData = getSortedData(productsDB, sortBy);
  // const categoriedData = getSelectedCategoryData(
  //   sortedData,
  //   state.sortFilterStates.showCategory
  // );
  const filteredData = getFilteredData(
    sortedData,
    showFastDeliveryOnly,
    showInventoryAll
  );

  return (
    <>
      <Filter />
      <div className="product_list">
        {/* <h2>{language[lang].product}</h2> */}
        {filteredData.map((product) => (
          <div>
            <div key={product.id} class="card">
              <div class="card-badge cb-diagonal"> Sale</div>
              <div class="card-body">
                <img src={product.image} alt={product.name} />
                <div class="card-title">
                  <h2> {product.name}</h2>
                </div>
                <p>{product.category}</p>
                {product.inStock && <div> In Stock </div>}
                {!product.inStock && <div> Out of Stock </div>}
                {product.fastDelivery ? (
                  <div> Fast Delivery </div>
                ) : (
                  <div> 7 days minimum </div>
                )}
                <span className="price">Price:Rs {product.price}</span>

                {/* {language[lang].addToCart} */}
                {itemsInCart.some((item) => item.id === product.id) ? (
                  <Link to="/cart">
                    <button className="btn btn-primary ">Go To Cart</button>
                  </Link>
                ) : (
                  <button
                    disabled={!product.inStock}
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: product })
                    }
                  >
                    {!product.inStock ? "Out Of Stock" : "Add to Cart"}
                  </button>
                )}
                {itemsInWishList.some((item) => item.id === product.id) ? (
                  <FontAwesomeIcon
                    className="fontAwesome"
                    icon="heart"
                    color="rgb(41, 62, 64)"
                    cursor="pointer"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product
                      })
                    }
                  />
                ) : (
                  <FontAwesomeIcon
                    className="fontAwesome"
                    icon="heart"
                    color="rgb(84, 101, 101)"
                    cursor="pointer"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_WISHLIST", payload: product })
                    }
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
