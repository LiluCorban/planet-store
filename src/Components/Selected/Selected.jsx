import "./Selected.css"
import banner11 from "../../Assets/img/background3.jpg"
import {useState} from "react";

const Selected = (props) => {
    const [isProductBasket,setIsProductBasket] =useState(false);
    const addProductToBasket = ()=> {
        alert("Add to cart?");
        setIsProductBasket(true)
    }
    return(
        <section className="selected-item">
            <img className="banner-select" src={banner11} alt="banner"/>
            <div className="select-card">
            <img className="select-image" src={props.select.planets[3].image}  alt="image"/>
            <div className="select-description">
                <h2>PLANET</h2>
            <h2>{props.select.planets[0].name}</h2>
                <h3>PRICE:{props.select.planets[0].price}</h3>
                <p>{props.select.planets[0].description}</p>
                { isProductBasket ?
                    <button><a onClick={addProductToBasket}>Already in the cart</a></button>
                    : <button><a onClick={addProductToBasket}>Add to the cart</a></button>


                }

            </div>

            </div>


        </section>
    )
}
export default Selected