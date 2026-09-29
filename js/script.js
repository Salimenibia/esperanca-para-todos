import { configurarFormulario } from "./formulario.js";
import { carregarPagina } from "./paginas.js";


const botaoModoEscuro = document.createElement("button");
botaoModoEscuro.textContent = "Modo escuro";
botaoModoEscuro.id = "botaoModoEscuro";

const header = document.querySelector("header");

console.log("HEADER:", header);

console.log(header);

if (header) {
    header.appendChild(botaoModoEscuro);

    botaoModoEscuro.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}

// Validação do formulário de cadastro

const conteudo = document.getElementById("conteudo");
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const destino = event.currentTarget.getAttribute("href");

        console.log(destino);
        
        carregarPagina(destino, conteudo);

        if (destino === "cadastro.html") {
            configurarFormulario();
        }
    });
});
       

        
