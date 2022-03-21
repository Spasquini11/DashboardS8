import {useState, useEffect} from 'react';

function UltimoProductoCreado () {

    const [producto, setProducto] = useState([]);

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(rtaDB => rtaDB.json())
        .then(data => {
            setProducto(data.results)
        })
        .catch(error => console.error(error))
    }, [])

        let ultimo = producto[producto.length - 1] 
   useEffect( () => {
        console.log('se actualizo')
    }, [ultimo])
    
    

    return (
    <> 
        {
            <div className='tema1'>
                  
				<div className='titulo-tema'>
					<h5>Ultimo USUARIO creado</h5>
				</div>
				<div className='img-tema'>
					<img src={producto.image}/>
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


