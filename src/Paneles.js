import foto from './logo-dCompras-01.svg'
import './Paneles.css'

import PanelesCards from './PanelesCards';

import { useEffect, useState } from 'react';

function Paneles () {

  const [totalProduct, setTotalProduct] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  useEffect( () => {
    fetch('http://localhost:3031/api/products')
    .then(rtaDB => rtaDB.json())
    .then(response => {           
        setTotalProduct(response.total)
        setTotalCategory(response.countByCategory)
        setTotalUser(response.data)
    })
    
    .catch(error => console.error(error))
  }, []);


  return(
    <>
    <div className="main-container">

      <div className="heading">
        <h1 className="heading__title">DASHBOARD dCompras</h1>
        <p className="heading__credits">Informacion</p>
      </div>

      <div className="cards">
        <PanelesCards 
          title = 'Total Usuarios'
          total = {totalUser.length}        
        />

        <PanelesCards 
          title = 'Total Productos'
          total = {totalProduct} 
          /> 

        <PanelesCards
          title = 'Total Categori­as'
          total ={totalCategory}
        /> 
      </div>

    </div>
    </>
    
  )
}

export default Paneles;