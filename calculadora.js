/*

const sumar=(a,b) => a+b
const restar=(a,b) => a-b
const multiplicar=(a,b) => a*b
const dividir = (a, b)=> a/b

function calculadora(a,b,cb){
    return cb(a,b)
}

console.log("🚀 ~ calculadora:", calculadora(2,2,multiplicar))
*/


//Promesas sincronicas sirven para atrapar errores y que a pesar de errores, no se haga un bloqueo a la ejecucion
function sumar (a,b){
    return new Promise((resolve, reject)=>{
        if (isNaN(a) ) {
            reject('El primer valor debe ser un número')
        } else if(isNaN(b)){
            reject ('El segundo valor debe ser un número')
        } else {
            resolve(a+b)
        }
    })
}

function calcular (a,b){
    sumar(a,b)
    .then((result)=>console.log(result))
    .catch((err)=> console.log(err))
}

calcular(2,2)