import { useState } from "react";
import logo from "../logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  // const handleLoginClick = () => {
  //   setBtnName((prevName) => (prevName === "Login" ? "Logout" : "Login"));
  // };

  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="nav-Items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
