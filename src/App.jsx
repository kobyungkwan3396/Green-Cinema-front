import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Login from './pages/Login';
import History from './pages/History';
import Booking from './pages/Booking';
import CinemaList from './pages/CinemaList'; // ✅ 추가

function MainLayout({ currentSlide, setCurrentSlide }) {
  return (
    <>
      <Header />
      <NavBar />
      <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ 로그인 상태 추가


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cinemas" element={<CinemaList />} /> {/* ✅ 추가 */}
      </Routes>
    </Router>
  );
}

export default App;