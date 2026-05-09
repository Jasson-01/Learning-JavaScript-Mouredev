// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Jasson")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, "Beck")
const greet2 = returnGreeting()
greet2("Arthas DB")
console.log("-----------------------------------------------------------")

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => { // en Objetos las funciones flecha no tienen su propio "this", ellas captura el this global(fuera del objeto) o "top level"
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting() // Hola, Brais
handler.arrowGreeting(); // Hola, undefined

// IIFE (Expresión de Función Invocada Inmediatamente)

(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))


// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// Closures (Clausuras)

function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(`Contador: ${counter}`);
    }    
}

const counter = createCounter();

counter()
counter()

console.log("Si lo llamamos de nuevo, la funcion se reinicia :D")
const counter2 = createCounter();

counter2()
counter2()

// Otro ejemplo:

function crearSaludador(prefijo) {
    return function(nombre) {
        console.log(`${prefijo}, ${nombre}`);
    };
}

const saludarFormal = crearSaludador("Estimado");
const saludarCopa = crearSaludador("¿Qué onda?");

saludarFormal("Jasson"); // Estimado, Jasson
saludarCopa("Jasson");   // ¿Qué onda?, Jasson