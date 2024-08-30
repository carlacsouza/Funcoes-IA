const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Imagine que você tirou 30 dias de férias e pode escolher seu destino, podendo levar quem quiser. Porém está com dúvida para onde ir, nós podemos te ajudar. Qual o clima de sua preferência?",
        alternativas: [
            {
                texto: "Lugares quentes.",
                afirmacao: "lembre-se de levar protetor solar.",
            },
            {
                texto: "Lugares frios.",
                afirmacao: "Lembre-se de levar agasalhos",
            }
        ]
    },
    {
        enunciado: "Ótimo! Continuando com a sua preferência, o lugar que deseja ir, será...",
        alternativas: [
            {
                texto: "Lugares agitados e movimentados",
                afirmacao: "Sempre fique atento, mantenha seus pertences próximos.",
            },
            {
                texto: "Lugares calmos e aconchegantes;",
                afirmacao: "Aproveite suas férias para tirar um descanso",
            }
        ]
    },
    {
        enunciado: "Maravilhoso! Me conte... Quem irá te acompanhar?",
        alternativas: [
            {
                texto: "Familia e/ou pets.",
                afirmacao: "Hóteis e resorts são a melhor opção para você.",
            },
            {
                texto: "Amigos.",
                afirmacao: "Airbnb e empresas de turismo podem te auxiliar.",
            }
        ]
    },
    {
        enunciado: "Bom! de acordo com seu financeiro, quanto pretende gastar em sua viagem?",
        alternativas: [
            {
                texto: "Até três sálarios mínimos.",
                afirmacao: "Boa opção para você, são viagens nacionais.",
            },
            {
                texto: "Acima de trẽs sálarios mínimos",
                afirmacao: "Você irá adorar conhecer novos paises.",
            }
        ]
    },
    {
        enunciado: "Para finalizar... Qual o meio de locomoção você pretende utilizar para chegar ao seu destino.",
        alternativas: [
            {
                texto: "Carro ou motocicleta.",
                afirmacao: "Seu destino pode ser próximo de você.",
            },
            {
                texto: "Avião ou ônibus.",
                afirmacao: "Sair de sua zona de conforto e conhecer novos horizontes.",
            }
        ]
    },
];
 
let atual = 0; 
let perguntaAtual; 
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
        
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Seguindo suas respostas em nossa pesquisa, a viagem ideal para você seria referente à essas sugestões:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
