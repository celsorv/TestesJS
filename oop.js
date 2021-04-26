'use strict'

// -----------------------------------------------------

const myText = 'Hello prototype!'
myText.split(' '); // <- de onde vem esse "split" ?

const myText2 = String('Hello prototype!')
console.log(myText2.__proto__.split)

// -----------------------------------------------------


// -----------------------------------------------------

function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas
}

const cachorro = new Animal(4)
console.log(`\nUm cachorro tem ${cachorro.qtdePatas} patas\n`)

function Cachorro(morde) {
  Animal.call(this, 4)

  this.morde = morde;
  
  this.latir = function() {
    console.log('Au! au!')
  }

}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);     // Cachorro {qtdePatas: 4, morde: false, latir: [Function]}
console.log(pitbull); // Cachorro {qtdePatas: 4, morde: true , latir: [Function]}

// -----------------------------------------------------