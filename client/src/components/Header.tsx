import { useState } from 'react';
import './Header.css';
import '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <nav className={`header-center ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Início</Link>
          <Link to="/Trekkings">Trekkings</Link>
          <Link to="/Loja">Loja</Link>
          <Link to="/SobreNos">Sobre Nós</Link>
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