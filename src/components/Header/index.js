import React from 'react';

import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          FASHIONISTA
        </Link>

        <div className="header__icons">
          <FiSearch className="header__icons--search" />
          <FiShoppingCart className="header__icons--bag" />
          <span className="header__icons--counter">1</span>
        </div>
      </div>
    </header>
  );
}
