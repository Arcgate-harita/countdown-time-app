import React, {useState} from 'react';
import './Footer.css';
import ContactForm from './ContactForm';

function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer className="footer" data-testid="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
        <ul>
          <li onClick={scrollToTop}>Home</li>
          <li onClick={scrollToAbout}>About</li>
          <li onClick={openContactPopup}>Contact</li>
        </ul>
      </div>
      {isContactOpen && <ContactForm onClose={closeContactPopup} />}
    </footer>
  );
}

export default Footer;
