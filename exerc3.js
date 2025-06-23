// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.
//************************************************ */

const prompt = require("prompt-sync")();
const entrada = prompt("Digite uma frase: ");
const palavras = entrada.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i];
  let contagem = 0;

  for (let j = 0; j < palavras.length; j++) {
    if (palavras[j] === palavraAtual) {
      contagem++;
    }
  }

  if (contagem === 1) {
    unicas.push(palavraAtual);
  }
}

console.log("Palavras únicas:", unicas);
