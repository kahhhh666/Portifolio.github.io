function calcularPesoIdeal(altura, genero) {
    let imcIdeal = genero === 'masculino' ? 22 : 21; 
    return imcIdeal * (altura * altura);
}






function masculino() {
    var peso = parseFloat(document.getElementById('pesoid').value);
    var altura = parseFloat(document.getElementById('alturaid').value);
    var imc = peso / (altura * altura); 
    const name = document.getElementById('nomeid');
    var pesoIdeal = calcularPesoIdeal(altura, 'masculino');


    if (imc < 20.7) {
        window.alert("Olá Sr " + name.value+ "\n Gênero : Masculino " + "\nSeu peso é: " + peso+ "kg"+"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : abaixo do peso."+"\n Peso ideal : "+ pesoIdeal);

    } else if (imc >= 20.7 && imc < 26.5) {
        window.alert("Olá Sr " + name.value+ "\n Gênero : Masculino " + "\nSeu peso é: " + peso+ "kg" +"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : peso ideal.");

    } else if (imc >= 26.5 && imc < 27.8) {
        window.alert("Olá Sr " + name.value + "\n Gênero : Masculino " + "\nSeu peso é: " + peso+ "kg"+"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : marginalmente acima do peso."+"\n Peso ideal : "+ pesoIdeal);

    } else if (imc >= 27.8 && imc < 31.1) {
        window.alert("Olá Sr " + name.value + "\n Gênero : Masculino " + "\nSeu peso é: " + peso+ "kg"+ "\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : acima do peso ideal."+"\n Peso ideal : "+ pesoIdeal);

    } else if (imc >= 31.1) {
        window.alert("Olá Sr " + name.value + "\n Gênero : Masculino " + "\nSeu peso é: " + peso+ "kg" +"\nSua altura é : "+altura+ "m"+"\n IMC: " +imc+  "\n Seu status corporal é : obeso."+"\n Peso ideal : "+ pesoIdeal);
    }
}

function feminino() 
{
    var peso = parseFloat(document.getElementById('pesoid').value);
    var altura = parseFloat(document.getElementById('alturaid').value);
    const name = document.getElementById('nomeid');
    var imc = peso / (altura * altura);
    var pesoIdeal = calcularPesoIdeal(altura, 'feminino');


    if (imc < 19.1) {
        window.alert("Olá Sra: " + name.value + "\n Gênero : Feminino " + "\nSeu peso é: " + peso+ "kg"+"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : abaixo do peso."+"\n Peso ideal : "+ pesoIdeal );

    } else if (imc >= 19.1 && imc < 25.8) {
        window.alert("Olá Sra :" + name.value+ "\n Gênero : Feminino " + "\nSeu peso é: " + peso+ "kg"+"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : peso ideal.");

    } else if (imc >= 25.8 && imc < 27.3) {
        window.alert("Olá Sra : " + name.value + "\n Gênero : Feminino " + "\nSeu peso é: " + peso+ "kg"+"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : marginalmente acima do peso." +"\n Peso ideal : "+ pesoIdeal);

    } else if (imc >= 27.3 && imc < 32.3) {
        window.alert("Olá Sra :" + name.value + "\n Gênero : Feminino " + "\nSeu peso é: " + peso+ "kg"+"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : acima do peso ideal." +"\n Peso ideal : "+ pesoIdeal);

    } else if (imc >= 32.3) {
        window.alert("Olá Sra : " + name.value + "\n Gênero : Feminino " + "\nSeu peso é: " + peso+ "kg"+"\nSua altura é : "+altura+"m"+"\n IMC: " +imc+  "\n Seu status corporal é : obeso." +"\n Peso ideal : "+ pesoIdeal);
    }
}
