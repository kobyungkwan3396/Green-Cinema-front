import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userCode');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">🎬 NOVACINEMA</div>
      <div className="auth-buttons">
        <Link to="/signup" className="auth-link">회원가입</Link>
        {isLoggedIn ? (
         <span onClick={handleLogout} className="auth-link">로그아웃</span>
        ) : (
         <Link to="/login" className="auth-link">로그인</Link>
        )}
      </div>
    </header>
  );
}

export default Header;