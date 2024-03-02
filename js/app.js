//alert()
// Generamos un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// Variables
let intentos = 3;
let adivinado = false;
console.log("¡Bienvenido al juego de adivinar el número!");
console.log(`Tienes ${intentos} intentos para adivinar el número.`);

// Función para verificar si el número es correcto
function verificarNumero(numero) {
  if (numero === numeroAleatorio) {
    console.log("¡Adivinaste! ¡Ese es el número correcto!");
    adivinado = true;
  } else if (numero < numeroAleatorio) {
    console.log("El número es mayor. Intenta de nuevo.");
  } else {
    console.log("El número es menor. Intenta de nuevo.");
  }
}
// Bucle principal del juego
while (intentos > 0 && !adivinado) {
  const entrada = prompt("Ingresa un número entre 1 y 10:");
  const numeroIngresado = parseInt(entrada);

  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 10) {
    console.log("Ingresa un número válido entre 1 y 10.");
  } else {
    verificarNumero(numeroIngresado);
    intentos--;
    console.log(`Te quedan ${intentos} intentos.`);
  }
}

if (!adivinado) {
  console.log(`¡El número correcto era ${numeroAleatorio}! Mejor suerte la próxima vez.`);
}
