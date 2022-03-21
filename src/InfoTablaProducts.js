import {useState, useEffect} from 'react';

function InfoTablaProducts () {

    const [producto, setProducto] = useState([]);

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
            producto.filter((item, idx) => idx < 10).map((producto, i) => {
             return(
                 <thead className='columnas-info' key={i}>
                <tr>
                    <th>{producto.id}</th>
                    <th>{producto.name}</th>
                    <th>{producto.status}</th>
                    <th>{producto.species}</th>
                    <th>{producto.type}</th>
                    <th>{producto.gender}</th>
                    <th>{producto.id}</th>
                    <th>{producto.id}</th>
                </tr>
            </thead>
             )
            

            })     
        }
    </>
    )
}

export default InfoTablaProducts;