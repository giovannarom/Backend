/* 
Callback
Función que se ejecuta por cada elemento del array hasta que la condición se cumple o
se recorren todos los elementos.

Element: El elemento actual del array
arrayDeFrutas.map(element => callback)
*/

let arrayDeFrutas=["kiwi", "mandarina"]
arrayDeFrutas.map(fruta => imprimirFruta(fruta))
function imprimirFruta(fruta){
    console.log(fruta,fruta.length)
}
arrayDeFrutas.map(fruta => fruta.length)

/* 
    El método map() es una función incorporada en JavaScript que se 
    utiliza para transformar cada elemento de un array y crear un nuevo array 
    resultante con los resultados de aplicar una función a cada elemento del array 
    original. En otras palabras, map() realiza una operación en cada elemento del array y devuelve un nuevo array con los resultados de esas operaciones.
*/