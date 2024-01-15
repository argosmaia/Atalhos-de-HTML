var echarts = require('echarts');

var app = {};

const grafico = document.getElementById('myChart');

const meuGrafico = echarts.init(grafico);

const nomes = [
    'Laranja',
    'Tomate',
    'Maçã',
    'Sakana',
    'Banana',
    'Iwashi',
    'Peixe Rápido',
    'Limão',
    'Massa'
];

const anos = ['2001', '2002', '2003', '2004', '2005', '2006'];

const embaralha = (array) => {
    let indiceAtual = array.length;
    let valorTemporario = 0;
    while (indiceAtual > 0) {
        valorTemporario = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;
        [array[indiceAtual], array[valorTemporario]] = [
            array[valorTemporario], 
            array[indiceAtual]
        ];
    }
    return array;
};

const geraDados = () => {
    const classificacao = Array.from({length: nomes.length}, (_, i) => i + 1);
    