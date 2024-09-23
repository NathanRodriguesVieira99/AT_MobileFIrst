import React from 'react'
import CardList from './CardList/CardList'

import './Propostas.scss'




function Propostas() {
  const outrasPropostas = [
    {
      Proposta: 'Minha guitarra, minha vida',
      desc: 'todos terão direito a ter uma guitarra e aprender a tocar heavy metal'
    },
    {
      Proposta: 'Escola Fullstack',
      desc: 'nas escolas municipais a partir dos 5 anos as crianças vão aprender programação'
    },
    {
      Proposta: 'Fome 0',
      desc: 'politicas públicas para acabar com a fome e acolher pessoas em vulnerabilidade'
    },
    {
      Proposta: 'Indigenas',
      desc: 'politicas de apoio aos povos originarios'
    },

    {
      Proposta: 'Combate ao racismo e lgbtFobia',
      desc: 'politicas para combate ao racismo e crimes de ódio contra pessoas lgbt'
    },

  ]

  return (

    <>
      <div>
        <CardList />
      </div>
      <div className="propostas" id='propostas'>
        <h1 style={{ color: 'red' }} >Outras Propostas</h1>
        {outrasPropostas.map((proposta, index) => (
          <>
            <h1 key={index} className='titleProposta'>
              {proposta.Proposta}
            </h1>
            <p>
              {proposta.desc}
            </p>
          </>

        ))}
      </div>

    </>


  )
}

export default Propostas