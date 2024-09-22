import React from 'react'
import CardList from './CardList/CardList'

import './Propostas.scss'

function Propostas() {
  return (
    <>
      <div>
        <CardList />
      </div>
      <div className="propostas" >
        <h1>Outras Propostas</h1>
        <h2>Proposta</h2>
        <h2>Proposta</h2>
        <h2>Proposta</h2>
        <h2>Proposta</h2>
      </div>

    </>


  )
}

export default Propostas