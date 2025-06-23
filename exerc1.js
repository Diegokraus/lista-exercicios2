// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.
//********************************** */

const prompt = require("prompt-sync")({ sigint: true });

function ehDataValida(dia, mes, ano) {
  if (
    !Number.isInteger(dia) ||
    !Number.isInteger(mes) ||
    !Number.isInteger(ano)
  ) {
    return false;
  }

  if (mes < 1 || mes > 12) {
    return false;
  }

  const diasPorMes = [
    31,
    ehAnoBissexto(ano) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return dia >= 1 && dia <= diasPorMes[mes - 1];
}

function ehAnoBissexto(ano) {
  return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0);
}

const dia = Number(prompt("Digite o dia: "));
const mes = Number(prompt("Digite o mês: "));
const ano = Number(prompt("Digite o ano: "));

if (ehDataValida(dia, mes, ano)) {
  console.log("Data válida.");
} else {
  console.log("Data inválida.");
}
