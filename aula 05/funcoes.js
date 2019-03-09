console.log("Funcoes manipuladoras de string -->");

var texto = 'Pegou fogo na caixa d\'agua \\ na casa da Hirene na semana do carnaval desses dias';
console.log(texto.length);

console.log(texto.indexOf('na'));

console.log(texto.lastIndexOf("na"));

console.log(texto.search(11));

console.log(texto.slice(6,10)+"\n");

console.log(texto.substring(20,26)+"\n");

console.log(texto.substr(10, 15)+"\n");

console.log(texto.replace("d'agua","água"+"\n"));

console.log(texto.toUpperCase()+"\n");

console.log(texto.toLowerCase()+"\n");

console.log("Funcoes Manipuladoras de numeros -->");

var numero = 9.658;

console.log(numero.toFixed(2));

console.log(numero.toPrecision(2));

console.log(numero.toString());