import './Header.css'
import foto from './logo-dCompras-01.svg';

import React from 'react';
import { Link } from 'react-router-dom';


function Header () {
    return(
<React.Fragment>
            
    <header>
        <Link to='/' className='main-header'>    
             <img className='Logo'src={foto} alt='stfu'/>
        </Link>

        <div className='sub-header'>
            <nav className='nav-sub-header'>
                <Link to='/listado'>Listado de Productos</Link>
                <Link to='/ultimo-producto-y-panel'>Contenido</Link>
                <Link to='/informacion'>Informacion resumida</Link>
            </nav>
        </div>
    </header>
</React.Fragment>
        

        
    )
}

export default Header


