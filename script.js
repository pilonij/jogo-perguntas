const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você vê uma pessoa que possui deficiência com dificuldades para se alimentar. ",
        alternativas: [
            {
                texto: " Você ajuda ela a se alimentar, mas ela diz que você deveria virar deficiência para comer menos também ",
                afirmacao: "voce fica frustado",
            },
            {
                texto: ". Você ri e segue sua vida, mas é atropelado em seguida e vira deficiente também.",
                afirmacao: "voce sente remorso",
            },]
    },
    {
        enunciado: " Você trabalha em uma grande produtora de papel e descobre que eles estão desmatando árvores de forma descontrolada e conta a lei. ",
        alternativas: [
            {
                texto: " Você garante seu emprego e não fala nada, é uma árvore da espécie da espécie Pinheiro entra em extinção. ",
                afirmacao: "voce fica com a consciencia pesada,"
            },
            {
                texto: "Você denúncia as autoridades ambientais locais para que providências sejam tomadas, mas perde seu emprego.",
                afirmacao: "voce fica sem dinhaeiro pro aluguel e vai morar na rua",
            },
        ]
    },
    {
        enunciado: "Uma empresa grande de produção de filmes quer te contratar para elaborar dublagens com IA.",
        alternativas: [
            {
                texto: "Voce faz o que a empresa pede,e destrói o trabalho dos outros, mas ganha um aumento.",
                afirmacao: "o aumento nao foi nem de 5%",
            },
            {
                texto: "Você desenvolve uma campanha de incentivo a dublagem viva, mas outra pessoa é contratada e você fica desempregado. ",
                afirmacao: "voce fica sem dinheiro e precisa pedir esmola",
            },
        ]
    },

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo, voce escolheu..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();
