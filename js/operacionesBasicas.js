document.addEventListener("DOMContentLoaded", function(){
//Accedemos al parrafo que nos permitira imprimmir el resultado
const parrafo = document.querySelector("#idParrafo");
console.log(parrafo);

//Accedemos a cada boton por medio de la API DOM
const btnSumar = document.querySelector("#idBtnSumar");
const btnRestar = document.querySelector("#idBtnRestar");
const btnMultiplicar = document.querySelector("#idBtnMultiplicar");
const btnDividir = document.querySelector("#idBtnDividir");
const btnMtsPies = document.querySelector("#idBtnMtsPies");
const btnMtsYard = document.querySelector("#idBtnMtsYrd");
const btnMtsIn = document.querySelector("#idBtnMtsIn");

//Agregamos el evento click a los botones, adicionalmente se le asigna la funcion que realizará la operación
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);
btnMtsPies.addEventListener("click", conversion1);
btnMtsYard.addEventListener("click", conversion2);
btnMtsIn.addEventListener("click", conversion3);

//Creamos la variable que tendrá el valor del resultado de la operación matemática

//Función de operaciones
function sumar() {
    let numero1 = prompt("Ingrese el primer numero a sumar");
    let numero2 = prompt("Ingrese el segundo numero a sumar");
    resultado = numero1 + numero2;
    parrafo.innerHTML = `${numero1} + ${numero2} = ${resultado}`;
}

function restar() {
    let numero1 = prompt("Ingrese el primer numero a restar");
    let numero2 = prompt("Ingrese el segundo numero a restar");
    resultado = numero1 - numero2;
    parrafo.innerHTML = `${numero1} - ${numero2} = ${resultado}`;
}

function multiplicar() {
    let numero1 = prompt("Ingrese el primer numero a multiplicar");
    let numero2 = prompt("Ingrese el segundo numero a multiplicar");
    resultado = numero1 * numero2;
    parrafo.innerHTML = `${numero1} x ${numero2} = ${resultado}`;
}

function dividir() {
    let numero1 = prompt("Ingrese el primer numero a dividir");
    let numero2 = prompt("Ingrese el segundo numero a dividir");
    let mensaje;
    if(numero2 != 0) {
        resultado = numero1 / numero2;
        mensaje = `${numero1} / ${numero2} = ${resultado}`;
    } else {
        mensaje = `El valor ${numero1} / ${numero2} no se puede dividir`;
    }

    parrafo.innerHTML = mensaje;
}

function conversion1() {
    let numero1 = prompt("Ingrese el valor en Metros que desea convertir a Pies");
    resultado = numero1 *  3.281;
    parrafo.innerHTML = `${numero1}m a Pies es: ${resultado}ft`;
}

function conversion2() {
    let numero1 = prompt("Ingrese el valor en Metros que desea convertir a Yardas");
    resultado = numero1 *  1.094;
    parrafo.innerHTML = `${numero1}m a yardas es: ${resultado}yd`;
}

function conversion3() {
    let numero1 = prompt("Ingrese el valor en Metros que desea convertir a Pulgadas");
    resultado = numero1 *  39.37;
    parrafo.innerHTML = `${numero1}m a Pulgadas es: ${resultado}in`;
}

});