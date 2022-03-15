import {useState, useEffect} from 'react';

function PanelesCards () {

    const [card, setCard] = useState([]);

    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(rtaDB => rtaDB.json())
        .then(data => {
            setCard(data.results)
        })
        .catch(error => console.error(error))
    }, [])


    return (
        <>
        {
            card.filter((item, idx) => idx < 3).map((cardi, i) => {
                return (
                <div className="card card-1" key={i}>
                     <div className="card__icon">Total de {cardi.status}</div>
                    <h2 className="card__title">{cardi.id}</h2>
                </div>
                )
            })
        }
        </>
    )
}

export default PanelesCards;