//Aluno: Daniel Moraes UpSkill 218

const taxaCambio = 0.92;
const moedaOrigem = 'Euro';
const moedaDestino = 'Dólar';

let valorEmEuro = '500';

let valorEmDolar = valorEmEuro * taxaCambio;

console.log('Tipo de dados em valorEmEuro antes da conversão:', typeof valorEmEuro);
console.log('Tipo de dados em valorEmDolar depois da conversão:', typeof valorEmDolar);
console.log('500 Euros equivalem a ' + valorEmDolar + ' Dólares');