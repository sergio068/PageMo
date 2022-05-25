fetch('./Data/compras.txt')
  .then(res => res.text())
  .then(async content => {
    let compras = [];
    let lines = content.split(/\n/);
    lines.forEach(line => compras.push(line));
    console.log(compras,"almojabana");

    fetch('./Data/stock.txt')
    .then(res2 => res2.text())
    .then(content2 => {
        let stock = [];
        let lines2 = content2.split(/\n/);
        lines2.forEach(line2 => stock.push(line2));
        console.log(stock,'masa');

        Charles(compras, stock);
    })

    

  })

function Charles(compras, stock){

    const ctx = document.getElementById('myChart').getContext('2d');
    var ConfigCTX1 = {
        type: 'bar',
        data: {
            labels: ['Huevos', 'Cereal', 'Queso', 'Aguacate',],
            datasets: [{
                label: 'Compras',
                data: compras,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
    const myChart = new Chart(ctx, ConfigCTX1);

    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Huevos', 'Cereal', 'Queso', 'Aguacate',],
            datasets: [{
                label: 'Stock',
                data: stock,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


