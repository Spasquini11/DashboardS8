import {useState, useEffect} from 'react';

function UltimoProductoCreado () {

    const [producto, setProducto] = useState([]);
    

    useEffect( () => {
        fetch('http://localhost:3031/api/products/1')
        .then(rtaDB => rtaDB.json())
        .then(data => {
            setProducto(data.data)
        })
        .catch(error => console.error(error))
    }, [])

    
    return (

     <> 
        
        <div className='tema1'>
                
			<div className='titulo-tema'>
				<h5>Ultimo PRODUCTO creado</h5>
			</div>
            
            <div className='img-tema'>
				<img src={producto.image1} alt=' '/>
		    </div>
            
            <div className='desc-tema'>
                <p>{producto.name}</p>
			</div>
        </div>
    </>     
    ) 
}

export default UltimoProductoCreado;


