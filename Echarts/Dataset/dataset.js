var dom = document.getElementById("graficoBarras");
var chart = echarts.init(dom);
var opcao;

function gerador(min, max) {
    const numeroAleatorio = Math.random() * (max - min) + min;
    return parseFloat(numeroAleatorio.toFixed(2));
}


function gerarAnoAleatorio() {
    // Gera um número aleatório entre 1990 e 2018
    return Math.floor(Math.random() * (2018 - 1990 + 1)) + 1990;
}
  

setTimeout(function () { // setTimeout serve para adicionar um delay na execução do código
    const primeiroAno = gerarAnoAleatorio();

    // Calcula os 5 anos seguintes
    const anos = Array.from({ length: 6 }, (_, i) => primeiroAno + i);

    opcao = {
      legend: {}, // serve para mostrar a legenda do gráfico (não queremos)
      tooltip: { // serve para mostrar informações ao passar o mouse sobre o gráfico
          trigger: 'axis', // mostra informações ao passar o mouse sobre o eixo X
          showContent: false // não mostra informações ao passar o mouse sobre o eixo Y
      },
      dataset: { // serve para definir os dados do gráfico
          source: [ // serve para definir os dados do gráfico
              ['produto', ...anos],
              ['Produto A', gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0)],
              ['Produto B', gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0)],
              ['Produto C', gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0)],
              ['Produto D', gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0), gerador(0.0, 100.0)]
          ]
      },

      xAxis: { type: 'category' }, // serve para definir o tipo de eixo X
      yAxis: {gridIndex: 0}, // serve para definir o tipo de eixo Y
      grid: {top: '55%'}, // serve para definir a posição do gráfico
      series: [ // serve para definir o tipo de gráfico
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          }
      ]
    }
    chart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            const dimensao = xAxisInfo.value + 1;
            const maxYear = Math.max(...anos); // Encontrar o ano com a maior dimensão
            const produtos = ['Produto A', 'Produto B', 'Produto C', 'Produto D'];
            const productName = produtos[dimensao - 1]; // Mapear a dimensão para o nome do produto
            chart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: `${productName}: {@${dimensao}} ({d}%)`
                    },
                    encode: {
                        value: dimensao,
                        tooltip: dimensao
                    }
                },
                maxYear: maxYear // Adicionar o ano com a maior dimensão como uma propriedade
            });
        }
    });

    chart.setOption(opcao);
});
opcao && chart.setOption(opcao);
