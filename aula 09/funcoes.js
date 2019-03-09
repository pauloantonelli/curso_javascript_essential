function mostra(a){
    console.log(a);
}
var u = document.baseURI;
mostra("endereco absoluto: "+ u);
var b = document.body;
mostra(b);//null
var d = document.doctype;
mostra(d);
var docU = document.documentURI;
mostra(docU);
var docDo = document.domain;
mostra(docDo);
var docH = document.head;
mostra(docH);
var inEn = document.inputEncoding;
mostra(inEn);
var lm = document.lastModified;
mostra(lm);
var t = document.title;
mostra(t);
var url = document.URL;
mostra(url);
var form = document.forms;
mostra(form);
var link = document.links;
mostra(link);
var img = document.images;
mostra(img);
var src = document.scripts;
mostra(src);