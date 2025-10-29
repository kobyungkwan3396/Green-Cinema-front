import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

function MainLayout({ currentSlide, setCurrentSlide, isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 
      <NavBar />
      <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </>
  );
}



export default MainLayout;