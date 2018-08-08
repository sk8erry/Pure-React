import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);

const Nav = ({ activeTab, onTabChange, getSubtotal, getItemsCount }) => (
	<nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
        <a onClick={() => onTabChange(0)}>Items</a>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
        <a onClick={() => onTabChange(1)}>Cart</a>
      </li>
      <li className="App-nav-cart">
        <FontAwesomeIcon icon="shopping-cart" /> {getItemsCount()} items (${getSubtotal()})
      </li>
    </ul>
  </nav>
);

export default Nav; 