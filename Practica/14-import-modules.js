import { auto, euler, raizCuadradaDe } from "./13-exercises-modules.js";

console.log(raizCuadradaDe(16))

console.log(euler.toFixed(2))

let auto2 = new auto(2000, 666)
console.log(auto2.anio)
console.log(auto2.km)
console.log(auto2.tocarBocina())

// En el archivo 14-import-modules.js
// Como es "Default" y solo hay uno! se le puede poner cualquier nombre! como "miPaquete"
import miPaquete from "./13-exercises-modules.js"

console.log(miPaquete.miConstanteDefault)
console.log(miPaquete.saludar())
