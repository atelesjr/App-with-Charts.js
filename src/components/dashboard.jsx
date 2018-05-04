import React from 'react'
//Componentes 
import Populacao from '../components/populacao'
import Genero from '../components/genero'
import Urbanrural from  '../components/urbanrural'

export default props => (
    <div>
        {/* Components gráficos */}
        <div className='jumbotron'>
            <Populacao 
                legendPosition="bottom"
                displayTittle="true"
                displayText="Total da População do Município de Campinas"
                displayLegend="true"
                legendPosition="top"
            />
        </div>
        < br />

        <div className='jumbotron' >
            <Genero 
                    legendPosition="bottom"
                    displayTittle="true"
                    displayText="População de Campinas por Gênero"
                    displayLegend="true"
                    legendPosition="top"
            />
        </div>
        <br />

        <div className='jumbotron' >
            <Urbanrural
                    legendPosition="bottom"
                    displayTittle="true"
                    displayText="População de Campinas Urbana e Rural"
                    displayLegend="true"
                    legendPosition="top"
            />
        </div>
    
    </div>
)