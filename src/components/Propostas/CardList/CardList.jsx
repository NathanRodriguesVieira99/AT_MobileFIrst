import images from "../../../assets/CardsImg/ImagesCard";
import './CardList.scss';


function Card({ image, title, text }) {
  return (
    <div className="card" id='propostas'>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          {text}
        </p>

      </div>
    </div>
  )
}
export default function CardList() {
  return (
    <>

      <div className="card-list">
        {images.map((card, index) => (
          <Card
            key={index}
            image={card.imgURL}
            title={card.title}
            text={card.text}
          />

        ))}
      </div>
    </>

  )
}