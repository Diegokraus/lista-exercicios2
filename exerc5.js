// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

const prompt = require("prompt-sync")();

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function salvarBusca(palavra) {
  console.log(`Buscando por: "${palavra}"`);
}

const buscarDebounce = debounce(salvarBusca, 2000);

console.log("Digite palavras para buscar (vazio para sair):");

while (true) {
  const entrada = prompt("Entrada: ");
  if (entrada.trim() === "") {
    console.log("Encerrando...");
    break;
  }

  buscarDebounce(entrada);
}
