/*
  Arrow functions
*/

(() => {

  /* na arrow function, this sempre faz   referência ao escopo em que ele foi criado. */
  this.name = 'arrow function';
  
  const getNameArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  /* na função formato tradicional, this faz referência ao escopo de onde a função está sendo chamada. */
  const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
  }

  console.log(user.getNameArrowFn());
  console.log(user.getName());

})();
