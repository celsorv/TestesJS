'use strict'

// ----------------------------------------------------------

function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas
}

function Cachorro(morde) {
  Animal.call(this, 4)

  this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug); // Cachorro {qtdePatas: 4, morde: false}

// ----------------------------------------------------------


// Usando prototype
// ----------------------------------------------------------

function Animal2() {}

Animal2.prototype.qtdePatas = 0
Animal2.prototype.movimentar = function() {}

function Cachorro2(morde) {
  this.qtdePatas = 4
  this.morde = morde
}

Cachorro2.prototype = Object.create(Animal2)
Cachorro2.prototype.latir = function() {
  console.log('Au! au!')
}

const pug2 = new Cachorro2(false);
const pitbull2 = new Cachorro2(true);

// ----------------------------------------------------------


// Usando Classes introduzidas a partir do ECMAScript 6 (ES6)
// ----------------------------------------------------------

class Animal3 {
  constructor() {
    this.qtdePatas = 0
  }

  movimentar() {}
}

class Cachorro3 extends Animal3 {
  constructor(morde) {
    super()
    this.qtdePatas = 4;
    this.morde = morde;
  }

  latir() {
    console.log('Au! au!');
  }
}

const pug3 = new Cachorro3(false);
const pitbull3 = new Cachorro3(true);

// ----------------------------------------------------------
