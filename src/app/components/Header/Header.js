import React from "react";
import logo from "C:/Users/admin/Desktop/my-app/src/assets/images/logo.jpeg";
import cart from "C:/Users/admin/Desktop/my-app/src/assets/images/cart.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
            <img className="cart" src={cart} alt="" />
          </a>
          {/* <a className="search-input">
            <form action="#">
              <input type="text" placeholder="Type and Search" />
            </form>
          </a> */}
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Men">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Women">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
