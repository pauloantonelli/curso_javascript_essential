var diaHoje = new Date();
var dia0 = new Date(86400000);

/*console.log(diaHoje);
console.log(diaHoje.toUTCString());
console.log(diaHoje.toDateString());*/

/*minha solucao
function data(){
    //formatacao do dia com 0 antes se for menor que 9
    var dia = 0;
    if(dia < 10){
        dia = "0" + diaHoje.getDate(); 
    }else{
        dia = diaHoje.getDate()
    }

    //formatacao do mes colocando 0 antes se for menor que 9
    var mes = 1;
    if(mes < 10){
        mes = "0" + (mes + diaHoje.getMonth());
    }else{
        mes = mes + diaHoje.getMonth();
    }
    
    //formatacao do ano com 2 digitos
    var ano = diaHoje.getFullYear();
    ano = ano.toString();
    ano = ano.substr(2,3);
    
    console.log(dia + " / " + mes + " / " + ano + " | " + diaHoje.getHours() + ":" + diaHoje.getMinutes())
}
data();*/

//solucao da aula
function formataData(data = new Date()){
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    if(dia.toString().length == 1) dia = '0' + dia;
    if(mes.toString().length == 1) mes = '0' + mes;
    ano2 = ano.toString().substr(2,3);

    return dia + '/' + mes + '/' + ano2;
}
console.log(formataData());