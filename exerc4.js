// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.
//************************************* */

const prompt = require("prompt-sync")();

function fatorial(n) {
  if (n < 0) {
    throw new Error("Fatorial não definido para números negativos.");
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

try {
  const numero = Number(
    prompt("Digite um número inteiro para calcular o fatorial: ")
  );
  const resultado = fatorial(numero);
  console.log(`Fatorial de ${numero} é: ${resultado}`);
} catch (erro) {
  console.error("Erro:", erro.message);
}
