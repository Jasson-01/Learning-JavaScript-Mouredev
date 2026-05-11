/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let listaNumerosPositivos = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 18, 25, 36, 45, 23, 45, 89, 12, 21, 43,
];

//map

const aumentaEn1 = listaNumerosPositivos.map((e) => e + 1);
console.log(aumentaEn1);

//filter

const soloCuadraticos = listaNumerosPositivos.filter((num) =>
  Number.isInteger(Math.sqrt(num)),
);
console.log(soloCuadraticos);
//Number es un objeto global que ya viene integrado en JavaScript (al igual que Math, Array o String). Se utiliza para trabajar con números y contiene métodos útiles para validarlos o convertirlos.
//Number.isInteger(): Es un método "estático" de ese objeto. Su única función es decirte si un número es entero (como 4) o tiene decimales (como 4.5).

//reduce
const minimo = listaNumerosPositivos.reduce((res, actual) => {
  return actual < res ? actual : res;
}, listaNumerosPositivos[0]);
console.log(minimo);
//otra forma es usando "MIN de Math":
//const minimo = listaNumerosPositivos.reduce((res, actual) => Math.min(res, actual));

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numeros = [1, 2, 3, 4, 5];
const paresAlCubo = numeros.map((e) => e ** 3).filter((e) => e % 2 === 0);
console.log(paresAlCubo);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

//FLAT
let diferentesNiveles = [1, [2, [3, [4, [5, [6, [7, 8, 9, 10]]]]]]];
const todosAlMismoNivel = diferentesNiveles.flat(Infinity); // Infinity aplana todos los niveles
console.log(todosAlMismoNivel); // Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//flatMap
// sirve para transformar cada elemento en un array y luego "aplanarlos" todos en un solo array.
let frase = ["tres", "dos", "uno", "depsegue!!!", ";D"];
let estrofa = frase.flatMap((e) => e.split(" "));
console.log(estrofa);

// 4. Ordena un array de números de mayor a menor
const mayorAMenor = numeros.sort((a, b) => b - a);
console.log(mayorAMenor);

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const listaA = ["a", "b", "c", "d"];
const listaB = ["c", "d", "e", "f"];
const conjA = new Set(listaA);
const conjB = new Set(listaB);

const union = new Set([...conjA, ...conjB]);
console.log(union);

const intersection = new Set([...conjA].filter((e) => conjB.has(e)));
console.log(intersection);

const diferencia = new Set([...conjA].filter((e) => !conjB.has(e)));
console.log(diferencia);

// 6. Itera los resultados del ejercicio anterior
console.log("Iteracion Union:");
const iteracionUnion = union.forEach((e) => console.log(e));
console.log("Iteracion Interseccion:");
const iteracionIntersection = intersection.forEach((e) => console.log(e));
console.log("Iteracion Diferencia:");
const iteracionDiferencia = diferencia.forEach((e) => console.log(e));

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
const userMap = new Map();

// .set(clave, valor)
userMap.set(1, { nombre: "Jasson", edad: 20, email: "jasson@mail.com" });
userMap.set(2, { nombre: "Brais", edad: 35, email: "moure@mail.com" });
userMap.set(3, { nombre: "Pepe", edad: 17, email: "pepe@mail.com" });

// Para iterarlos:
userMap.forEach((datos, id) => {
  console.log(`ID: ${id} - Nombre: ${datos.nombre}, Email: ${datos.email}`);
});

// 8. Dado el mapa anterior, crea un array con los nombres

const arrayNombresMap = Array.from(userMap.values()).map((user) => user.nombre);
console.log(arrayNombresMap);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const conjEmailsAdultos = new Set(
  Array.from(userMap.values())
    .filter((user) => user.edad >= 18)
    .map((user) => user.email),
);
console.log(conjEmailsAdultos);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

const mapaAObjeto = Object.fromEntries(userMap);
console.log(mapaAObjeto);

const objetoAMapa = new Map(
  Object.values(mapaAObjeto).map((user) => [user.email, user]),
);
console.log(objetoAMapa);
