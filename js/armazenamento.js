export function salvarCadastro(dados) {
    const dadosJSON = JSON.stringify(dados);
    localStorage.setItem("cadastro", dadosJSON);
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}