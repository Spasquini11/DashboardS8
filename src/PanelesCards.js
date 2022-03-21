import {useState, useEffect} from 'react';

function PanelesCards (props) {
    return (
        
    <div className="card card-1">
       <div className="card__icon">{props.title}</div>
       <div className="card__icon">{props.total}</div>
       <h2 className="card__title">{props.id}</h2>
    </div>
                
                    
        
    )
}

export default PanelesCards;