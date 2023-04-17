import "./Ships.css"
import ShipCard from "../Ships/ShipCard/ShipCard";
import background1 from "../../Assets/img/backgroud1.jpg"
import arrow from "../../Assets/img/down-arrow.png"

const Ships =(props) => {
    let shipItems = props.ships.map(ship => <ShipCard ship= {ship}/>)
    return(
        <section className="ships-store">
            <img className="background" src={background1} alt="back"/>
            <h3>Even if you don't have a spaceship right now we can help with it. Your fast, unstoppable dream.  Choose your spacecar?  </h3>
            <img className="arrow" src={arrow} alt="arrow"/>
            <div className="cards-block">
                {shipItems}

            </div>

        </section>
    )
}
export default Ships