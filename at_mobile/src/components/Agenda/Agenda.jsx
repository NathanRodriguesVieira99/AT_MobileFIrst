import React from 'react'

import './Agenda.scss'

function Agenda() {
  return (
    <div id='agenda' className='agenda'>
      <div className="paiAgenda">
        <h1 style={{ color: 'red' }}>Proximos compromissos do candidato Max</h1>
        <ul className="agendinha">
          <li><span>26/09:</span> Aniversário do Nathan</li>
          <li><span>12/10: </span> Evento dia das crianças </li>
          <li><span>13/10:</span> Carreata do mito Max</li>
          <li><span>20/10:</span>Jogo do Vasco</li>
        </ul>
      </div>


    </div>
  )
}

export default Agenda