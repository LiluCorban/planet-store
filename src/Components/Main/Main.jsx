import banner from "../../Assets/img/banners/banner1.jpg"
import banner1 from "../../Assets/img/banners/banner31.jpg"
import banner2 from "../../Assets/img/banners/banner2.jpg"
import "./Main.css"
import {NavLink} from "react-router-dom";

const Main = () =>{
    return (
        <main>
            <div className="banner">
            <img src={banner} alt="#"/>
                <h1>NEED MORE SPACE - OPEN THE SPACE</h1>
                <NavLink to="/planets"><button>MORE SPACE</button></NavLink>
            </div>
            <div className="banner"> <img src={banner1} alt="#"/>
                <h2>YOU CAN FIND YOUR DREAMSHIP HERE</h2>
                <NavLink to="/ships"><button>SHIPS</button></NavLink>
            </div>
            <div className="banner">
                <img src={banner2} alt="#"/>
                <h2>MAKE YOUR FIRST SPACE SELFIE</h2>
                <NavLink to="/planets"><button>PLANETS</button></NavLink>
            </div>
       </main>
    )
}
export default Main