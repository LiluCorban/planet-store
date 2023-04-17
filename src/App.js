import Main from "./Components/Main/Main"
import './App.css';
import Planet from "./Components/Planet/Planet";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Ships from "./Components/Ships/Ships";
import Selected from "./Components/Selected/Selected";
import News from "./Components/News/News";
import Crew from "./Components/Crew/Crew";



function App(props) {
  return (
    <div className="App">
     <Header/>
        {/*<NavLink to="/"><button>DISCOVER US</button> </NavLink>*/}
      <Routes>
        <Route path="/" element ={<Main/>}/>
        <Route path="/planets" element ={<Planet planets={props.state.planets}/>}/>
          <Route path="/ships" element={<Ships ships={props.state.ships}/>}/>
          <Route path="/selected" element={<Selected select={props.state}/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/crew" element={<Crew/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
