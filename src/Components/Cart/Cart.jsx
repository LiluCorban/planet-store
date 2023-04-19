import "./Cart.css"
const Cart = (props) => {
    return (
        <div className="cart-items">
            <div className="cart-items-header">YOUR CART</div>
            {props.cartItems.length === 0 && (<div className="cart-items-empty">NO ITEMS</div>)}
            <div className="cart-items-block">
                {props.cartItems.map((item) =>(
                    <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image" src={item.image} alt={item.name}/>
                        <p>PLANET {item.name}</p>

                        <p>PRICE {item.price}</p>
                        <div className="cart-items-function">
                            <button className="cart-items-add">+</button>
                            <button className="cart-items-remove">-</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>

    )
}
export default Cart