import { useState } from "react";
import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";
import logo from "../assets/TBC.png";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <nav className="navbar">
      <div className="container navbar-flex">
        <a href="#home" className="logo">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="main-menu">
          <ul className="main-menu-list">
            <PageLinks />
          </ul>
          <ul className="main-menu-icons">
            <SocialLinks />
          </ul>
        </div>
        <div className="mobile-menu">
          <div className="mobile-menu-toggle" onClick={handleToggle}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="mobile-menu-items">
            <ul className={`mobile-menu-list ${isToggled ? "active" : ""}`}>
              <PageLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
