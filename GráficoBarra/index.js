// Variável global para manter a referência ao gráfico
let myChart;

const atualizaGrafico = () => {
    const insereValor = document.getElementById('insereValor').value;
    const Arvalores = insereValor.split(',').map(Number);
    const insereTexto = document.getElementById('insereTexto').value;
    const ArTexto = insereTexto.split(',').map(String);

    if (!myChart) {
        // Se o gráfico ainda não existir, crie-o
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ArTexto, // Usa diretamente os textos inseridos
                datasets: [{
                    label: 'Valores',
                    data: Arvalores,
                    backgroundColor: ['rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)'],      
                    borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 206, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(153, 102, 255)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 206, 86)',
                                'rgb(75, 192, 192)'],   
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        });
    } else {
        // Se o gráfico já existir, atualize apenas os dados
        myChart.data.labels = ArTexto;
        myChart.data.datasets[0].data = Arvalores;
        myChart.update();
    }
};
