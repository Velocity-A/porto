import React, { useState, useEffect } from 'react';
import SocialMediaModal from './SocialMediaModal'; // Import your SocialMediaForm component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', offset: 0 }, // Adjust offset for home section
        { id: 'skills', offset: 100 },
        { id: 'projects', offset: 100 },
        { id: 'about', offset: 100 }
      ];

      const currentScrollPosition = window.scrollY;

      for (const { id, offset } of sections) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionBottom) {
            setActiveLink(id);
            break;
          }
        }
      }
    };

   
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (link) => (event) => {
    event.preventDefault();
    setActiveLink(link);

    const section = link === 'home' ? 'home' : link;
    const targetSection = document.getElementById(section);

    if (targetSection) {
      const scrollOffset = 5;
      const offsetTop = targetSection.offsetTop + scrollOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    setIsMenuOpen(false);
  };

  const handleSayHiClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <nav className={`App-nav ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          {['home', 'skills', 'projects', 'about'].map((link) => (
            <li key={link}>
              <a
                className={activeLink === link ? 'active' : ''}
                href="#"
                onClick={handleNavLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button className="nav-button" onClick={handleSayHiClick}>
      Say HI!
    </button>
    <SocialMediaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </nav>
  );
}

export default Nav;
