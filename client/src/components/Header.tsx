import { useState } from 'react';
import './Header.css';
import '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <nav className={`header-center ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio">Início</a>
        <a href="#trekkings">Trekkings</a>
        <a href="#loja">Loja</a>
        <a href="#sobre">Sobre Nós</a>
      </nav>
        <button className="account-button">Minha Conta</button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;