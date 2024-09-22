import React from "react";

import './styles/global.scss'

import Header from "./components/Header/Header";
import Biografia from './components/Biografia/Biografia';

import Agenda from './components/Agenda/Agenda';
import Footer from './components/Footer/Footer';
import Propostas from "./components/Propostas/Propostas";
import Contato from './components/Contato/Contato'

function App() {
  return (
    <>
      <Header />
      <Biografia />
      <Propostas />
      <Agenda />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
