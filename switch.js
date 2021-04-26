/*
  Switch - A partir do ponto em que uma condição é verdadeira, todas as demais condições também serão executadas, como se todas fossem verdadeiras. Um comando break interrompe isso.
*/


/*
  Neste exemplo:
    morango, pessego e banana tem o mesmo preço  (R$ 3,00 / Kg)
    mamão e pêra também compartilham mesmo preço (R$ 2,50 / Kg)
    qualquer outro produto não existe no estoque
*/

//const fruit = 'mamão'
//const fruit = 'banana'
const fruit = 'laranja'
//const fruit = 'mamão'

switch (fruit) {

  case 'morango':
  case 'pessego':
  case 'banana':
    console.log('R$ 3,00 / kg')
    break
  
  case 'mamão':
  case 'pêra':
    console.log('R$ 2,50 / kg')
    break
  
  default:
    console.log('Produto não existe no estoque')

}
