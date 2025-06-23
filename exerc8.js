// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Maria", total: 100 },
  { cliente: "João", total: 150 },
  { cliente: "Maria", total: 200 },
  { cliente: "Carlos", total: 500 },
  { cliente: "João", total: 100 },
];

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    if (!acumulador[cliente]) {
      acumulador[cliente] = 0;
    }

    acumulador[cliente] += total;

    return acumulador;
  }, {});
}

const resultado = agruparPorCliente(vendas);
console.log(resultado);
