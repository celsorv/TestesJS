/*
  Arrays em Javascript
*/

const users = ['Paola', 'Giovane', 'Anne']

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('F')
}

const persons = [
  {
    name: 'Paola',
    age: 26,
    gender: gender.WOMAN
  },
  {
    name: 'Giovane',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Anne',
    age: 18,
    gender: gender.WOMAN
  }
]

// quantidade de itens do array
console.log('\nItems:', persons.length)

// é um array?
console.log(
    'A variável persons é um array:', Array.isArray(persons), '\n'
)

// iterando array - modo 1
persons.forEach(person => {
  console.log(`Nome: ${person.name}`)
})

// iterando array - modo 2
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr)
})

// filtrando array
const womens = persons.filter(
  person => person.gender === gender.WOMAN
)
console.log('\nNova lista apenas com mulheres:', womens)

// retornando um novo
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript'
  return person
})

console.log('\nPessoas com a adição do course', personsWithCourse)

// transformando um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age
  return age
}, 0)

console.log('\nSoma de idade das pessoas', totalAge)

// juntando operações
const totalEvenAges = persons
            .filter(person => person.age % 2 === 0)
            .reduce((age, person) => {
              age += person.age
              return age
            }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges)