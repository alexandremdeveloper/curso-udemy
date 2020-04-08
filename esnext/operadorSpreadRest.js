// Operador ... rest(juntar)/spread(separar);
// Usar rest como parâmetro de função;

// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

console.log(clone);

// Usar spread com array
const grupoA = ['Maria', 'Fernanda', 'Alessandra'];
const grupoFinal = ['Edmilson', 'Kátia', ...grupoA]

console.log(grupoFinal);
 