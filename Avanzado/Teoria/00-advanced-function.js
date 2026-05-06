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
    arrowGreeting: () => { // en las funciones flecha no tienen su propio "this", ellas captura el this global(fuera del objeto) o "top level"
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting() // Hola, Brais
handler.arrowGreeting(); // Hola, undefined
