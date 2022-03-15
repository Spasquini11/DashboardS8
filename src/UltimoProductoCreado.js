import {useState, useEffect} from 'react';

function UltimoProductoCreado () {

    const [producto, setProducto] = useState([]);
    /* const url = [] */

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(rtaDB => rtaDB.json())
        .then(data => {
            setProducto(data.results)
        })
        .catch(error => console.error(error))
    }, [])

    return (
<> 
    {
        producto.filter((item, idx) => idx < 1 ).map((producto, i) => {
            return (
                    <div className='tema1' key={i}>
                    
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
                        )
                    })
                }                   	
    </>    
    )
}

export default UltimoProductoCreado;


