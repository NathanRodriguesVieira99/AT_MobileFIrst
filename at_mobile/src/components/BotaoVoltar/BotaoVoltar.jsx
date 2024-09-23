import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

import './BotaoVoltar.scss'

function BotaoVoltar() {
  return (
    <div className="paiBtn">
      <a href="#header" className='btnBack'>
        <FaArrowCircleUp />
      </a>
    </div>

  )
}

export default BotaoVoltar