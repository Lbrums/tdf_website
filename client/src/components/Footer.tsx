import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
      <div className="footer-left">
        <p className="company-name">Tdf Adventure LTDA</p>
        <p className="credits">Design e desenvolvimento por Luciano Brum Silva</p>
      </div>
      <div className="footer-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook color='#828282'/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram color='#828282'/>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok color='#828282'/>
        </a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;