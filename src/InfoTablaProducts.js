import {useState, useEffect} from 'react';

function InfoTablaProducts () {

    const [producto, setProducto] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3031/api/products')
        .then(rtaDB => rtaDB.json())
        .then(response => {
            setProducto(response.data)
        })
        .catch(error => console.error(error))
    }, [])


    return (
    <>
        {
            producto.map((producto, i) => {
             return(
                 <thead className='columnas-info' key={i}>
                <tr>
                    <th>{producto.id}</th>
                    <th>{producto.name}</th>
                    <th>{producto.description}</th>
                    <th>{producto.discount}</th>
                    <th>{producto.color}</th>
                    <th>{producto.size}</th>
                </tr>
            </thead>
             )
            

            })     
        }
    </>
    )
}

export default InfoTablaProducts;


/* 2634845845 */
