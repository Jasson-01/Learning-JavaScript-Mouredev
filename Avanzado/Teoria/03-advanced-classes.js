/*
Clases 29 a 37 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=9096
*/

// Clases avanzadas

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hola, soy ${this.name}`);
  }
}

const person = new Person("Jasson", 26); // Creas una nueva instancia de la clase
console.log(person);
person.greet(); // Hola, soy Jasson

person.sayAge = function () {
  console.log(`Tengo ${this.age} años`);
};
person.sayAge(); // Tengo 26 años

// - Abstracción

class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
    this.name = name;
  }

  makeSound() {
    throw new Error("Este método tiene que ser implementado por la subclase");
  }
}

// Error
// const animal = new Animal("Mou")
// console.log(animal)

// - Polimorfismo

class Cat extends Animal {
  makeSound() {
    console.log("Miau!!!");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Guau!!");
  }
}

const cat = new Cat("MoureCat");
console.log(cat);
cat.makeSound();

const dog = new Dog("MoureDog");
console.log(dog);
dog.makeSound();

// - Mixins

console.log("MIXINS: ---------");
const FlyMixin = {
  fly() {
    console.log(`${this.name} está volando`);
  },
};

class Bird extends Animal {}

class Dragon extends Animal {}

Object.assign(Bird.prototype, FlyMixin);
Object.assign(Dragon.prototype, FlyMixin);

const bird = new Bird("JassonBird");

console.log(bird.name);
bird.fly();

const dragon = new Dragon("JassonDragon");
console.log(dragon.name);
dragon.fly();

// - Patrón Singleton (Una tipo de Patrón de diseño)

console.log("Singleton: ----------");

class Session {
  constructor(name) {
    // 1. EL CHEQUEO: Revisa si la "clase" (el molde) ya tiene una instancia guardada.
    // Session.instance es como una variable estática en Java: le pertenece a la clase, no al objeto.
    if (Session.instance) {
      // Si ya existe, "aborta" la creación de un nuevo objeto y devuelve el que ya teníamos.
      return Session.instance;
    }

    // 2. LA ASIGNACIÓN: Si llegamos acá, es porque es la PRIMERA vez que se hace un 'new'.
    this.name = name; // Guardamos el nombre en el nuevo objeto.

    // 3. EL ANCLAJE: Guardamos este objeto (this) en la propiedad estática de la clase.
    // A partir de ahora, Session.instance dejará de ser 'undefined' y tendrá este objeto.
    Session.instance = this;

    // Nota: En JS, si un constructor no tiene un 'return' explícito, devuelve 'this' por defecto.
  }
}

// --- PRUEBA DE FUEGO ---

const s1 = new Session("Jasson"); // Crea el objeto, Session.instance = s1.
const s2 = new Session("Moure"); // Entra al 'if', retorna s1. Ignora el nombre "Moure".

console.log(s1.name); // "Jasson"
console.log(s2.name); // "Jasson" (Es el mismo s1)
console.log(s1 === s2); // true (Misma dirección de memoria)

// - Symbol
console.log("Symbols: --------");
const ID = Symbol("id");

class User {
  constructor(name) {
    this.name = name;
    this[ID] = Math.random();
  }

  getId() {
    return this[ID];
  }
}

const user = new User("Brais");
console.log(user.name); // Brais
console.log(user.ID); // No te mostraría el número.
console.log(user.getId()); //  te mostraría el número.
console.log(user[ID]); //sí te mostraría el número.

//------------
console.log("Symbols2: --------");
class User2 {
  // 1. Hay que declararla obligatoriamente arriba
  #id;

  constructor(name) {
    this.name = name;
    this.#id = Math.random(); // 2. Se usa con el #
  }

  getId() {
    return this.#id; // 3. El método interno puede leerla
  }
}

const user2 = new User2("Brais");
console.log(user2.name); // "Brais"
// console.log(user.#id); // ¡ERROR CRÍTICO DE SINTAXIS! El navegador no te deja ni compilar.
console.log(user2.getId()); // Funciona perfectamente

// - instanceof

class Car {}

const car = new Car();

console.log(car instanceof Car); // true

// - create

const anotherCar = Object.create(Car.prototype);
console.log(anotherCar instanceof Car); // true

// - Proxy

console.log("Proxy: ----------");

const proxy = {
  get(target, property) {
    console.log(`Se accede a la propiedad ${property}`);
    return target[property];
  },
  set(target, property, value) {
    if (property === "balance" && value < 0) {
      throw new Error("El saldo no puede ser negativo");
    }
    target[property] = value;
  },
};

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}

const account = new Proxy(new BankAccount(100), proxy);
console.log(account.balance);

account.balance = 50;
console.log(account.balance);

// account.balance = -10  // Error
