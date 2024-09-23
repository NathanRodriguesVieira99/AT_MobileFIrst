import React from "react";

import './styles/global.scss'

import Header from "./components/Header/Header";
import Biografia from './components/Biografia/Biografia';

import Agenda from './components/Agenda/Agenda';
import Footer from './components/Footer/Footer';
import Propostas from "./components/Propostas/Propostas";
import BotaoVoltar from "./components/BotaoVoltar/BotaoVoltar";

function App() {
  return (
    <>
      <Header />
      <BotaoVoltar />
      <Biografia />
      <Propostas />
      <Agenda />
      <Footer />
    </>
  );
}

export default App;
