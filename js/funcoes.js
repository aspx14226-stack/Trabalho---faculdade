
//Captura evento dos clicks.
document.addEventListener('DOMContentLoaded', function () {
    const botaoCalcular = document.getElementById('calcular');
    const botaoLimpar = document.getElementById('limpar');

    if (botaoCalcular) botaoCalcular.addEventListener('click', calcularIMC);
    if (botaoLimpar) botaoLimpar.addEventListener('click', limpar);
});


function calcularIMC() {
    // 1. Pega os valores do HTML
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    // 2. Normaliza e valida: aceita 1,75 e 1.75
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (peso === "" || altura === "" || isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
        alert("Preencha o peso e a altura corretamente apenas com números válidos.");
        return;
    }

    // 3. Converte para número
    peso = pesoNum;
    altura = alturaNum;

    // Suporta altura em cm (ex.: 170) e em m (1.70)
    if (altura > 3) {
        altura = altura / 100;
    }

    // 4. Calcula IMC
    let imc = peso / (altura * altura);
    let status = "";

    // 5. Tabela de Classificação [cite: 15]
    if (imc < 18.5) { status = "Abaixo do peso"; }
    else if (imc <= 24.9) { status = "Peso normal"; }
    else if (imc <= 29.9) { status = "Acima do peso (sobrepeso)"; }
    else if (imc <= 34.9) { status = "Obesidade I"; }
    else if (imc <= 39.9) { status = "Obesidade II"; }
    else { status = "Obesidade III"; }

    // 6. Exibe os resultados na tela (atualizando os <span> existentes)
    const imcSpan = document.querySelector('#resultado_imc p:nth-of-type(1) span');
    const statusSpan = document.querySelector('#resultado_imc p:nth-of-type(2) span');

    if (imcSpan) imcSpan.innerText = imc.toFixed(2);
    if (statusSpan) statusSpan.innerText = status;
}

function limpar() {
    // Limpa os inputs e os textos de resultado 
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    const imcSpan = document.querySelector('#resultado_imc p:nth-of-type(1) span');
    const statusSpan = document.querySelector('#resultado_imc p:nth-of-type(2) span');
    if (imcSpan) imcSpan.innerText = "0";
    if (statusSpan) statusSpan.innerText = "0";
}
