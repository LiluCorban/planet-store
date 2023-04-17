import crew1 from "../../Assets/img/crew/crew1.jpg"
import crew2 from "../../Assets/img/crew/crew2.jpg"
import crew3 from "../../Assets/img/crew/crew3.jpg"
import "./Crew.css"

const Crew= () =>{
    return (
        <section className="crew-block">
            <div className="crew-cards">
            {/*<h2>OUR SPACE CREW</h2>*/}
            <div className="crew-card">
                <img src={crew1} alt="crew"/>
                <h3>General Manager</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <div className="crew-card">
                <img src={crew3} alt="crew"/>
                <h3>Space Consultant</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <div className="crew-card">
                <img src={crew2} alt="crew"/>
                <h3>Main Pilot</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            </div>




        </section>
    )
}
export default Crew;
