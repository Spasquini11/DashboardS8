import './TablaProducts.css'

import InfoTablaProducts from './InfoTablaProducts';

function TablaProducts () {

    return(
    <div className='panel'>

        <div>
           <h2 className='titulo2'> Listado de Productos </h2>
        </div>  

    <div className='tabla'>
        <thead className='columnas-titulos'>
         <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>GENERO</th>
            <th>TALLE</th>
            <th>COLOR</th>
            <th>CATEGORIA</th>
            <th>GENERO</th>
            <th>PRECIO</th>

         </tr>  
        </thead>

        < InfoTablaProducts />

            
     </div>
    </div>
    
    )
}

export default TablaProducts;