import './Body.css'
import foto from './logo-dCompras-01.svg'
import TablaProducts from './TablaProducts';

import PanelCategoria from './PanelCategorias';
import UltimoProductoCreado from './UltimoProductoCreado';



function Body () {
    return(
        <body className='Body'>

            <div className='contendor12'>
            
                <div className='tema1'>
                    <UltimoProductoCreado />  
                </div>

                <div className='tema1'>
                    <PanelCategoria />
                </div>
                
			</div>

            < TablaProducts />
            
        </body>

    )
}

export default Body;