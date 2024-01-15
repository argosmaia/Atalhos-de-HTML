let myChart;

const atualizaGrafico = () => {
    const insereValor = document.getElementById('insereValor').value;
    const Arvalores = insereValor.split(',').map(Number);
    const insereTexto = document.getElementById('insereTexto').value;
    const ArTexto = insereTexto.split(',').map(String);

    const somaValores = Arvalores.reduce((total, valor) => total + valor, 0);

    if (somaValores <= 100) {
        if (!myChart) {
            const ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ArTexto,
                    datasets: [{
                        data: Arvalores,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                        ],
                    }]
                },
                options: {
                    cutout: '80%',  // Tamanho do furo no meio do doughnut
                },
            });
        } else {
            // Se o gráfico já existir, atualize apenas os dados
            myChart.data.labels = ArTexto;
            myChart.data.datasets[0].data = Arvalores;
            myChart.update();
        }
    } else {
        alert('A soma dos valores não pode ultrapassar 100%');
    }

    // Desabilita o botão se a soma dos valores for igual a 100
    document.querySelector('button').disabled = somaValores === 100;
};