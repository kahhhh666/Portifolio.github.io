let contador = 0;
let menorVelocidade = Infinity;
let maiorVelocidade = 0;
let totalVelocidade = 0;
let totalPedagio = 0;
let menorPlaca = "";
let maiorPlaca = "";
let p1, p2;

function registrarVeiculo() {
    contador++;
    const placa = document.getElementById('placa').value;
    const hora1 = parseInt(document.getElementById('hora1').value);
    const minutos1 = parseInt(document.getElementById('minutos1').value);
    const hora2 = parseInt(document.getElementById('hora2').value);
    const minutos2 = parseInt(document.getElementById('minutos2').value);

    const tempo1 = hora1 * 60 + minutos1; 
    const tempo2 = hora2 * 60 + minutos2; 

    if (tempo2 <= tempo1) {
        window.alert("A hora de saída deve ser maior que a hora de entrada.");
        return; 
    }

    const tempo = (tempo2 - tempo1) / 60;

    if (tempo <= 0) {
        window.alert("Tempo inválido. Verifique as horas de entrada e saída.");
        return;
    }

    const velocidadeMedia = 70 / tempo;
    const valorBase = 20;
    let valor = 0;

    if (contador === 1) {
        p1 = `${hora1}:${minutos1}`;
    }
    p2 = `${hora2}:${minutos2}`;

    if (velocidadeMedia < menorVelocidade) {
        menorVelocidade = velocidadeMedia;
        menorPlaca = placa;
    }
    if (velocidadeMedia > maiorVelocidade) {
        maiorVelocidade = velocidadeMedia;
        maiorPlaca = placa;
    }

    totalVelocidade += velocidadeMedia;

    if (velocidadeMedia > 100) {
        valor = valorBase;
    } else if (velocidadeMedia > 60) {
        valor = valorBase * 0.10; 
    } else {
        valor = valorBase * 0.15; 
    }
    totalPedagio += valor;
    
    window.alert(`Placa: ${placa}\nHora de entrada: ${hora1}:${minutos1}\nHora de saída: ${hora2}:${minutos2}\nVelocidade Média: ${velocidadeMedia.toFixed(2)} km/h\nValor pago: R$ ${valor.toFixed(2)}`);
}

function mostrarResultados() {
    const mediaVelocidade = contador > 0 ? totalVelocidade / contador : 0; 
    const resultado = `
        Turno Finalizado! Bata seu ponto!<br>
        Retório do dia:<br>
        Menor Velocidade: ${menorVelocidade > 0 ? menorVelocidade.toFixed(2) : 'N/A'} (${menorPlaca})<br>
        Maior Velocidade: ${maiorVelocidade.toFixed(2)} (${maiorPlaca})<br>
        Média das velocidades: ${mediaVelocidade.toFixed(2)}<br>
        Total dos valores cobrados: R$ ${totalPedagio.toFixed(2)}<br>
        Início do processamento: ${p1}<br>
        Final do processamento: ${p2}
    `;
    localStorage.setItem('resultado', resultado);
    document.getElementById('resultado').innerHTML = resultado;
}

function redirecionar() {
    mostrarResultados(); 
    window.location.href = "cc.html"; 
}

function voltar() {
    window.location.href = "pedagio.html"; 
}
