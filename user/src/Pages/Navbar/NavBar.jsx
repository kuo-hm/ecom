import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        EStore <i className="fas fa-store"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}

                <i class={item.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
