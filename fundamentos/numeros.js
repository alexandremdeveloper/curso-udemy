const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)); //transformar em binário
console.log(typeof Number);


//cuidados

console.log(7 /0);
console.log("10" / 2);
console.log('3'+2); //string ganha :)
console.log("Show!" * 2);
console.log(0.1 + 0.7);

//math

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area.toFixed(2)); //tofixed escolhe quantos n decimais quero que imprima
console.log(typeof Math);