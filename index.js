/* Crie funções que devem ter como parâmetro uma propriedade “lista” que vai receber um array com vários números, as funções devem ser criadas para devolver os dados conforme solicitado:
Uma função que devolve os valores que são maiores que a média
Uma função que devolva o menor valor da lista
Uma função que devolva o valor da soma dos itens da lista
Uma função que devolva todos os valores que são menores que 20
Uma função que vai devolver o primeiro e o último valor da lista
*/
function valoresMaioresQueMedia(valores) {
  // ### Escreva Seu código aqui :) ###
  let sum = valores.reduce((a, b) => a + b, 0);
  let avarage = sum / valores.length;
  return valores.filter(value => value > avarage);
  // ### FIM do código ###
}

function menorValor(valores) {
  // ### Escreva Seu código aqui :) ###
  return Math.min(...valores);
  // ### FIM do código ###
}

function somaDosItens(valores) {
  // ### Escreva Seu código aqui :) ###
  return valores.reduce((a, b) => a + b, 0);
  // ### FIM do código ###
}

function valoresMenoresQue20(valores) {
  // ### Escreva Seu código aqui :) ###
  return valores.filter(value => value < 20);
  // ### FIM do código ###
}

function primeiroEUltimo(valores) {
  // ### Escreva Seu código aqui :) ###
  return valores.filter((value, index) => index === 0 || index === valores.lenght -1);
  // ### FIM do código ###
}

/* ==== Não apagar ==== */
module.exports = {
  valoresMaioresQueMedia,
  menorValor,
  somaDosItens,
  valoresMenoresQue20,
  primeiroEUltimo
}
