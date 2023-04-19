import "./Planet.css"
import Card from "./Card/Card"
import background2 from "../../Assets/img/background2.jpg"
import arrow1 from "../../Assets/img/down-arrow.png"
const Planet = (props) => {
    let planetItems = props.planets.map(planet => <Card showMoreHandler={props.showMoreHandler} handleAddProduct={props.handleAddProduct} planet = {planet} key = {planet.id}/>)
    return (
        <section className="planet-store">
            <img className="background" src={background2} alt="back"/>
            <h3>Since 2033 program of Planet Discover opened Space doors. Our crew with AI started "Program Discover".
                99 planets was created to accommodate happy family from all University. Will you join us?  </h3>
            <h4>SHOP NOW</h4>
            <img className="arrow" src={arrow1} alt="arrow"/>
          <div className="cards-block">

                {planetItems}

            </div>


        </section>
    )
}
export default Planet;
