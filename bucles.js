//Bucles/Loop

let amigos = ["Víctor", "Paula", "Juanito", "Raquel"];
function SaludarAmigos(amigo) {
    console.log(` Hola, ${amigo}`);
}

//Bucle for
for( let i = 0; i < amigos.length; i++) {
    SaludarAmigos(amigos[i]);
}
console.log(SaludarAmigos);

for( amigo of amigos) {
    SaludarAmigos(amigo);
}
console.log(SaludarAmigos);
