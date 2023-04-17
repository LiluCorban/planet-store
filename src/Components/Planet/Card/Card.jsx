
import "./Card.css"
import {useNavigate} from "react-router-dom";
const  Card = (props) => {
    const navigate = useNavigate();
    const showMoreHandler = ()=> {
        navigate("/selected");
}
    return (
        <div className="planet-card">
  <div className="visible">
            <img src={props.planet.image} alt="planet"/>
            <h2>PLANET NAME: {props.planet.name}</h2>
  </div>
            <div className="description">
            <p>PRICE: from {props.planet.price}</p>
                <p>{props.planet.predescription}</p>
            <button onClick={showMoreHandler}>BUY</button>
            </div>
       </div>
    )
}
export default Card