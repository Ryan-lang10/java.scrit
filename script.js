// Seleciona as informações que serão manipuladas 
const botao = document.getElementById("informacoes");
const mensagem = document.getElementById("mensagem");

// Adiciona evento de clique no botão
botao.addEventListener("click", () => {
    // Solicita o nome do cliente
    let nome = prompt("Qual é o seu nome?");

    // Condição para verificar se o nome foi digitado corretamente 
    if (nome) {
        // Solicita o modelo do iPhone
        let modelo = prompt("Qual é o modelo do seu iPhone?");
        
        // Verifica se o modelo foi fornecido
        if (modelo) {
            let ano = prompt("Qual é o ano de lançamento do seu iPhone?");
            // Exibe a mensagem com as informações coletadas
            mensagem.innerText = `Olá, ${nome}! Seu iPhone é o modelo ${modelo} e foi lançado em ${ano}.`;
            mensagem.style.color = "green"; // Altera a cor do texto para verde
        } else {
            mensagem.innerText = "Por favor, insira um modelo válido.";
            mensagem.style.color = "red"; // Cor do texto
        }
    } else {
        mensagem.innerText = "Nome não fornecido, por favor, insira um nome.";
        mensagem.style.color = "red"; // Altera a cor do texto para vermelho
    }
});
