// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache.hasOwnProperty(chave)) {
      console.log(`Cache hit para argumentos: ${chave}`);
      return cache[chave];
    }

    console.log(`Calculando para: ${chave}`);
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

const prompt = require("prompt-sync")({ sigint: true });

function fatorial(n) {
  if (n < 0) throw new Error("Fatorial não definido para negativos.");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

while (true) {
  const entrada = prompt(
    "Digite um número para calcular o fatorial (ou vazio para sair): "
  );
  if (entrada.trim() === "") break;

  const numero = Number(entrada);
  if (isNaN(numero)) {
    console.log("Digite um número válido.");
    continue;
  }

  try {
    const resultado = fatorialMemo(numero);
    console.log(`Resultado: ${resultado}`);
  } catch (err) {
    console.log("Erro:", err.message);
  }
}
