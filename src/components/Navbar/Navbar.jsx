import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
  <>
    <nav>
      <div className='navbar-section'>
         <div to="/" className='logo'>
          <h2>Insight</h2>
        </div>
        <div className='bars-dropdown'>
          <HiMenuAlt3 className='bars' />
          <div class="dropdown-content">
            <a href="/home">Home</a>
            <a href="/aboutus">About</a>
            <a href="/login">Login</a>
          </div>
        </div>

        <div className="nav-item">
        <NavLink to="/home" activeStyle className='navlink active'>
            Home
          </NavLink>
          <NavLink to="/aboutus" activeStyle className='navlink'>
            About
          </NavLink>
          <NavLink to="/login" activeStyle className='navlink'>
            Login
          </NavLink>
        </div>

      </div>
    </nav>
  </>
  );
};

export default Navbar;
