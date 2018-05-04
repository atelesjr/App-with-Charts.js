import React, { Component } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

//Fontes de API de população feminina e masculina
const URL1 = 'http://api-imp.seade.gov.br/v1/dados/95/56'
const URL2 = 'http://api-imp.seade.gov.br/v1/dados/95/57'

    
export default class Genero extends Component {
    // inicializar o estado do componente
    constructor(props){
        super(props)
        this.state = { 
            chartData:{}
        }
    }

    componentDidMount(){
        //Puxar dados das APIs para o array
        axios.all([
            axios.get(URL1),
            axios.get(URL2)
        ]).then(axios.spread((res1, res2 ) => {
            let dados1 = res1.data.dados[0].ano
            let dados2 = res2.data.dados[0].ano

            let eixoX = []
            let eixoY1 = []
            let eixoY2 = []
            for(let ano in dados1){
                //para obter o json key (label com ano)
                eixoX.push(ano);
                //para obter valores e retirar o separador de milhar que prejudicam a confecção do gráfico. Ex: 1.000.000 se torna 1000000
                //eixoY1 para dados população feminina e exioYM para dados população masculina
                eixoY1.push(dados1[ano].replace(/\./g, ''))
                eixoY2.push(dados2[ano].replace(/\./g, ''))
            }

            //configuações do estado do componente gráfico
            this.setState({
                chartData:{
                    labels: eixoX,
                    datasets:[
                        {
                            label: 'População feminina',
                            data: eixoY1,
                            yAxesgroup: 'F',
                            backgroundColor: 'rgba(255, 153, 51, 0.3)',
                            borderWidth: 1,
                            borderColor: 'rgba(255, 51, 0, 0.6)',
                        },
                        {
                            label: 'População masculina',
                            data: eixoY2,
                            yAxesgroup: 'M',
                            backgroundColor: 'rgba(0, 153, 153, 0.3)',
                            borderWidth: 1,
                            borderColor: 'rgba(0, 102, 204, 0.6)',
                        }
                    ]
                }
            })
        }))
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
                    options={{
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