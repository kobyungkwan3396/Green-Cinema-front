import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/booking">예매</Link></li>
      <li><Link to="/history">이용내역</Link></li>
      <li><Link to="/cinemas">영화관</Link></li>
      <li><Link to="/events">이벤트</Link></li>
      <li><Link to="/store">스토어</Link></li>
    </ul>
  </nav>
);

export default NavBar;