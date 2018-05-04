import React, { Component } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

//Fonte de API da população geral
const URL = 'http://api-imp.seade.gov.br/v1/dados/95/58'

    
export default class Populacao extends Component {
    //Incializar o estado do componente
    constructor(props){
        super(props)
        this.state = { 
            chartData:{}
        }
    }

    componentDidMount(){
        //Puxar dados da API
        axios.get(URL).then(resp => {
            let dados = resp.data.dados[0].ano
            

            let eixoX = []
            let eixoY = []
            for(let ano in dados){
                //para obter o json key (label com ano)
                eixoX.push(ano);
                //para obter valores e retirar o separador de milhar que prejudicam a confecção do gráfico. Ex: 1.000.000 se torna 1000000
                eixoY.push(dados[ano].replace(/\./g, ''))
            }

            //configuações do estado do componente gráfico
            this.setState({
                chartData:{
                    labels: eixoX,
                    datasets:[{
                        label: 'População',
                        data: eixoY,
                        backgroundColor: 'rgba(0, 153, 51,0.3)',
                        borderWidth: 1,
                        borderColor: 'rgba(0, 102, 0, 0.6)',
                        strokeColor: 'brown',
                    }]
    
                }
            })
            
        })
        /*Para captar mensagens de erro. 
        Não foi terminado pois a dependência react-alert apresentou 
        falha grave e precisaria pesquisar mais para resolver. */
        .catch( error => {
            if (error.response) {
                alert('erro')
              }
        })   
    }

    render(){
        return(
            <div className="chart">
                {/* Componente gráfico */}
                <Bar
                    data={this.state.chartData}
                    width={this.state.width}
                    height={this.state.height}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        title:{
                            display: this.props.displayTittle,
                            text: this.props.displayText,
                            fontColor: 'rgba(64, 64, 64, 0.9)',
                            fontSize: 18,
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
        
}