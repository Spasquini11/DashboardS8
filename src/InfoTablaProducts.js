import {useState, useEffect} from 'react';

function InfoTablaProducts () {

    const [informacion, setInformacion] = useState([]);

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(rtaDB => rtaDB.json())
        .then(data => {
            setInformacion(data.results)
        })
        .catch(error => console.error(error))
    }, [])


    return (
    <>
        {
            informacion.filter((item, idx) => idx < 10).map((info, i) => {
             return(
                 <thead className='columnas-info' key={i}>
                <tr>
                    <th>{info.id}</th>
                    <th>{info.name}</th>
                    <th>{info.status}</th>
                    <th>{info.species}</th>
                    <th>{info.type}</th>
                    <th>{info.gender}</th>
                    <th>{info.id}</th>
                    <th>{info.id}</th>
                </tr>
            </thead>
             )
            

            })     
        }
    </>
    )
}

export default InfoTablaProducts;