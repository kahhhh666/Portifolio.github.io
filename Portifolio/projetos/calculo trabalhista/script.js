function registrar() {
    // Obtendo os valores dos inputs
    const valorh = parseFloat(document.getElementById('vh').value);
    const quantidadeht = parseFloat(document.getElementById('qtdeht').value);
    const dedu = parseFloat(document.getElementById('od').value) || 0;
    const valeTransporte = document.querySelector('input[name="vts"]:checked').value;

    // Cálculo do salário bruto
    const salariobrutos = valorh * quantidadeht;

    // Cálculo do INSS
    let inss = 0;
    if (salariobrutos <= 1320.00) {
        inss = salariobrutos * 0.075;
    } else if (salariobrutos <= 2571.29) {
        inss = salariobrutos * 0.09;
    } else if (salariobrutos <= 3856.94) {
        inss = salariobrutos * 0.12;
    } else if (salariobrutos <= 7507.49) {
        inss = salariobrutos * 0.14;
    }

    // Cálculo do IRRF
    let irrf = 0;
    if (salariobrutos <= 2112.00) {
        irrf = 0;
    } else if (salariobrutos <= 2826.65) {
        irrf = (salariobrutos * 0.075) - dedu;
    } else if (salariobrutos <= 3751.06) {
        irrf = (salariobrutos * 0.15) - dedu;
    } else if (salariobrutos <= 4664.68) {
        irrf = (salariobrutos * 0.225) - dedu;
    } else {
        irrf = (salariobrutos * 0.275) - dedu;
    }

    // Cálculo do Vale Transporte
    const descontoVale = valeTransporte === "sim" ? salariobrutos * 0.06 : 0;

    // Cálculo do Salário Líquido
    const salarioliquido = salariobrutos - (inss + irrf + descontoVale + dedu);

    // Montando o resultado
    const resultado = `
        Aqui está seu cálculo trabalhista!<br>
        Salário Bruto: R$ ${salariobrutos.toFixed(2)}<br>
        Desconto INSS: R$ ${inss.toFixed(2)}<br>
        Desconto IRRF: R$ ${irrf.toFixed(2)}<br>
        Desconto Vale Transporte: R$ ${descontoVale.toFixed(2)}<br>
        Outras Deduções: R$ ${dedu.toFixed(2)}<br>
        Salário Líquido: R$ ${salarioliquido.toFixed(2)}<br>
    `;

    // Armazenando o resultado no localStorage
    localStorage.setItem('registrar', resultado);

    // Redirecionando para a página de resultados
    window.location.href = "resultado.html";
}
