import React from "react"

import Footer from './Footer';
import Body from "./Body";
import Header from "./Header";
import Paneles from "./Paneles";


import './Body.css'
import './App.css'
import './Footer.css'
import './Header.css'
import './index.css'
import './Paneles.css'
import './TablaProducts'
import TablaProducts from "./TablaProducts";


function ContentWrapper () {
    return (
     <React.Fragment>
        <Paneles />
        <Body /> 
    </React.Fragment>
    )
}

export default ContentWrapper