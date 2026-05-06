/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function login(usuario) {
    if (!usuario) {
        console.error("Error: El nombre de usuario es obligatorio.")
    }
}
login()

// 2. Crea una función que utilice warn correctamente
function verificarBateria(nivel) {
    if (nivel < 20) {
        console.warn("Advertencia: La batería está baja (menos del 20%).")
    }
}
verificarBateria(15)

// 3. Crea una función que utilice info correctamente
function iniciarApp() {
    console.info("La aplicación se ha iniciado correctamente en el puerto 3000.")
}
iniciarApp()

// 4. Utiliza table
const lenguajes = [
    { nombre: "JavaScript", anio: 1995, tipado: "Dinámico" },
    { nombre: "Python", anio: 1991, tipado: "Dinámico" }
]
console.table(lenguajes)

// 5. Utiliza group
console.group("Datos del Usuario")
console.log("Nombre: Jasson")
console.log("Edad: 25")
console.groupEnd()

console.log("Este mensaje ya esta fuera del grupo")

// 6. Utiliza time

console.time("Tiempo de ejecución del bucle")

for (let i = 0; i < 6000; i++) {

}
console.timeEnd("Tiempo de ejecución del bucle")

// 7. Valida con assert si un número es positivo
// Porque el assert (aseveración) se usa para verificar que todo esté bien. Solo quieres que te moleste si algo falla
let esPositivo = -9999
console.assert(esPositivo > 0, "No es positivo")

// 8. Utiliza count
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.count("uno")
console.countReset("uno")

console.count("uno")

// 9. Utiliza trace

function naces() {
    gateas()
}

function gateas() {
    console.trace("Seguimiento")
}

naces()


// 10. Utiliza clear

//console.clear()