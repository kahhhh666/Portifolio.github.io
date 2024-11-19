function promocao(){
    var
        prod = document.getElementById("prod").value,
        valor = document.getElementById("valorid").value,
        prodSlot = document.getElementById("nome"),
        totalSlot = document.getElementById("valor"),
        valorUnd = document.getElementById("valorUnd")
    ;

    prodSlot.innerHTML = prod;
    totalSlot.innerHTML = (2*valor)+(valor/2)
    valorUnd.innerHTML = valor/2
}
