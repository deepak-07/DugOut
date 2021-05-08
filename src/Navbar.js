import { NavLink } from "react-router-dom";
import CartHeader from "./CartHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div class="nav-bar center-nav">
      <div class="nav-pages">
        <li>
          <NavLink end activeClassName="nav-active" to="/">
            DugOut
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/product-list">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/wishlist">
            <FontAwesomeIcon
              className="fontAwesome"
              icon="heart"
              color="white"
              cursor="pointer"
            />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/cart">
            <FontAwesomeIcon
              className="fontAwesome"
              icon="shopping-cart"
              color="white"
              cursor="pointer"
            />
            <CartHeader />
          </NavLink>
        </li>
      </div>
    </div>
  );
}
