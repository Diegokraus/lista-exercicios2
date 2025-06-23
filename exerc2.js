// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
//************************************************* */

const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

while (!acertou) {
  const entrada = prompt("Adivinhe o número entre 1 e 100: ");
  const palpite = Number(entrada);
  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log("Digite um número válido!");
    continue;
  }

  if (palpite === numeroSecreto) {
    console.log(`Você acertou em ${tentativas} tentativas!`);
    acertou = true;
  } else if (palpite < numeroSecreto) {
    console.log("Mais alto!");
  } else {
    console.log("Mais baixo!");
  }
}
