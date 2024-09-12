// Tipos de Datos en JS

//1. UNDEFINED
console.warn("--- Tipo de dato UNDEFINED ---")
let cliente;

cliente = 
console.log(`El cliente es: ${cliente}`);
console.log(`eL tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "George Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`eL tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 1234
console.log(`El cliente es: ${cliente}`);
console.log(`eL tipo de dato de la variable cliente es: ${typeof(cliente)}`);
//Undefined es el tipo de dato que por defecto se asigna variables noinicializadas o no declaradas

// 2. BOOLEAN 

console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/False)")
let esPremium = "No lo se";
console.log(`Este es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la otra variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignado el valor true de la variable");
esPremium="true";
console.log(`Este es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la otra variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignado el valor true de la variable");
esPremium=true;
console.log(`Este es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la otra variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignado el valor true de la variable");
esPremium=false;
console.log(`Este es el cliente premium? : ${esPremium}`);
console.log(`El tipo de dato de la otra variable esPremium es: ${typeof(esPremium)}`);

if(esPremium) {
    console.log("El cliente pago por usar el servicio.");
}else {
    console.log("El cliente recibe los servicios gratuitos")
}

// 3. NUMBER

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion ;

console.warn("--- Tipo de Dato - NUMBER (Numeros, Positivos, Negativos, Decimales, Flotamtes)");
console.log(`Tu Saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad}de productos.`)
console.log(`El importe tortal de la compra es: ${cantidad*costo_producto}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El clienteraliza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);

