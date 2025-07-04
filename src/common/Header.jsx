import { NavLink } from "react-router-dom";
import { useState } from "react";
import '../css/Header.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="content-hamberger">
        <div className="hamburger" onClick={toggleNav}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>

        <div className={`nav ${isOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                onClick={closeNav} 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                onClick={closeNav} 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/amc" 
                onClick={closeNav} 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Amc
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={closeNav} 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/terms" 
                onClick={closeNav} 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Terms
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
