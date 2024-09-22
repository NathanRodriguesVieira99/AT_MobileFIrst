import React from 'react';
import './ListaPC.scss';

const ListaPC = ({ closeMenu }) => {
  return (
    <ul className="listaPC">
      <li><a href="#home" onClick={closeMenu}>Home</a></li>
      <li><a href="#biografia" onClick={closeMenu}>Biografia</a></li>
      <li><a href="#propostas" onClick={closeMenu}>Propostas</a></li>
      <li><a href="#agenda" onClick={closeMenu}>Agenda</a></li>
      <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
    </ul>
  );
};

export default ListaPC;
