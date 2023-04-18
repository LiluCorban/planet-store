import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./Data/data"
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/planet-store">

    <App  state={state}/>
        </BrowserRouter>


);


