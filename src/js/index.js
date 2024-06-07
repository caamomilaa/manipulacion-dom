// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//si aparece letra que lo borre si aparece numero que lo muestre
const campoEntrada = document.getElementById('entrada');
const campoSalida = document.getElementById('salida');

function callbackEvent() {
  const condicion = isNaN(campoEntrada.value);
  console.log(campoEntrada.value);
  if (condicion) {
    campoEntrada.value = '';
  }
}

campoEntrada.addEventListener('keyup', callbackEvent);

//Elabore un programa con javascript que en el navegador permita a través de un input en el que se introduce un número y del click de un botón actualizar un contador en pantalla que reduzca en 1 unidad con cada click el número introducido.

const button = document.getElementById('countdownButton');
const number = document.getElementById('countdown');

//por que function y no const?

function countdownEvent() {
  for (let i = number.length(); i <= 0; i--) {
    console.log(i);
  }
}

button.addEventListener('click', countdownEvent);

//Elabore un programa con javascript que en el navegador permita a través de un input en el que se introducen una lista de números separados por coma y del click de un botón sumar toda la lista de números introducidos.

//lsiatde numeros separados por comas en el campo de input, y emterlos dentro de un acummluador para sumar. inpunto da srting no number, hay que transformar. Coger el campo que entra. partir el sring (la coma seria separador7 split), devolveria el arreglo con la lista de elementos, pero esa lista son cadena de texto, posterior iterarlos y cada ve que entre en algunos de indice, cambiar a numero. El for..in serviría.

//function addNumbersinput

//EJERCICIO: Tabla de multiplicar
//Elabore un programa con javascript que en el navegador permita a través la lectura de un número x que se escriba en el html y el click de un botón que permita generar la tabla de multiplicar de ese número (x del 1 al 10)

const lecturaNumero = document.getElementById('multiplication');
const multiplicador = document.getElementById('multiplicationButton');

function multiplicationEvent() {
  for (let i = 1; i <= 10; i++) {
    document.createElement('p');
    const parrafo = document.createElement('p');
    parrafo.textContent = lecturaNumero.value * i;
    document.body.appendChild(parrafo);
    console.log(lecturaNumero.value * i);
  }
}

multiplicador.addEventListener('click', multiplicationEvent);

//textcontet -> cadena de texto

//EJERCICIO: Contar Vocales en una Frase
//Elabore un programa con javascript que en el navegador permita a través de un input en el que se hace una entrada de una frase de texto y el click de un botón que permita contar todas las vocales de la frase escrita, imprima una lista con cada vocal y la cantidad de veces que fue encontrada en la frase, no tenga en cuenta distinción entre mayúsculas y minúsculas.

//a e i o u

function onlyVocals(params) {
  const inputString = document.getElementById('vocals').value.toLowerCase();
  let counter = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  for (const char of inputString) {
    console.log(char);
  }
}

const onlyVocalsButton = document.getElementById('vocalsButton');
onlyVocalsButton.addEventListener('click', onlyVocals);
