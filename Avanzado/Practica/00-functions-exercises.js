/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
function multiplicar(a, b) {
  let op = a * b;
  return function multiplicacion() {
    console.log(op);
  };
}
const resultado = multiplicar(3, 4);
resultado();

// 2. Implementa una función currificada que multiplique 3 números
function multiplicacionTresVeces(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const multA = multiplicacionTresVeces(5);
const multB = multA(5);
const multC = multB(5);
console.log(multC); // 125

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potenciacionDe(x, e) {
  if (e === 0) {
    return 1;
  }
  return x * potenciacionDe(x, e - 1);
}
let res = potenciacionDe(2, 3);
console.log(res);

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(x) {
  return {
    increment: () => {
      x++;
    },
    decrement: () => {
      x--;
    },
    getValue: () => x,
  };
}
console.log(
  "Un objeto es una colección de funciones con datos adjuntos; un closure es una función con datos adjuntos.",
);

console.log("4) Ejercicio CLOUSURE:");

const counter = createCounter(10);
counter.increment();
counter.decrement();
console.log(counter.getValue());

const counter2 = createCounter(5);
counter2.increment();
counter2.decrement();
console.log(counter2.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
  let sumTotal = 0;
  for (let number of numbers) {
    sumTotal += number;
  }
  return sumTotal * multiplier;
}

const res2 = sumManyTimes(5, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(res2);

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
console.log("6) Ejercicio CALLBACK:");
function sumaTotal(data, callback) {
  const result = sumaLista(data);
  callback(result);
}

function imprimirCallBack(res) {
  console.log("Resultado:", res);
}

function sumaLista(data) {
  let sumatotal2 = 0;
  for (let number of data) {
    sumatotal2 += number;
  }
  return sumatotal2;
}

sumaTotal([1, 2, 3, 4, 5], imprimirCallBack);

// 7. Desarrolla una función parcial
function multCuatroVeces(a) {
  return function (...rest) {
    return multiplicacion(a, ...rest);
  };
}

function multiplicacion(...numbers) {
  let res = 1;
  for (let number of numbers) {
    res *= number;
  }
  return res;
}

const multiplicandoCuatroVeces = multCuatroVeces(4);

console.log(multiplicandoCuatroVeces(2, 3, 1));

// 8. Implementa un ejemplo que haga uso de Spread
function agregarListaDeLetrasEnELCentro(l) {
  const listaMixta = [1, 2, ...l, 999, 1000];
  return listaMixta;
}

const listaMixtaTest = agregarListaDeLetrasEnELCentro(["A", "B", "C"]);
console.log(listaMixtaTest);

// 9. Implementa un retorno implícito
console.log("9) Retorno Implicito: usando funciones flecha");
const caracteristicasDeRaza = (nombre, fuerza, origen) => ({
  nombre,
  fuerza,
  origen,
});
console.log(caracteristicasDeRaza("Orco", 80, "AZEROTH"));

// 10. Haz uso del this léxico

const jasson = {
  edad: 26,
  anioNacimiento: 2000,
  suEdadEs: function () {
    // Arrow function hereda el "this" de suEdadEs → apunta a jasson
    const mostrar = () => console.log(`Su edad es ${this.edad}`);
    mostrar();
  },
  anioDeNacimiento: function () {
    const mostrar = () => console.log(`Nació en ${this.anioNacimiento}`);
    mostrar();
  },
};

console.log("Ejercicio 10: This lexico!");
jasson.suEdadEs(); // Su edad es 26
jasson.anioDeNacimiento(); // Nació en 2000
