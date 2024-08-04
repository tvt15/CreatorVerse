// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
      <div className="header-title">
        <h1>CreatorVerse</h1>
      </div>
        <nav>
          <ul>
            <div className="header-buttons">
            <button><li><Link to="/">Home</Link></li></button>
            <button><li><Link to="/add">Add Creator</Link></li></button>
            </div>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 CreatorVerse</p>
      </footer>
    </div>
  );
};

export default Layout;