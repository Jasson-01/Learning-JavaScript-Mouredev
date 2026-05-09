// Ciudadanos de primera clase

const greet = function (name) {
  console.log(`Hola, ${name}`);
};

greet("Jasson");

function processGreeting(greetFunction, name) {
  greetFunction(name);
}

function returnGreeting() {
  return greet;
}

processGreeting(greet, "Beck");
const greet2 = returnGreeting();
greet2("Arthas DB");
console.log("-----------------------------------------------------------");

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// - this léxico
const handler = {
  name: "Brais",
  greeting: function () {
    console.log(`Hola, ${this.name}`);
  },
  arrowGreeting: () => {
    // en Objetos las funciones flecha no tienen su propio "this", ellas captura el this global(fuera del objeto) o "top level"
    console.log(`Hola, ${this.name}`);
  },
};

handler.greeting(); // Hola, Brais
handler.arrowGreeting(); // Hola, undefined

// IIFE (Expresión de Función Invocada Inmediatamente)

(function () {
  console.log("IIFE clásico");
})();

(() => {
  console.log("IIFE con arrow function");
})();

// Parámetros Rest (...)

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 15));

// Operador Spread (...)

const numbers = [1, 2, 3];
function sumWithSpread(a, b, c) {
  return a + b + c;
}

console.log(sumWithSpread(1, 2, 3)); // Sin Spread
console.log(sumWithSpread(...numbers)); // Con Spread

// Closures (Clausuras)

function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(`Contador: ${counter}`);
  };
}

const counter = createCounter();

counter();
counter();

console.log("Si lo llamamos de nuevo, la funcion se reinicia :D");
const counter2 = createCounter();

counter2();
counter2();

// Otro ejemplo:

function crearSaludador(prefijo) {
  return function (nombre) {
    console.log(`${prefijo}, ${nombre}`);
  };
}

const saludarFormal = crearSaludador("Estimado");
const saludarCopa = crearSaludador("¿Qué onda?");

saludarFormal("Jasson"); // Estimado, Jasson
saludarCopa("Jasson"); // ¿Qué onda?, Jasson

// Recursividad

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Funciones Parciales
function partialSum(a) {
  return function (b, c) {
    return sum(a, b, c);
  };
}

const sumWith = partialSum(4);
console.log("Ejemplo de funciones parciales");

console.log(sumWith(2, 3));
console.log(sumWith(1, 2));

//Currying
function currySum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return sum(a, b, c, d);
      };
    };
  };
}

const sumAB = currySum(1)(2); //Referencia los dos primeros valores
const sumC = sumAB(3); //Referencia el tercer valor

console.log("Ejemplos de Currying");

console.log(sumC(3)); //Referencia el cuarto valor
console.log(sumC(4)); //Referencia el cuarto valor
console.log(sumAB(5)(7)); //Referencia tercer y cuarto valor

// CALLBACKS
function processData(data, callback) {
  const result = sum(...data);
  callback(result);
}

function processResult(result) {
  console.log(result);
}

function processResult2(result) {
  console.log(`Mi resultado es: ${result}`);
}

console.log("Ejemplos de Callbacks");
processData([1, 2, 3], processResult);
processData([1, 2, 3], processResult2);
processData([1, 2, 3], (result) => {
  console.log(`Mi resultado en la arrow function es: ${result}`);
});
