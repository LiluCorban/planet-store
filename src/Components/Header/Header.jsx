import "./Header.css"

import {NavLink} from "react-router-dom";


const Header =() => {
    return (
        <header>
           <nav>
        <NavLink to="/">
            DISCOVER US
        </NavLink>
            <NavLink to="/planets">
                PLANETS
            </NavLink>
               <NavLink to="/ships">
                   SPACESHIPS
               </NavLink>
               <NavLink to="/crew">
                   CREW
               </NavLink>
               <NavLink to="/news">
                   NEWS
               </NavLink>

           </nav>

            <div className="cart-block">
                <NavLink to="/cart">CART</NavLink>
            </div>

        </header>
    )
}
export default Header;