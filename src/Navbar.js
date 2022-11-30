import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalState } from "./context";
const Navbar = () => {
  const { setIsSidebarOpen, setIsSubmenuOpen, openSubmenu } = useGlobalState();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      setIsSubmenuOpen(false);
    }
  };
  return (
    <nav className="nav" onMouseOver={closeSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button
            className="btn toggle-btn"
            onClick={() => {
              setIsSidebarOpen(true);
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li className="link-btn" onMouseOver={displaySubmenu}>
            products
          </li>
          <li className="link-btn" onMouseOver={displaySubmenu}>
            developers
          </li>

          <li className="link-btn" onMouseOver={displaySubmenu}>
            company
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
