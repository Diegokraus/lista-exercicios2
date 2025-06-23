// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Notebook", preco: 3900 },
  { nome: "Teclado", preco: 230 },
  { nome: "Cabo", preco: 10 },
];

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => produto.nome);
}

const resultado = nomesOrdenadosPorPreco(produtos);
console.log(resultado);
