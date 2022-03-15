import foto from './logo-dCompras-01.svg'
import './Paneles.css'

import PanelesCards from './PanelesCards';

function Paneles () {
    return(
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title">DASHBOARD dCompras</h1>
        <p className="heading__credits">Informacion</p>
      </div>

      <div className="cards">
        <PanelesCards /> 
      </div>

     {/*  <div className="cards">       //por las dudas.
         <div className="card card-1">
            <div className="card__icon">Total de Productos</div>
            <h2 className="card__title">8088</h2>
          </div>
      </div> */}

    </div>
  )
}

export default Paneles;