
import "./Card.css"

const  Card = (props) => {

    return (
        <div className="planet-card">
  <div className="visible">
            <img src={props.planet.image} alt="planet"/>
            <h2>PLANET NAME: {props.planet.name}</h2>
  </div>
            <div className="description">
            <p>PRICE: from {props.planet.price}</p>
                <p>{props.planet.predescription}</p>
                   <button onClick={() => props.showMoreHandler(props.planet)}>SHOW MORE</button>


            </div>
       </div>
    )
}
export default Card