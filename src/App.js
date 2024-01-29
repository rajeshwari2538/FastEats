import React from "react";

import {Header} from "./components/Header"

import { Outlet } from "react-router-dom";
import 'keen-slider/keen-slider.min.css'
import { Footer } from "./components/Footer";
import { Provider } from "react-redux";

import appStore from "./utils/store/appStore";
//Chunking
//Lazy-loading
//Code-splitting
//Dynamic Bundling
//On demand loading
//dynamic importing


const App=()=>{
    
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer />
        </div>
        </Provider>
    )
}
export default App;