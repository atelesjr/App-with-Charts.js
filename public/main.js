const CHART = document.getElementById('lineChart')
console.log(Chart.defaults)
let lineChart = new Chart(CHART, {
    type: 'bar',
    data: data ={
        labels: ["January", "February", "Machr", "Abril", "May", "June", "July"],
        datasets: [
            {
                label: "My first dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,75,192,0.4)",
                borderColor: "rgba(75,192,182,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(74,182,182,1",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1",
                pointHoverBorderColor: "rgba(220, 220, 230, 1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81,56,55,40],
            }
        ]
    }
})