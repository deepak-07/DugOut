import { useCart } from "./context";
import { Link } from "react-router-dom";
import { categories } from "../src/db";
export const Filter = () => {
  const { state, dispatch } = useCart();
  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "CLEAR_FILTER" })}
      >
        Reset
      </button>
      <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sortBy"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={
              state.sortFilterStates.sortBy &&
              state.sortFilterStates.sortBy === "PRICE_HIGH_TO_LOW"
            }
          ></input>{" "}
          Price - High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={
              state.sortFilterStates.sortBy &&
              state.sortFilterStates.sortBy === "PRICE_LOW_TO_HIGH"
            }
          ></input>{" "}
          Price - Low to High
        </label>
      </fieldset>

      <fieldset style={{ marginTop: "1rem" }}>
        <legend> Filters </legend>
        <label>
          <input
            type="checkbox"
            checked={state.sortFilterStates.showInventoryAll}
            onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          />
          Include Out of Stock
        </label>

        <label>
          <input
            type="checkbox"
            checked={state.sortFilterStates.showFastDeliveryOnly}
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
          />
          Fast Delivery Only
        </label>
        {/* <div>
          {categories.map((item) => {
            return (
              <label>
                <input
                  type="checkbox"
                  // checked={state.sortFilterStates.showCategory}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_CATEGORY", payload: item })
                  }
                />
                {item}
              </label>
            );
          })}
        </div> */}
      </fieldset>
    </>
  );
};
