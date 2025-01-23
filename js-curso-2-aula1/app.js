let listaDeNumerosSorteados = [];
let limiteNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
  if (listaDeNumerosSorteados.length == limiteNumeros) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  let mensagemTentativas = numeroSecreto > 1 ? " tentativa" : " tentativas";

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    exibirTextoNaTela(
      "p",
      "Você descobriu o número secreto com: " + tentativas + mensagemTentativas
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "Número menor!");
    } else {
      exibirTextoNaTela("p", "Número maior!");
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
