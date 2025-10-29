import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <img src={logo} alt="NOVA CINEMA" className="logo" />
    <div className="auth">
    <Link to="/signup">회원가입</Link> | <Link to="/login">로그인</Link>
    </div>
  </header>
);

export default Header;