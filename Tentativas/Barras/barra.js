var chartData = [];

        function validar() {
            var nomeInput = document.getElementById('nome');
            var valorInput = document.getElementById('valor');

            const nome = nomeInput.value.trim();
            const valor = parseFloat(valorInput.value);

            if (nome !== '' || isNaN(valor)) {
                chartData.push({ nome, valor });
                atualizarGrafico();
            }

            nomeInput.value = '';
            valorInput.value = '';
        }

        function atualizarGrafico() {
            var containerGrafico = document.getElementById('chart-container');
            let svg = containerGrafico.querySelector('svg');
            if (!svg) {
                svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                containerGrafico.appendChild(svg);
            }

            const largura = 100 / chartData.length;

            chartData.forEach((data, index) => {
                const barra = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                barra.setAttribute('x', `${index * largura}%`);
                barra.setAttribute('y', `${100 - data.valor}%`);
                barra.setAttribute('width', `${largura}%`);
                barra.setAttribute('height', `${data.valor}%`);
                barra.setAttribute('class', 'barra');
            
                const texto = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                texto.setAttribute('x', `${index * largura + largura / 2}%`);
                texto.setAttribute('y', '95%');
                texto.setAttribute('text-anchor', 'middle');
                texto.textContent = data.nome;
            
                svg.appendChild(barra);
                svg.appendChild(texto);
            });
        }