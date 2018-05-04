//Component para cabeçalho da página.

import React from 'react'

export default props => (
    <header> 
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
           <a className='navbar-brand' href='#'><h2>{props.name}</h2></a> 
        </nav>
    </header>
)