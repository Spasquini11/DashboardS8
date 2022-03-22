import {useState, useEffect} from 'react';

function UltimoProductoCreado () {

    const [producto, setProducto] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3031/api/products')
        .then(rtaDB => rtaDB.json())
        .then(data => {
            setProducto(data.data)
        })
        .catch(error => console.error(error))
    }, [])

    /* let ultimo = producto[producto.length - 1] */ 
    

    return (
    <> 
        {
            <div className='tema1'>
                  
				<div className='titulo-tema'>
					<h5>Ultimo USUARIO creado</h5>
				</div>
				<div className='img-tema'>
					<img src={producto.image1}/>
				</div>
                <div className='desc-tema'>
                    <p>{producto.name}</p>
				</div>    
            </div>
        }                   	
    </>  
    ) 
}

export default UltimoProductoCreado;


