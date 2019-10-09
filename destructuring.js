const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa    //operdador de destruturação
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

console.log(pessoa)

//--- parte 2

// const [a] = [10]
// console.log(a)

// const [n1, , n3,  , n5 , n6 = 0] = [10, 7, 9, 8]
// console.log(n1, n3, n5, n6)

// const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
// console.log(nota)

// parte 3 ----

// function rand ({ min = 0, max = 1000 }) {
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// const obj = {max: 50, min: 40}
// console.log(rand(obj))
// console.log(rand({min: 955}))
// console.log(rand({}))

// parte 4 ---

// function rand([ min = 0, max = 1000]) {
//     if (min > max) [ min, max ] = [max, min]
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// console.log(rand([50, 40]))
// console.log(rand([992]))
// console.log(rand([, 10]))
// console.log(rand([]))


