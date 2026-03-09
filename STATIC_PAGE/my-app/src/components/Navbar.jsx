import React from "react";
import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";
import logo from "../assets/TBC.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-flex">
        <img src={logo} alt="logo" className="logo" />
        <div className="main-menu">
          <ul className="main-menu-list">
            <PageLinks />
          </ul>
          <ul className="main-menu-icons">
            <SocialLinks />
          </ul>
        </div>
        <div className="mobile-menu">
          <div className="mobile-menu-toggle">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="mobile-menu-items">
            <ul className="mobile-menu-list">
              <PageLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
