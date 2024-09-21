import React from "react";

import './styles/global.scss'

import Header from "./components/Header/Header";
import Biografia from './components/Biografia/Biografia';
import Propostas from './components/Propostas/Propostas';
import Agenda from './components/Agenda/Agenda';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Biografia />
      <Propostas />
      <Agenda />
      <Footer />
    </>
  );
}

export default App;
