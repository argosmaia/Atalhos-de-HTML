var ROOT_PATH = 'https://echarts.apache.org/examples';

// arquivos inicializadores
var dom = document.getElementById("main");
var grafico = echarts.init(dom);
var opc;

$.get(ROOT_PATH + '/data/asset/data/life-expectancy-table.json', function (_rawdata) { 
    return(_rawdata);
});

function run(_rawdata) {
    const paises = [
        'Finlândia',
        'França',
        'Alemanha',
        'Islândia',
        'Noruega',
        'Polônia',
        'Russia',
        'Reino Unido',
    ];

    const datasetWithFilters = [];
    const seriesList = [];

    echarts.util.each(paises, function (pais) {
        var datasetId = 'dataset_' + pais;
        datasetWithFilters.push({
            id: datasetId,
            fromDatasetId: 'dataset_raw',
            transform: {
                type: 'filter',
                config: {
                    and: [
                        { dimension: 'Ano', gte: 1950 },
                        { dimension: 'País', '=': pais }
                    ]
                }
            }
        });
        seriesList.push({
            type: 'line',
            datasetId: datasetId,
            showSymbol: false,
            name: pais,
            endLabel: {
                show: true,
                formatter: function (params) {
                    return params.value[3] + ': ' + params.value[0];
                }
            },
            labelLayout: {
                moveOverlap: 'shiftY'
            },
            emphasis: {
                focus: 'series'
            },
            encode: {
                x: 'Ano',
                y: 'Expectativa de vida',
                label: ['País', 'Renda', 'Ano'],
                itemName: 'Ano',
                tooltip: ['Renda'],
            }
            
        });
    });
    opc = {
        animationDuration: 10000,
        dataset: [
            {
                id: 'dataset_raw',
                source: _rawdata
            },
            ...datasetWithFilters
        ],
        title: {
            text: 'Renda',
        },
        tooltip: {
            order: 'valueDesc',
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            nameLocation: 'middle'
        },
        yAxis: {
            name: 'Renda',
        },
        grid: {
            right: 140
        },
        series: seriesList,
    };
    grafico.setOption(opc);
}

opc && grafico.setOption(opc);