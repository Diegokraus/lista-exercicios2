// 9. Conversão Entre Formatos
// Escreva duas funções:

//      - paresParaObjeto(pares) recebe um array de pares [ [chave,
//      valor], ... ] e retorna o objeto equivalente.
//      - objetoParaPares(obj) faz o inverso, retornando um array de
//      pares.

function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

const pares = [
  ["nome", "Jonas"],
  ["idade", 30],
];
console.log(paresParaObjeto(pares));

function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

const obj = { nome: "André", idade: 20 };
console.log(objetoParaPares(obj));
