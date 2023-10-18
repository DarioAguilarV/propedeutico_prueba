//Funciones
//Funciones Declarativas
function MiPrimeraFuncion(){
    return 23;
}
console.log(MiPrimeraFuncion());

function MiSegundaFuncion(a,b){
    return a + b;
}
console.log(MiSegundaFuncion(2,2));

function MiTerceraFuncion(a,b){
    let mul = a * b;
    return mul - 2;
}
console.log(MiTerceraFuncion(2,2));

//Funciones de tipo Expresión

let tipoDos = function(numero1, numero2){
    return numero1 * numero2;
}
console.log(tipoDos(2, 5));

//Template Literals
function miNombre(nom){
    let nombre = ` ${nom} `;
    return nombre;
}
console.log(miNombre("Darío"));


//Expresión de Función
let saludar = function(nombre){
    console.log(` Hola persona llamada: ${nombre}` )
}
console.log(saludar("Aguilar"));

//Función Constructora, se utiliza para crear objetos

function Person(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

let person = new Person("Darío", 33);
console.log(person.nombre);
console.log(person.edad);

//Funcion Scope Global y Local

//Global con flecha
let apellido = "Juan"
const saludar1 = () => {
    console.log("Hola, " + apellido)
}
saludar1();

//Sin flecha
let apellidos = "Juans";
function saludar11() {
    console.log("Hola, " + apellidos);
}
saludar11();



//Scope Local

//Local Con flecha
const apellido1 = (nombre1) => {
    let apellido2 = "Darío"
    console.log(apellido2)
}

apellido1()

//Local Sin flecha
function apellido5(nombre2) {
    let apellido6 = "Daríos"
    console.log("Hola, " + apellido6)
}

apellido5();