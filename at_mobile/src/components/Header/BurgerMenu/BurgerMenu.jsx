import React, { useState } from 'react';
import './BurgerMenu.scss';
import ListaPC from '../ListaPC/ListaPC';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu">
      
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <nav className={`menu ${isOpen ? 'visible' : ''}`}>
        <ul>

          <li><a href="#home" onClick={closeMenu}>Home</a></li>

          <li><a href="#biografia" onClick={closeMenu}>Biografia</a></li>

          <li><a href="#propostas" onClick={closeMenu}>Propostas</a></li>

          <li><a href="#agenda" onClick={closeMenu}>Agenda</a></li>
        </ul>
      </nav>
      {isOpen && <div className="overlay" onClick={toggleMenu} />}


      <div className="lista-container">
        <ListaPC closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default BurgerMenu;
