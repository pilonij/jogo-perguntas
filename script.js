const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
                {
                    enunciado : "Você vê uma pessoa que possui deficiência com dificuldades para se alimentar. ",
                    alternativas: [" Você ajuda ela a se alimentar, mas ela diz que você deveria virar deficiência para comer menos também ", ". Você ri e segue sua vida, mas é atropelado em seguida e vira deficiente também."]
                },
                {
                    enunciado : " Você trabalha em uma grande produtora de papel e descobre que eles estão desmatando árvores de forma descontrolada e conta a lei ",
                    alternativas: ["Você garante seu emprego e não fala nada, é uma árvore da espécie da espécie Pinheiro entra em extinção", " Você denúncia as autoridades ambientais locais para que providências sejam tomadas, mas perde seu emprego"]
                },
                {
                    enunciado : "Uma empresa grande de produção de filmes quer te contratar para elaborar dublagens com IA.",
                    alternativas: [" Voce faz o que a empresa pede,e destrói o trabalho dos outros, mas ganha um aumento", "Você desenvolve uma campanha de incentivo a dublagem viva, mas outra pessoa é contratada e você fica desempregado"]
                },

]

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas . textContent = perguntaAtual.enunciado;
}

mostraPerguntas();