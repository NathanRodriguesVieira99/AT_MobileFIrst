import React from 'react'

import MaxImg from '../Biografia/MaxImg/MaxImg';
import './Biografia.scss'

import images from "../../assets/SliderImg/images";
import Slider from "../../components/Biografia/Slider/Slider";


function Biografia() {
  return (
    <section className='Odin'>
      <div id='biografia' className='biografia'>
        <h1 className='tituloBio'>Max Cavalera, Candidato a Prefeito do Rio de Janeiro</h1>
        <div className="imgMax">
          <MaxImg />
        </div>
        <p>Max Cavalera, ícone do metal brasileiro e mundial, traz para a campanha sua energia inigualável e paixão pela cidade do Rio de Janeiro. Conhecido por sua liderança, autenticidade e visão de futuro, Max propõe um Rio de Janeiro mais inclusivo, seguro e vibrante. Com foco na valorização da cultura local, desenvolvimento sustentável e combate à desigualdade, Max promete ser a voz do povo carioca, unindo todas as comunidades em torno de um objetivo comum: fazer do Rio uma cidade mais justa e próspera para todos. Prepare-se para um novo som, um novo ritmo, e uma nova era para o Rio de Janeiro com Max Cavalera na liderança!</p>
        <Slider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} style={{ width: '100%', height: '300px' }} />;
          })}
        </Slider>
      </div>

    </section>

  )
}

export default Biografia