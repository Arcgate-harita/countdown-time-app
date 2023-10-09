import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png';
import ContactForm from './ContactForm';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const openContactPopup = () => {
    setIsContactOpen(true);
  };


  const closeContactPopup = () => {
    setIsContactOpen(false);
  };

  return (
    <header className={`header ${isOpen ? 'open' : ''}`} data-testid="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <button className="toggle-button" onClick={toggleNav} data-testid="toggle-button">
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li onClick={scrollToAbout}>About</li>
          <li onClick={openContactPopup}>Contact</li>
        </ul>
      </nav>

      {isContactOpen && <ContactForm onClose={closeContactPopup} />}
    </header>
  );
}

export default Header;
