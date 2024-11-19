function promocao() {
    var preço = document.getElementById("preçoid");
    var nome = document.getElementById("medicamentoid");

    let h2 = document.getElementById("h2id");
    let h22 = document.getElementById("ph2id");

    var soma = (Math.trunc(preço.value)) * 2; 

    h2.innerHTML = `Promoção de ${nome.value}`;
    h22.innerHTML = `Leve 2 por apenas R$ : ${soma}`;
}
