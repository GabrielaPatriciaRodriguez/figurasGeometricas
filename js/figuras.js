//Funciones:

//Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

console.log(perimetroCuadrado(5));

function areaCuadrado(lado) {
    return lado * lado;
}

console.log(areaCuadrado(5));

//Triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

console.log(perimetroTriangulo(6, 6, 4));

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(areaTriangulo(6, 5.5));

//Circulo

const pi = Math.PI;
console.log(pi);

function diametroCirculo(radio) {
    return radio * 2;
}

console.log(diametroCirculo(2));

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

console.log(perimetroCirculo(2));

function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.log(areaCirculo(4));

//Integrando a HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLadoA = document.getElementById("inputLadoATriangulo");
    const valueLadoA = Number(inputLadoA.value);
    const inputLadoB = document.getElementById("inputLadoBTriangulo");
    const valueLadoB = Number(inputLadoB.value);
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
    alert(perimetro);
}