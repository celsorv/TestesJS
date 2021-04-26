
// Obs:  para 0, string vazia, temos um false
//       para valor diferente de 0, string não vazia, temos um true

console.log(`-1 é true? ${-1 ? "sim" : "não"}`)
console.log(` 0 é true? ${0 ? "sim" : "não"}`)
console.log(` 1 é true? ${1 ? "sim" : "não"}`)
console.log(`"" é true? ${'' ? "sim" : "não"}`)
console.log(`"W" é true? ${'W' ? "sim" : "não"}`)

console.log() // salta linha

console.log(null && 'Cão')              // null
console.log('Cão' && null)              // null
console.log(undefined && 'Cão')         // undefined
console.log('Cão' && undefined)         // undefined
console.log(NaN && 'Cão')               // NaN
console.log('Cão' && NaN)               // NaN
console.log() // salta linha

console.log('OR lógico\n')
console.log(null || 'Cão')              // Cão
console.log('Cão' || null)              // Cão
console.log(undefined || 'Cão')         // Cão
console.log('Cão' || undefined)         // Cão
console.log(NaN || 'Cão')               // Cão
console.log('Cão' || NaN)               // Cão
console.log() // salta linha

/* AND: sendo uma verdade, retorna a última entrada */

console.log('Gato' && 'Cão')            // Cão
console.log('Cão' && 'Gato')            // Gato
console.log('Cão' && 'Gato' && 'Rato')  // Rato
console.log(2 && 1)                     // 1
console.log(1 && 2)                     // 2
console.log(true && 'Cão')              // Cão
console.log('Cão' && true)              // true
console.log() // salta linha

/* AND: sendo falso, incondicionalmente retorna false */

console.log("----- 'Gato' && false ---")
console.log('Gato' && false)  // false
console.log('-------------------------\n')


/* OR: sendo uma verdade, retorna a primeira entrada verdadeira */

console.log('Gato' || 'Cão')            // Gato
console.log('Cão' || 'Gato')            // Cão
console.log('Cão' || 'Gato' || 'Rato')  // Cão
console.log(2 || 1)                     // 2
console.log(1 || 2)                     // 1
console.log(true || 'Cão')              // true
console.log('Cão' || true)              // Cão

console.log() // salta linha

/* OR: sendo falso, incondicionalmente retorna false */

console.log('----- 0 || false ---')
console.log(0 || false)                 // false
console.log('--------------------\n')