import {useState, useEffect} from 'react';


function PanelCategoria  () {

    const [categorias, setCategorias] = useState([]);
    

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(rtaDB => rtaDB.json())
        .then(data => {
            setCategorias(data.results)
        })
        .catch(error => console.error(error))
    }, [])


    return (
    <> 
    <div className='titulo-tema'>
		<h5>Panel de categorias</h5>
	</div>
        {
            categorias.filter((item, idx) => idx < 7).map((categoria, i) => {
                return (
                    <div className='categorias'>
                        <div className='genres' >
                            <p key={i}>{categoria.gender}</p>
                        </div>
                    </div>
                    
                )
            })
        }                   	
    </>    

    )
}

export default PanelCategoria;


/* {
    categorias.map((categoria, i) => {
        return (
            <div className='genres' >
             <p key={i}>{categoria.name}</p>
             </div>
        )
    })
} */