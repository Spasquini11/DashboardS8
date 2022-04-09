import {useState, useEffect} from 'react';


function PanelCategoria  () {

    const [categorias, setCategorias] = useState([]);
    

    useEffect( () => {
        fetch('http://localhost:3031/api/products')
        .then(rtaDB => rtaDB.json())
        .then(info => {
            setCategorias(info.data)
            
        })
        .catch(error => console.error(error))
    }, [])


    return (
    <> 
    <div className='titulo-tema'>
		<h5>Panel de categorias</h5>
	</div>

     <div className='categorias'>
         
        {
            categorias.filter((item, idx) => idx < 7).map((categoria, i) => {
                
                    return (
                
                    <div className='genres' >
                        <p key={i}>{categoria.id_category}</p>
                    </div>
                     
                    ) 
            })
            
        } 
        </div>         	
    </>    

    )
}

export default PanelCategoria;


