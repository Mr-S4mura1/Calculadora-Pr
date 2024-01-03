alert(
  "Esta alerta es para el modo de uso de esta calculadora, primero se ingresa un valor y el operador, al ingresarlo se borrara todo, para que usted ingrese un segundo valor, y alli al dar usted al igual, podra, tener su resultado. Muchisimas Gracias"
);

// Creamos unas variables donde vamos a almacenar nuestras operaciones
var operandoa;
var operandob;
var operacion;

// Simbolos
var resultado = document.getElementById("resultado");
var reset = document.getElementById("limpiar");
var porcentaje = document.getElementById("porcentaje");
// Operaciones
var division = document.getElementById("division");
var multiplicacion = document.getElementById("multiplicacion");
var resta = document.getElementById("resta");
var suma = document.getElementById("suma");
var igual = document.getElementById("igual");
var doble_cero = document.getElementById("doble_cero");

// Numeros
var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");

//Eventos de click
uno.onclick = function (e) {
  resultado.textContent = resultado.textContent + "1";
};
dos.onclick = function (e) {
  resultado.textContent = resultado.textContent + "2";
};
tres.onclick = function (e) {
  resultado.textContent = resultado.textContent + "3";
};
cuatro.onclick = function (e) {
  resultado.textContent = resultado.textContent + "4";
};
cinco.onclick = function (e) {
  resultado.textContent = resultado.textContent + "5";
};
seis.onclick = function (e) {
  resultado.textContent = resultado.textContent + "6";
};
siete.onclick = function (e) {
  resultado.textContent = resultado.textContent + "7";
};
ocho.onclick = function (e) {
  resultado.textContent = resultado.textContent + "8";
};
nueve.onclick = function (e) {
  resultado.textContent = resultado.textContent + "9";
};
cero.onclick = function (e) {
  resultado.textContent = resultado.textContent + "0";
};
doble_cero.onclick = function (e) {
  resultado.textContent = resultado.textContent + "00";
};

reset.onclick = function (e) {
  resetear();
};

suma.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
};
resta.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
};
multiplicacion.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar();
};
division.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
};
igual.onclick = function (e) {
  operandob = resultado.textContent;
  resolver();
};
porcentaje.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "%";
  limpiar();
};

// Funciones
function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
    case "%":
      res = parseFloat(operandoa / 100);
  }
  resetear();
  resultado.textContent = res;
}
