import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
        <span className="navbar-title">Gujarati Wordle</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/wordle">Wordle</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
