// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <h1>CreatorVerse</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Creator</Link></li>
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
