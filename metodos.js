//Métodos - Función que vive dentro de las propiedad de los objetos, funsiones que ya están creadas o puedes crear

let ejemplo1 = "Hola mundo";

console.log(ejemplo1.toUpperCase());//toUpperCase lo pone en mayúsculas

console.log(ejemplo1.toLowerCase());//toLowerCase lo imprime en minúsculas

let secuencia = [1,2,3];
console.log(secuencia);
console.log(secuencia.push(4));//agregar
console.log(secuencia);
console.log(secuencia.pop());//quitar
console.log(secuencia);

let frutas = ["mango", "fresa", "platamo", "naranja"];
let nuevaLongitud = frutas.unshift("mandarina");//agregar poner en el índice cero
console.log(frutas);
console.log(frutas[0]);
let borrarmandarina = frutas.shift("mandarina");//Quitar del índice cero
console.log(frutas);
console.log(frutas[0]);

//Array es un objeto, Dentro de los Objetos hay Propiedades, Las Propiedades se pueden tranformar con Métodos.
