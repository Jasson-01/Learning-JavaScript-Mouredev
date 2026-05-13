/*
Clases 24 a 28 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7639
*/

// Objetos avanzados

// - Prototipos y Herencia

// Prototipos

let person = {
  nombre: "jasson",
  age: 26,
  greet() {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

person.sayAge = function () {
  console.log(`Tengo ${this.age} años`);
};

console.log(person);
person.sayAge();

// Herencia
// Creamos un nuevo objeto a partir del que ya existe.
console.log("HERENCIA:------------");
let programmer = Object.create(person);

programmer.language = "JavaScript";
programmer.nombre = "Aldayr";

//console.log(person);
//console.log(programmer);

console.log(person.nombre); // jasson
console.log(person.language); // undefined

console.log(programmer.nombre); //Aldayr
console.log(programmer.age); //26
console.log(programmer.language); //JavaScript
programmer.greet(); //Hola, soy Aldayr
programmer.sayAge(); //Tengo 26 años

// - Métodos estáticos y de instancia

console.log("Métodos estáticos y de instancia:---------");

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hola, soy ${this.name}`);
};

let newPerson = new Person("Arthas", 26);
newPerson.greet();
console.log(newPerson);

// - Métodos avanzados

console.log("Métodos avanzados:---------");
//assign

let personCore = { name: "Jasson" };
let personDetails = { age: 26, alias: "Yeko" };

let fullPerson = Object.assign(personCore, personDetails);
console.log(fullPerson);

// keys, values, entries
console.log(Object.keys(fullPerson));
console.log(Object.values(fullPerson));
console.log(Object.entries(fullPerson));
