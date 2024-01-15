// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Função para gerar valores aleatórios entre um intervalo
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Função para obter uma profissão aleatória
    function getRandomProfissao() {
        const profissoes = ['Engenheiro', 'Professor', 'Médico', 'Advogado', 'Artista'];
        const randomIndex = getRandomInt(0, profissoes.length - 1);
        return profissoes[randomIndex];
    }

    // Dados fictícios para o gráfico
    const dados = [
        { nome: getRandomProfissao(), valor: getRandomInt(100, 500) },
        { nome: getRandomProfissao(), valor: getRandomInt(100, 500) },
        { nome: getRandomProfissao(), valor: getRandomInt(100, 500) },
        { nome: getRandomProfissao(), valor: getRandomInt(100, 500) },
        { nome: getRandomProfissao(), valor: getRandomInt(100, 500) }
    ];

    // Obtenha o elemento canvas e seu contexto
    const canvas = document.getElementById('graficoBarras');
    const ctx = canvas.getContext('2d');

    // Ajuste o tamanho do gráfico
    canvas.width = 800;
    canvas.height = 600;

    // Crie um gráfico de barras horizontais usando ECharts
    const myChart = echarts.init(canvas);
    const option = {
        grid: {
            left: '10%',
            right: '10%',
            top: '10%',
            bottom: '10%',
        },
        xAxis: { show: false },
        yAxis: { type: 'category', data: dados.map(item => item.nome) },
        series: [{
            type: 'bar',
            data: dados.map(item => item.valor),
            label: {
                show: true,
                position: 'right',
                formatter: '{c}'
            }
        }]
    };
    
    // Configurar opções e renderizar o gráfico
    myChart.setOption(option);

    // Converta o gráfico ECharts para imagem e desenhe no contexto do canvas
    myChart.getAsImage().then(function(image) {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    });
});
