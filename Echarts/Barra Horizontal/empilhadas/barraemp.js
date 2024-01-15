// Dados fictícios de pesquisas universitárias
const dadosPesquisas = [
    { nome: "Pesquisa", valores: [150, 200, 120, 180] },
    { nome: "Pesquisa 2", valores: [80, 120, 90, 150] },
    { nome: "Pesquisa 3", valores: [50, 80, 60, 100] },
    { nome: "Pesquisa 4", valores: [30, 40, 25, 50] }
];

// Extrair rótulos e valores dos dados fictícios
const rotulos = dadosPesquisas.map(pesquisa => pesquisa.nome);
const valores = dadosPesquisas.map(pesquisa => pesquisa.valores);

// Configurar o gráfico usando ECharts
const myChart = echarts.init(document.getElementById('graficoBarras'));

const opcoes = {
    title: {
        text: 'Vendas para o Mercado - Pesquisas Universitárias',
        left: '3%', // alinhamento horizontal
        right: '4%', // alinhamento horizontal
        top: '3%', // alinhamento vertical
        /** Tais alinhamentos acima são necessários para que o título não fique
         * sobreposto aos rótulos do eixo Y.
        */
    },
    legend: {
        data: rotulos
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Segmento 1', 'Segmento 2', 'Segmento 3', 'Segmento 4']
    },
    series: valores.map((valor, index) => ({
        name: rotulos[index],
        type: 'bar',
        stack: 'total',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: valor
    }))
};

// Aplicar as opções e renderizar o gráfico
myChart.setOption(opcoes);
