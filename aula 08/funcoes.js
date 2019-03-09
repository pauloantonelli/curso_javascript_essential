function verificar(){
    var x = document.getElementById('numero').value;
    try{
        if(x == '') throw "Informe um valor!";
        if(isNaN(x)) throw "Informe um numero!";
        x = Number(x);
        if(x < 0 || x > 100) throw "Permitido somente numeros entre 0 e 100!"
        document.getElementById('mensagem').innerHTML = "Perfeito! O numero "+ x + ", é um numero válido";
    }catch(a){
        document.getElementById('mensagem').innerHTML = "Deu erro: " + a;
    }finally{
        document.getElementById('numero').value = '';
    }
}