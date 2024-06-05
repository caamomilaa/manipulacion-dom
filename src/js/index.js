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

//Elabore un programa con javascript que en el navegador permita a través de un input en el que se introducen una lista de números separados por coma y del click de un botón sumar toda la lista de números introducidos.

//lsiatde numeros separados por comas en el campo de input, y emterlos dentro de un acummluador para sumar. inpunto da srting no number, hay que transformar. Coger el campo que entra. partir el sring (la coma seria separador7 split), devolveria el arreglo con la lista de elementos, pero esa lista son cadena de texto, posterior iterarlos y cada ve que entre en algunos de indice, cambiar a numero. El for..in serviría.
