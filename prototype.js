/*let animal = {}
    animal.nombre = ""Benito""
    animal.energia = 100

    animal.come = function (suma) {
        console.log( `${this.nombre} esta comiendo `)
        this.energía += suma
    }

    animal.duerme = function(length) {
        console.log(`${this.name} esta durmiendo` )
        this.energía += length
    }

    animal.juega = function(length) {
        console.log(`${this.nombre} esta jugando `)
        this.energia -= length
    }
*/

function Animal(nombre, energía) {  //con el código que teníamos, creamos una función

    let animal = Object.create(metodosAnimal)
    animal.nombre = nombre
    animal.energia = energía

    return animal
}
const metodosAnimal = {

    come (suma) {
        console.log( `${this.nombre} esta comiendo `)
        this.energia += suma
    },

    duerme (length) {
        console.log(`${this.name} esta durmiendo` )
        this.energia += length
    },

    juega (length) {
        console.log(`${this.nombre} esta jugando `)
        this.energia -= length
    },

}

const Benito = Animal("Benito", 100)
const Cora = Animal("Cora", 50)
console.log(Cora)
console.log(Benito)
Benito.come(10)
Cora.juega(5)