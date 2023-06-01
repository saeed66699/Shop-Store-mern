import { useState } from "react";
import "./Navbarstyle.css";
import { Link, useNavigate } from "react-router-dom";

function Headers(props) {
  const navigate = useNavigate();
  const { count } = props;
  const [statee, setstatee] = useState(false);
  const ses = sessionStorage.getItem("userEmail");
  const handleclicked = () => {
    setstatee(!statee);
  };
  const logout = () => {
    sessionStorage.clear();
    navigate("/Signin");
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
          {/* <li>
            <Link class="nav-item Navbar-Link" to="/">
              <i class="fa fa-house"></i>
              Home
            </Link>
          </li> */}
          <li>
            <Link class="nav-item  Navbar-Link" to="/Products">
              <i class="fa fa-cart-flatbed-suitcase"></i>Products
            </Link>
          </li>
          <li>
            <Link class="nav-item  Navbar-Link" to="/Addproduct">
              <i class="fa fa-circle-info"></i>Add Products
            </Link>
          </li>
          {!ses ? (
            <li>
              <Link class="nav-item Navbar-Link" to="/signin">
                <i class="fa fa-arrow-right-to-bracket"></i>Signin
              </Link>
              {/* only single button beacause less menu option for new user */}
            </li>
          ) : (
            <li>
              <Link class="nav-item Navbar-Link" onClick={logout}>
                <i class="fa fa-arrow-right-to-bracket"></i>Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Headers;
