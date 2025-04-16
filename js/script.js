document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script está sendo chamado no HEAD da página");
//console.log("Primeiro");
console.log("Passou aqui!");

var teste = 1;
console.log(typeof(teste));
document.write("<hr> O valor da variável teste é " + teste + "<hr>");
teste = 'Jose';
console.log(typeof(teste));
document.write("<hr> O valor da variável teste é " + teste + "<hr>");
console.log(teste.toUpperCase());

var lista = ['Arroz','Feijão','Carne','Macarrão'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);

for (var i=0;i<lista.length;i++) {
    var listaFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    listaFor.appendChild(textoLi);
    listaUl.appendChild(listaFor);
}

