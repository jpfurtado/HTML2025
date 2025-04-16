document.write("<h1>Estamos executando o script2.js</h1>");
document.write("Esse script está em um arquivo externo!");

function mudarCor(novaCor) {
    var x = document.getElementById("demo");
    x.style.color = novaCor;
}