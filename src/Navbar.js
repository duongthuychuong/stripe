import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalState } from "./context";
const Navbar = () => {
  const { setIsSidebarOpen, setIsSubmenuOpen } = useGlobalState();

  return (
    <nav className="nav">
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
          <li className="link-btn">products</li>
          <li className="link-btn">developers</li>
          <li className="link-btn">company</li>
          <li className="link-btn">company</li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
