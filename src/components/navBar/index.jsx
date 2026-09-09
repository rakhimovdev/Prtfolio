import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon((isOpen) => !isOpen);
  };

  const handleMenuItemClick = () => {
    setToggleIcon(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          id="main-navigation"
          className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleMenuItemClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nav-icon"
          onClick={handleToggleIcon}
          aria-label={toggleIcon ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={toggleIcon}
          aria-controls="main-navigation"
        >
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
