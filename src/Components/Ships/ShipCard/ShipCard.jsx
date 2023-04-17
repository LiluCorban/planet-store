import "./ShipCard.css"

const  ShipCard = (props) => {
    return (
        <div className="ship-card">
            <div className="visible">
                <img src={props.ship.image} alt="ship"/>
                <h2>SHIP NAME: {props.ship.name}</h2>
            </div>
            <div className="description">
                <p>PRICE: from {props.ship.price}</p>
                <p>{props.ship.description}</p>
                <button>BUY</button>
            </div>
        </div>
    )
}
export default ShipCard