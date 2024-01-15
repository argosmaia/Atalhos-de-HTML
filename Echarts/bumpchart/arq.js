function drawBumpChart() {
    // Seus dados para o bump chart
    var data = [
        ['A', 10],
        ['B', 15],
        ['C', 8],
        ['D', 20],
        ['E', 5]
        // Adicione mais dados conforme necessário
    ];

    // Organize os dados em ordem crescente
    data.sort(function(a, b) {
        return a[1] - b[1];
    });

    // Extraia os nomes das categorias e os valores
    var categories = data.map(function(item) {
        return item[0];
    });

    var values = data.map(function(item) {
        return item[1];
    });

    // Configure o gráfico
    var chart = echarts.init(document.getElementById('bumpChart'));
    var option = {
        title: {
            text: 'Bump Chart'
        },
        xAxis: {
            type: 'category',
            data: categories
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'line',
            data: values,
            smooth: true
        }]
    };

    // Atualize o gráfico com as opções
    chart.setOption(option);
}

// Chame a função para desenhar o bump chart
drawBumpChart();