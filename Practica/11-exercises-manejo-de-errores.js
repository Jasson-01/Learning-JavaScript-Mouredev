/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
let conjuntoDeNumeros;
try {
    // Código que intenta ejecutar
    console.log(conjuntoDeNumeros.operaciones)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error ;D, intente denuevo por favor ensalada.")
}
console.log("----------------------------------------------------------------")
// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(conjuntoDeNumeros.palabra)
} catch (error) {
    console.log("Se ha producido un error otra vez:", error.message)
} finally {
    console.log("Este código se ejecuta siempre, no importa que!!!")
}
console.log("----------------------------------------------------------------")
// 3. Lanza una excepción genérica
try {
    throw new Error("Este es un error genérico lanzado manualmente")
} catch (error) {
    console.log("Error genérico capturado:", error.message)
}
console.log("----------------------------------------------------------------")


// 4. Crea una excepción personalizada
class MiExcepcionPersonalizada extends Error {
    constructor(message) {
        super(message)
        this.name = "MiExcepcionPersonalizada"
    }
}

class ErrorDeTexto extends Error {
    constructor(message) {
        super(message)
        this.name = "ErrorDeTexto"
    }
}
class ErrorDeNulo extends Error {
    constructor(message) {
        super(message)
        this.name = "ErrorDeNulo"
    }
}


// 6. Lanza varias excepciones según una lógica definida
function soloNumerosMejorada(q) {

    if (q === null) {
        throw new ErrorDeNulo("Se ha recibido un valor nulo")
    }
    if (typeof q === "string") {
        throw new ErrorDeTexto("No se permiten cadenas de texto: " + q)
    }
    if (typeof q === "boolean") {
        throw new MiExcepcionPersonalizada("Los booleanos no son válidos")
    }
    if (Array.isArray(q)) {
        q.push(99)
        return q
    } else if (typeof q === "number") {
        return [q]
    } else {
        // 5. Lanza una excepción personalizada   ACA ESTA EL 5)
        throw new MiExcepcionPersonalizada("Tipo no soportado: se esperaba un número o array")
    }
}

// 7. Captura varias excepciones en un mismo try-catch
function realizarPrueba(valor) {
    try {
        console.log(`--- Ejecutando prueba con valor: ${valor} ---`)
        console.log("Resultado:", soloNumerosMejorada(valor))
    } catch (error) {
        if (error instanceof ErrorDeTexto) {
            console.log("ERROR CAPTURADO (Texto):", error.message)
        } else if (error instanceof ErrorDeNulo) {
            console.log("ERROR CAPTURADO (Nulo):", error.message)
        } else if (error instanceof MiExcepcionPersonalizada) {
            console.log("ERROR CAPTURADO (Personalizada):", error.message)
        } else {
            console.log("ERROR INESPERADO:", error.name, "->", error.message)
        }
    }
    console.log("------------------------------------------")
}

realizarPrueba(5)               // Caso correcto
realizarPrueba("prueba1")      // Lanza ErrorDeTexto
realizarPrueba(null)           // Lanza ErrorDeNulo
realizarPrueba(true)           // Lanza MiExcepcionPersonalizada
realizarPrueba("prueba STring") // Lanza ErrorDeTexto

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let valores = ["10.5", "42", "hola", "3.14", "mundo", "99.9"]
for (let i = 0; i < valores.length; i++) {
    try {
        let numero = parseFloat(valores[i])

        // Verificamos si el resultado NO es un número
        if (isNaN(numero)) {
            throw new Error(`El valor '${valores[i]}' no se puede convertir a número`)
        }

        console.log(`Éxito: '${valores[i]}' transformado a ${numero}`)

    } catch (error) {
        console.log(`ERROR en el índice ${i}: ${error.message}`)
    }
}

//¿Por qué es útil esto?
//Continuidad: Si el bucle no tuviera try-catch y lanzaras un error, el bucle se detendría en el primer error.
//Robustez: Al tener el try-catch dentro del bucle, el programa procesa los que están bien, avisa de los que están mal, y sigue con el siguiente.


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// Primero, creamos la excepción personalizada
class PropiedadFaltanteError extends Error {
    constructor(message) {
        super(message)
        this.name = "PropiedadFaltanteError"
    }
}

// Creamos la función verificadora
function verificarPropiedad(objeto, propiedad) {
    // Usamos el operador 'in' o 'hasOwnProperty' para chequear
    if (!(propiedad in objeto)) {
        throw new PropiedadFaltanteError(`El objeto no tiene la propiedad obligatoria: "${propiedad}"`)
    }
    console.log(`✅ Propiedad "${propiedad}" verificada correctamente.`)
}

// Pruebas
const usuario = {
    username: "mouredev",
    id: 101
}
try {
    verificarPropiedad(usuario, "username") // Este pasa
    verificarPropiedad(usuario, "email")    // Este lanza el error
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

//¿Por qué esto es común en la vida real?
//Muchos programas fallan porque intentan leer una propiedad que no existe (el famoso undefined). Al hacer esta verificación y lanzar un error personalizado, el programador sabe exactamente qué dato faltaba en lugar de recibir un mensaje genérico y confuso.

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

// Esta función simula una tarea que falla el 80% de las veces
function tareaInestable() {
    if (Math.random() > 0.2) {
        throw new Error("Servidor no responde")
    }
    return "¡Conexión establecida! ✅"
}

function ejecutarConReintentos(limite) {
    let intentos = 0
    let completado = false

    // El bucle corre mientras no hayamos terminado y no pasemos el límite
    while (intentos < limite && !completado) {
        try {
            intentos++
            console.log(`Intento #${intentos} en curso...`)

            // Intentamos la tarea
            const resultado = tareaInestable()

            // Si llega aquí, es que no hubo error
            console.log(resultado)
            completado = true

        } catch (error) {
            console.log(`Fallo en intento ${intentos}: ${error.message}`)

            if (intentos === limite) {
                console.log("❌ Se agotaron los 10 intentos. Inténtalo más tarde.")
            }
        }
    }
}

// Probamos la función
ejecutarConReintentos(10)

//¿Por qué funciona así?
//1) try: Es el que intenta ejecutar la "tarea inestable".
//2) catch: Si la tarea falla, el catch "atrapa" el error, imprime el mensaje de fallo, pero no deja que el programa se detenga.
//3) Bucle while: Como el programa no se detuvo, el bucle vuelve a empezar e incrementa el contador de intentos.