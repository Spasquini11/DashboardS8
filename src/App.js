import React from 'react';

import './App.css'
/* import './Footer.css'
import './Header.css' */

import Footer from './Footer';
import Body from "./Body";
import Header from "./Header";
import Paneles from "./Paneles";

import ContentWrapper from './ContentWrapper';


import {Routes, Route} from 'react-router-dom';
import TablaProducts from './TablaProducts';


function App() {
  return (
    <React.Fragment>

      <Header />

        <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path='/informacion' element={<Paneles />} />
          <Route path='/listado' element={<TablaProducts />} />
          <Route path='/ultimo-producto-y-panel' element={<Body />} />
        </Routes>

        <Footer />

    </React.Fragment>
  );
}

export default App;
