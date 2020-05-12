var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");
var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

botaoLancarDado.addEventListener("click", function () {
  var dado = Math.floor(Math.random() * 6) + 1;
  if (dado == 1) {
    pontuacao[jogadorAtual] = 0;
    pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    jogadorAtual = 1 - jogadorAtual;
  } else {
    pontuacao[jogadorAtual] += dado;
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesRodadas[jogadorAtual].textContent = dado;
  }
  if (pontuacao[jogadorAtual] >= 100) {
    jogadorAtual += 1;
    console.log(jogadorAtual);
    $("#GanhadorModal").modal("toggle");
    document.querySelector("#numero-do-ganhador").innerHTML = jogadorAtual;
  }
});

var botaoPassarVez = document.querySelector("#botao-passar-vez");

botaoPassarVez.addEventListener("click", function () {
  pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
  pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
  jogadorAtual = 1 - jogadorAtual;
});

var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var botaoModalReiniciar = document.querySelector("#botao-modal-reiniciar");
var sorteio = 0;

botaoModalReiniciar.addEventListener("click", function () {
  let jogadorAtual = 0;
  do {
    pontuacao[jogadorAtual] = 0;
    pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    jogadorAtual += 1;
  } while (jogadorAtual < 2);

  sorteio = Math.random();
  if (sorteio < 0.5) {
    jogadorAtual = Math.floor(sorteio);
  } else {
    jogadorAtual = Math.ceil(sorteio);
  }
});

botaoNovoJogo.addEventListener("click", function () {
  let jogadorAtual = 0;
  do {
    pontuacao[jogadorAtual] = 0;
    pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    jogadorAtual += 1;
  } while (jogadorAtual < 2);

  sorteio = Math.random();
  if (sorteio < 0.5) {
    jogadorAtual = Math.floor(sorteio);
  } else {
    jogadorAtual = Math.ceil(sorteio);
  }
});
