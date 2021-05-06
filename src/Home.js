import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_body">
      <div>
        <img
          class="image_slide"
          src="https://shop.teamsg.in/wp-content/uploads/2020/02/SHOE-2-01.jpg"
          alt=""
        />
        <img
          class="image_slide"
          src="https://www.sstoncricket.com/media/wysiwyg/m-banner_slider-01_1.jpg"
          alt=""
        />
      </div>
      <p className="welcome_text">
        Welcome to the one place for all your Cricket needs
      </p>
      <Link exact to="/product-list">
        <button className="btn btn-primary">Shop Now</button>
      </Link>
    </div>
  );
}
