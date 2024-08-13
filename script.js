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
                afirmacao: "afirmacao",
            },
            {
                texto: ". Você ri e segue sua vida, mas é atropelado em seguida e vira deficiente também.",
                afirmacao: "afirmacao",
            },]
    },
    {
        enunciado: " Você trabalha em uma grande produtora de papel e descobre que eles estão desmatando árvores de forma descontrolada e conta a lei. ",
        alternativas:[
            {
                texto: " Você garante seu emprego e não fala nada, é uma árvore da espécie da espécie Pinheiro entra em extinção. ",
                afirmacao: "afirmacao,"
            },
            {
                texto: "Você denúncia as autoridades ambientais locais para que providências sejam tomadas, mas perde seu emprego.",
                afirmacao: "afirmacao",
            },
                        ]
},
{
    enunciado: "Uma empresa grande de produção de filmes quer te contratar para elaborar dublagens com IA.",
    alternativas: [  
        {
            texto: "Voce faz o que a empresa pede,e destrói o trabalho dos outros, mas ganha um aumento.",
            afirmacao: "afirmacao",
        },
        {
            texto:"Você desenvolve uma campanha de incentivo a dublagem viva, mas outra pessoa é contratada e você fica desempregado. ",
            afirmacao: "afirmacao",
        },
            ]
},

]

let atual = 0;
let perguntaAtual;

function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas ();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}



mostraPerguntas();