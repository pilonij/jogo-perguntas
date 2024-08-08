const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
                {
                    enunciado : "Você vê uma pessoa que possui deficiência com dificuldades para se alimentar. ",
                    alternativas: [" Você ajuda ela a se alimentar, mas ela diz que você deveria virar deficiência para comer mesmo pois está muito gordo ", ". Você ri e segue sua vida, mas é atropelado em seguida e vira deficiente também."]
                },
                {
                    enunciado : "No âmbito ambiental, você prefere:",
                    alternativas: ["Alternaaativa 3", "Alternativa 4"]
                },
                {
                    enunciado : "No âmbito tecnológico, você prefere:",
                    alternativas: ["Alternaaativa 5", "Alternativa 6"]
                },

]

let atual = 0;
