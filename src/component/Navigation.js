import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <nav className="nav">
      <a href="/" className="title">
        Math Magician
      </a>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Calculator" className="nav-link">
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/Quote" className="nav-link">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
