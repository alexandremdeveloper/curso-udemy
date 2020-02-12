// This aponta para o module.exports
console.log( this === global )
console.log( this === module )

console.log( this === module.exports )
console.log( this === exports )

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log( this === module.exports )
    console.log( this === global )

    // This dentro de uma função não aponta para o exports, porém modo Global aponta
}

logThis()