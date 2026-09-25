import { salvarCadastro, carregarCadastro } from "./armazenamento.js";

export function configurarFormulario() {
    const formulario = document.getElementById("formularioCadastro");

    if (!formulario) {
        return;
    }

    const dadosRecuperados = carregarCadastro();

    if (dadosRecuperados) {
        document.getElementById("nome").value = dadosRecuperados.nome;
        document.getElementById("email").value = dadosRecuperados.email;
        document.getElementById("cpf").value = dadosRecuperados.cpf;
        document.getElementById("nascimento").value = dadosRecuperados.nascimento;
        document.getElementById("telefone").value = dadosRecuperados.telefone;
        document.getElementById("endereco").value = dadosRecuperados.endereco;
        document.getElementById("cep").value = dadosRecuperados.cep;
        document.getElementById("cidade").value = dadosRecuperados.cidade;
        document.getElementById("estado").value = dadosRecuperados.estado;
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const dados = new FormData(formulario);
        const dadosObjeto = Object.fromEntries(dados);

        const campos = formulario.querySelectorAll("input[required]");
        let formularioValido = true;

        campos.forEach(function(campo) {
            campo.style.border = "";

            if (!campo.value.trim()) {
                campo.style.border = "2px solid red";
                formularioValido = false;
            }
        });

        if (formularioValido) {
            salvarCadastro(dadosObjeto);
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Preencha todos os campos obrigatórios.");
        }
    });
}