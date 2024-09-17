// Comentarios de una sola linea

/* 
COMENTARIOS MULTILINEA
*/

//EJERCICIO 01 : Declaracion de variables

// a) Var

<<<<<<< HEAD
var minombre = "LuisDaniel" 
=======
var miNombre = "LuisDaniel"
var misApellidos;
var miEdad = 20;

console.warn("--- Declaracion de variables usando: VAR");
console.log("Intentando leer las variables",miNombre, misApellidos);

misApellidos = "Suarez Escamilla"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas",miNombre,misApellidos);

console.warn("--- Declaracion de variables del tipo constante usando: CONST")
const miUniversidad ="UT Xicotepec";
const miMatricula = 230040
console.log("Hola, ", miNombre," ",misApellidos," se que estudias actualmente en: ",miUniversidad, " asignarion la matricula ", miMatricula, " y tienes una edada de:", miEdad, "años.");

// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeOf()

console.log("Analizando los datos puedo deducir que: ")
console.log("Mi nombre es del tipo ", typeof(miNombre));
console.log("Mis apellidos es del tipo ", typeof(misApellidos));
console.log("Mi universidad es del tipo ", typeof(miUniversidad));
console.log("Mi matricula es del tipo ", typeof(miMatricula));
console.log("Mi edad es del tipo ", typeof(miEdad));

let miFechaNacimiento= "2005-03-31";
let miColorFavorito;

console.warn("--- Declaracion de Variable Locales usando : LET")
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el: ", miFechaNacimiento, "y tu color favorito es: mmm dejame pensar...")
miColorFavorito="Rojo";
console.log(`Creo que es ${miColorFavorito}, le atine?`)
//la manrea de mezclar textos fijos con el valor actual de las variables se les conoce como interpolacion y deben iniciar y finalizar on un backtic - title inversa
console.log("Analizando los datos puedo decir que:");
console.log("Mi fecha de Nacimiento es de tipo: ", typeof(miFechaNacimiento));
console.log("Mi color Favorito es de tipo: ", typeof(miColorFavorito));
>>>>>>> LuisDaniel-Practica3
