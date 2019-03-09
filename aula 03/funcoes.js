function alerta(mensg){
    alert(mensg);
    mensagemGL = mensg;
}
function dividir(num, por = 2){
    return num / por;
}
//document.write('O resultado da divisão é: ' + dividir(15,3));

alerta('Variavel Global recebeu a mensagem');
document.write(mensagemGL);