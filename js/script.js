// Validação do formulário de cadastro

const conteudo = document.getElementById("conteudo");
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const destino = event.currentTarget.getAttribute("href");

        console.log(destino);

        if (destino === "index.html") {
            conteudo.innerHTML = `
                <section>
                    <h2>Sobre a ONG</h2>

                    <article>
                        <h2>Quem somos?</h2>

                        <p>
                            A Esperança para Todos é uma organização não governamental
                            que busca ajudar pessoas em situação de vulnerabilidade,
                            oferecendo apoio e oportunidades para uma vida mais digna.
                        </p>

                        <img src="../imagens/imagem.ong.jpg" alt="Voluntários ajudando a causa">
                    </article>

                    <section>
                        <h2>Faça parte dessa transformação</h2>

                        <aside>
                            <p>
                                Você pode ajudar a <strong>Esperança para Todos</strong>
                                a transformar vidas. Seja como voluntário, você poderá
                                participar de nossas campanhas, ações sociais e atividades,
                                contribuindo diretamente para ajudar quem mais precisa.
                            </p>

                            <p>
                                Não é preciso fazer algo grandioso para fazer a diferença.
                                Seu tempo, sua dedicação e sua vontade de ajudar já podem
                                transformar o dia de alguém.
                            </p>

                            <p>
                                <strong>Venha fazer parte da nossa equipe de voluntários!</strong>
                            </p>
                        </aside>

                        <p>
                            <a href="cadastro.html">Cadastre-se como voluntário</a>
                        </p>
                    </section>
                </section>

                <section>
                    <h2>Entre em contato</h2>
                    <p>Email: esperancaparatodos@gmail.com</p>
                    <p>Telefone: (11) 3456-7890</p>
                </section>
            `;
        }

        if (destino === "sobre.html") {
            conteudo.innerHTML = `
                <section>
                    <h2>Quem somos?</h2>
                    <p>
                        A Esperança para Todos é uma organização não governamental
                        que busca ajudar pessoas que enfrentam situações de vulnerabilidade.
                        Nosso objetivo é oferecer apoio, acolhimento e oportunidades,
                        contribuindo para uma vida mais digna e com mais esperança.
                    </p>
                </section>

                <section>
                    <h2>O que fazemos?</h2>
                    <p>
                        Realizamos projetos e ações sociais voltados para as necessidades
                        da comunidade. Buscamos oferecer apoio às pessoas que precisam,
                        além de incentivar a solidariedade e a participação da sociedade.
                    </p>
                </section>

                <section>
                    <h2>Nossa missão</h2>
                    <p>
                        Nossa missão é levar esperança, apoio e oportunidades para todos.
                        Queremos contribuir para uma sociedade mais solidária, inclusiva
                        e acolhedora, onde as pessoas possam ter mais oportunidades
                        para melhorar suas vidas.
                    </p>
                </section>

                <section>
                    <h2>Como você pode ajudar?</h2>
                    <p>
                        Existem várias formas de fazer parte da nossa causa. Você pode
                        contribuir como voluntário, participar de nossas ações ou realizar
                        uma doação. Cada contribuição, independentemente do tamanho,
                        ajuda a ampliar nosso trabalho e alcançar mais pessoas.
                    </p>
                </section>

                <section>
                    <h2>Juntos podemos fazer a diferença</h2>
                    <p>
                        Acreditamos que pequenas atitudes podem gerar grandes mudanças.
                        Quando pessoas se unem por uma causa, é possível transformar
                        realidades e construir um futuro melhor para todos.
                    </p>
                </section>
            `;
        }

        if (destino === "projetos.html") {
            conteudo.innerHTML = `
                <section>
                    <h2>O que a ONG faz?</h2>

                    <article>
                        <h3>Nosso trabalho</h3>
                        <p>
                            A Esperança para Todos desenvolve diferentes ações para apoiar
                            pessoas que precisam de ajuda. Nosso trabalho busca atender
                            necessidades da comunidade e proporcionar melhores oportunidades.
                        </p>
                    </article>
                </section>

                <section>
                    <h2>🤝 Voluntariado</h2>

                    <article>
                        <h3>Como participar?</h3>

                        <p>
                            Contamos com voluntários que ajudam na organização das campanhas,
                            na distribuição de doações e na realização das ações sociais.
                            Qualquer pessoa que queira contribuir pode fazer parte dessa iniciativa.
                        </p>

                        <p>
                            Para se tornar voluntário, acesse nossa página de cadastro e
                            preencha o formulário com seus dados.
                        </p>

                        <p>
                            <a href="cadastro.html">Cadastre-se como voluntário</a>
                        </p>
                    </article>

                    <details class="modal">
                        <summary>Saiba mais sobre o voluntariado</summary>

                        <div class="modal-content">
                            <h3>Voluntariado</h3>
                            <p>
                                Faça parte das nossas ações e ajude a transformar vidas.
                            </p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>🎁 Campanhas de doação</h2>

                    <article>
                        <h3>Como ajudar?</h3>

                        <span class="badge">Campanha ativa</span>

                        <p>
                            Organizamos campanhas para arrecadar alimentos, roupas,
                            produtos de higiene e outros itens que possam ser destinados
                            às pessoas que precisam.
                        </p>

                        <p>
                            As doações recebidas são utilizadas para manter nossos projetos
                            e ajudar nas atividades realizadas pela ONG.
                        </p>

                        <div class="alert">
                            <strong>Importante:</strong>
                            As doações ajudam a manter nossas ações sociais.
                        </div>
                    </article>
                </section>

                <section>
                    <h2>❤️ Ações sociais</h2>

                    <article>
                        <h3>Como atuamos</h3>
                        <p>
                            Promovemos ações em diferentes momentos do ano para levar apoio
                            e acolhimento à comunidade, buscando alcançar o maior número
                            possível de pessoas.
                        </p>
                    </article>
                </section>
            `;
        }

        if (destino === "contato.html") {
            conteudo.innerHTML = `
                <p>
                    A Esperança para Todos está sempre aberta para receber dúvidas,
                    sugestões e pessoas que desejam contribuir com nossas ações.
                    Entre em contato conosco por um dos canais abaixo.
                </p>

                <section>
                    <h2>📧 E-mail</h2>
                    <p>esperancaparatodos@gmail.com</p>
                </section>

                <section>
                    <h2>📞 Telefone</h2>
                    <p>(11) 3456-7890</p>
                </section>

                <section>
                    <h2>📱 Redes sociais</h2>
                    <p>
                        Instagram: @esperancaparatodos <br>
                        Facebook: Esperança para Todos
                    </p>
                </section>

                <section>
                    <h2>🤝 Quer fazer parte?</h2>
                    <p>
                        Se você deseja ser voluntário, realizar uma doação ou conhecer
                        melhor nossos projetos, entre em contato conosco. Toda ajuda
                        é importante para continuarmos transformando vidas.
                    </p>
                </section>
            `;
        }

        if (destino === "cadastro.html") {
            conteudo.innerHTML = `
                <p>
                    Quer fazer parte da Esperança para Todos?
                    Preencha o formulário abaixo para se cadastrar como voluntário
                    e ajudar em nossas ações sociais.
                </p>

                <form id="formularioCadastro">
                    <fieldset>
                        <legend>Dados pessoais</legend>

                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome" required>

                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf"
                            pattern="[0-9]{11}"
                            maxlength="11"
                            required>

                        <br><br>

                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" required>

                        <br><br>

                        <label for="nascimento">Data de Nascimento</label>
                        <input type="date" id="nascimento" name="nascimento" required>

                        <label for="telefone">Telefone:</label>
                        <input type="text" id="telefone" name="telefone"
                            pattern="\\(?[0-9]{2}\\)?\\s?[0-9]{4,5}-?[0-9]{4}"
                            maxlength="15"
                            required>

                        <br><br>
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                        <label for="endereco">Endereço</label>
                        <input type="text" id="endereco" name="endereco" required>

                        <br><br>

                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep"
                            pattern="[0-9]{5}-?[0-9]{3}"
                            maxlength="9"
                            required>

                        <br><br>

                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" required>

                        <br><br>

                        <label for="estado">Estado</label>
                        <input type="text" id="estado" name="estado" required>
                    </fieldset>

                    <br>

                    <input type="submit" value="cadastrar">
                </form>
            `;

            const dadosSalvos = localStorage.getItem("cadastro");
            const dadosRecuperados = JSON.parse(dadosSalvos);

            const formulario = document.getElementById("formularioCadastro");

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

            

            if (formulario) {
                formulario.addEventListener("submit", function(event) {
                    event.preventDefault();

                    const dados = new FormData(formulario);
                    const dadosObjeto = Object.fromEntries(dados);
                    const dadosJSON = JSON.stringify(dadosObjeto);

                    localStorage.setItem("cadastro", dadosJSON);

                    

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
                        alert("Cadastro realizado com sucesso!");
                    } else {
                        alert("Preencha todos os campos obrigatórios.");
                    }
                });
            }
        }
    });
});