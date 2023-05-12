import { useState } from "react";
import "./Navbarstyle.css";
import { Link } from "react-router-dom";

function Headers() {
  const [statee, setstatee] = useState(false);
  const handleclicked = () => {
    setstatee(!statee);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark Navbaritems">
        <Link class="nav-item Navbar-Link" to="/">
          <h3 className="logo">Shop Store</h3>
        </Link>
        <div className="menu-icon " onClick={handleclicked}>
          <i className={statee ? "fa fa-x" : "fa fa-bars"}></i>
        </div>

        <ul class={statee ? "nav-menu active" : "nav-menu "}>
          <li>
            <Link class="nav-item Navbar-Link" to="/">
              <i class="fa fa-house"></i>
              Home
            </Link>
          </li>
          <li>
            <Link class="nav-item  Navbar-Link" to="/Products">
              <i class="fa fa-cart-flatbed-suitcase"></i>Products
            </Link>
          </li>
          <li>
            <Link class="nav-item  Navbar-Link" to="/">
              <i class="fa fa-circle-info"></i>About Us
            </Link>
          </li>
          <li>
            <Link class="nav-item  Navbar-Link" to="/">
              <i class="fa fa-cart-shopping"></i>Cart
            </Link>
          </li>
          <li>
            <Link class="nav-item Navbar-Link" to="/signup">
              <i class="fa fa-arrow-right-to-bracket"></i>Signin/Signup
            </Link>
            {/* only single button beacause less menu option for new user */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Headers;
