const selectMarca = document.getElementById("select-marca");
const selectModelo = document.getElementById("select-modelo");

// 1. Preenche o select de Marcas (sem duplicadas)
const marcasUnicas = [...new Set(motorcycleInfo.map(moto => moto.brand))].sort();

marcasUnicas.forEach((marca) => {
    const option = document.createElement("option");
    option.value = marca; // Usa o nome exato da marca como valor
    option.textContent = marca;
    selectMarca.appendChild(option);
});

// 2. Função para atualizar os modelos com base na marca selecionada
function atualizarModelos() {
    const marcaSelecionada = selectMarca.value;

    // Limpa o select de modelos mantendo apenas a opção padrão
    selectModelo.innerHTML = '<option value="">Todos</option>';

    // Se nenhuma marca específica estiver selecionada ou for "Marca"/"Todas", mostra todos os modelos
    const motosFiltradas = marcaSelecionada
        ? motorcycleInfo.filter(moto => moto.brand === marcaSelecionada)
        : motorcycleInfo;

    // Extrai os modelos das motos filtradas e remove duplicados (caso haja)
    const modelosUnicos = [...new Set(motosFiltradas.map(moto => moto.model))].sort();

    // Adiciona as novas opções de modelo
    modelosUnicos.forEach((modelo) => {
        const option = document.createElement("option");
        option.value = modelo;
        option.textContent = modelo;
        selectModelo.appendChild(option);
    });
}

// 3. Adiciona o evento 'change' no select de marcas
selectMarca.addEventListener("change", atualizarModelos);

// 4. Executa uma vez ao carregar a página para carregar todos os modelos inicialmente
atualizarModelos();