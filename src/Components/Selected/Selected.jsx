import "./Selected.css"
import banner11 from "../../Assets/img/background3.jpg"


const Selected = (props) => {

    return(
        <section className="selected-item">
            <img className="banner-select" src={banner11} alt="banner"/>
            <div className="select-card">
                <h2>PLANET</h2>
                {props.cardItems.map((item) =>(
                    <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image" src={item.image} alt={item.name}/>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button onClick={() => props.handleAddProduct(item)}>ADD to CART</button>
                    </div> ))}
                </div>

        </section>
    )
}
export default Selected