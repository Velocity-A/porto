import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialMediaForm({ isOpen, onClose }) {
  const animationDuration = 300; // Adjust the duration as needed (in milliseconds)

  if (!isOpen) return null;

  return (
    <div className={`social-media-form ${isOpen ? 'open' : ''}`} style={{ transition: `opacity ${animationDuration}ms` }}>
      <a href="https://www.facebook.com/profile.php?id=100079338621448">
        <FontAwesomeIcon icon={faFacebook} /> Facebook
      </a>
      <a href="https://www.instagram.com/better_call_velocity/">
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
      {/* Add more social media links with icons as needed */}
    </div>
  );
}

export default SocialMediaForm;
