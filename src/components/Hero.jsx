import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">Manoj Mandal</h1>
        <h2 className="hero-subtitle">Aspiring Cyber Security Analyst</h2>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="btn-primary">
          View My Work
        </Link>
      </div>
      <div className="hero-image">
        <img src="/IMG_1495.JPG" alt="Manoj Mandal" className="floating" />
      </div>
    </section>
  );
};

export default Hero;
