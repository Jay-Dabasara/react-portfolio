import React from 'react';
import profileImg from '../assets/profile.jpg.jpg';
import './Home.css';

const Header = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={profileImg} alt="Profile" className="profile-img" />
                <span className="logo-text">Jay Dabasara</span>
            </div>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
