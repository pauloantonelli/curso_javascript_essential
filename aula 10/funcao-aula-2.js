//acesso a url atual
document.write(window.location.href);

//acesso ao historico
function voltar(){
    return window.history.back();
}
function avancar(){
    return window.history.forward();
}

//acesso ao armazenamento local i/o
window.localStorage.setItem('nome','Paulo');
console.log(window.localStorage.getItem('nome'));

//acesso ao armazenamento de sessao i/o
window.sessionStorage.setItem('nome2', 'Ricardo');
console.log(window.sessionStorage.getItem('nome2'));

//janela pop-up
function popup(){
    var janela =   window.open('http://zoominit.com.br','O melhor sit :D', 'width=500px height=500px');
    janela.document.write("Texto da janela pop up");
    janela.opener.document.write("Texto da janela principal");
}

//manipulacao de contagem
var contagem1 = setTimeout(function(){
    document.getElementById("msg").innerHTML = 'mensagem do set time out';
}, 2000);
function mensagem2(){
    document.getElementById('msg').innerHTML = "Nova mensagem do set time out 2";
}
setTimeout(mensagem2, 4000);

/*var contagem2 = setInterval(function(){
    for(var i = 0; i <= 10; i++){
        console.log(i+" contador2");
        //document.getElementById('contador1').innerHTML = i;
    }
}, 1000)*/

//verifica se o foco esta na pagina
var intervalo = setInterval(verificafoco,1000);
var contador = 0;
function verificafoco(){
    if(document.hasFocus){
        contador++;
        if(contador >= 10){
            msgTempo();
            clearInterval(intervalo);
        }
    }
}
function msgTempo(){
    document.getElementById("texto").innerHTML = "Acabou o tempo!";
}