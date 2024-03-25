
document.getElementById("botaoSortear").addEventListener("click", sortearNumero);

function sortearNumero(){
    var numeroInicial = parseInt(document.getElementById("numeroInicial").value.trim());
    var numeroFinal = parseInt(document.getElementById("numeroFinal").value.trim());

    if (numeroInicial >= 1 && numeroFinal >= numeroInicial){
        
        var numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
        var resultado = document.getElementById("resultado").innerHTML = numeroSorteado;
        var erro = document.getElementById("erro").innerHTML = " ";

    } else {
        
        var erro = document.getElementById("erro").innerHTML = "Por favor, insira um intervalo válido";
        document.getElementById("resultado").innerHTML = " ";
    } 

}