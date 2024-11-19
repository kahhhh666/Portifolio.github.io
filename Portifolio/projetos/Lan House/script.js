
function calcularValor()
{
    var valorPor15Minutos = parseFloat(document.getElementById("valor").value); 
    var tempoDeUso = parseInt(document.getElementById("tempo").value);
    
    var intervalos = Math.ceil(tempoDeUso / 15);

    var valorTotal = intervalos * valorPor15Minutos;

    document.getElementById("resultado").innerText = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;
    
}