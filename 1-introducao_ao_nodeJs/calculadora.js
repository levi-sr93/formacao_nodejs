let nome = "Minha calculadora";

function soma(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function subtracao(a, b) {
    return a - b;
}

function divisao(a, b) {
    return a / b;
}

module.exports = {
    soma,
    multiplicar,
    subtracao,
    divisao,
    nome
}