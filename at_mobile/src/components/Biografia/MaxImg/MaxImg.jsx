import Max from '../../../assets/img/maxcavaleraphotoedited.webp'

import './MaxImg.scss'

function MaxImg() {
  return (
    <picture>
      <img className='maxImg' src={Max} alt="Candidato Max Cavalera" />
    </picture>

  )
}

export default MaxImg