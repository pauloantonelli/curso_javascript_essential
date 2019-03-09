var fruta = ['maca','laranja','morango'];
var pessoa = {
    nome: "Paulo",
    sobrenome: "Ricardo",
    idade: 30,
    casado: true,
    andar: function(){
        document.write("Estou andando agora! :D<br/>\n");
    }
}
function atualizarConsole(){
    console.log(fruta.length);
}
function atualizarString(){
    console.log(fruta.toString());
}
function atualizarJoin(){
    document.write(fruta.join(' - '));
}
function pula(){
    document.write("\n");
}
console.log(pessoa.andar());

fruta.push('pitanga');
atualizarConsole();
atualizarString();

fruta.pop();
fruta.shift();
fruta.unshift('pera');
atualizarJoin();

fruta.sort();
atualizarString();

fruta.reverse();
atualizarString();