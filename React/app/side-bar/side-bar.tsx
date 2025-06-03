
// src/components/Sidebar.js

import React from 'react';

import { sidebarNavItems, moreNavItem } from './data';
import './side-bar.css'; // We'll create this CSS file
import { Link } from 'react-router';

function Sidebar() {
  return (
    <div className="instagram-sidebar">
      <div className="sidebar-logo">
        {/* Replace with your actual logo image if needed */}
        <Link to="/" className="logo-link">
          <span className="logo-icon">📷</span>
          <span className="logo-text">StupidGram</span>
        </Link>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {sidebarNavItems.map(item => (
            <li key={item.id}>
              <Link to={item.link} className="sidebar-item-link">
                <span className="sidebar-item-icon">{item.icon}</span>
                <span className="sidebar-item-text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-more">
        <Link to={moreNavItem.link} className="sidebar-item-link">
          <span className="sidebar-item-icon">{moreNavItem.icon}</span>
          <span className="sidebar-item-text">{moreNavItem.text}</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;