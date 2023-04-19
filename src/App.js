import Main from "./Components/Main/Main"
import './App.css';
import Planet from "./Components/Planet/Planet";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes, useNavigate} from "react-router-dom";
import Ships from "./Components/Ships/Ships";
import Selected from "./Components/Selected/Selected";
import News from "./Components/News/News";
import Crew from "./Components/Crew/Crew";
import {useState} from "react";
import Cart from "./Components/Cart/Cart";



function App(props) {
    const navigate = useNavigate();
    const [cardItems, setCardItems] = useState([]);


    const showMoreHandler = (product)=> {

        setCardItems([cardItems, {...product}]);
        navigate("/selected");
    }

    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) =>{
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist){
            setCartItems(cartItems.map((item) => item.id === product.id ?
                {...ProductExist, quantity:ProductExist.quantity + 1}: item));

        }
        else{
            setCartItems([...cartItems,{...product, quantity: 1 }])

        }
            }

  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element ={<Main/>}/>
        <Route path="/planets" element ={<Planet showMoreHandler={showMoreHandler} planets={props.state.planets}  handleAddProduct = {handleAddProduct}/>}/>
          <Route path="/ships" element={<Ships ships={props.state.ships}/>}/>
          <Route path="/selected" element={<Selected cardItems={cardItems} select={props.state} handleAddProduct = {handleAddProduct}/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/cart" element={<Cart cartItems = {cartItems}  handleAddProduct = {handleAddProduct}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
