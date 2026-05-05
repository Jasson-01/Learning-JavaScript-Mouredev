/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function raizCuadradaDe(n) {
    return Math.sqrt(n)
}

// 2. Exporta una constante
export const euler = 2.71828;

// 3. Exporta una clase
// 4. Importa una función
// 5. Importa una constante
// 6. Importa una clase
export class auto{
    constructor(anio, km){
        this.anio = anio;
        this.km = km;
     }

    tocarBocina(){
        return "ti tiiiiiii!!!!!"
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// Definimos las cosas primero
const miConstanteDefault = "Hola mundo"

function saludar() {
    return "Hola!"
}

class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }
}

export default {
    miConstanteDefault,
    saludar,
    Persona
}

// 9. Exporta una función, una constante y una clase desde una carpeta
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import substract from "../Teoria/16-export-modules.js"
console.log(substract(10, 5)) // Imprimirá 5
