
const promptSync = require('prompt-sync');
const prompt = promptSync();

function orderNumbers(){

let number1 = parseFloat(prompt("ingrese el primer numero: "))
let number2 = parseFloat(prompt("ingrese el segundo numero: "))
let number3 = parseFloat(prompt("ingrese el tercer numero: "))

let mayor =  Math.max(number1, number2, number3)
let menor = Math.min(number1, number2, number3)
let centro;
if (number1 !== mayor && number1 !== menor){
    centro - number1
}   else if (number2 !== mayor && number2 !== menor) {
    centro - number2
}   else {
    centro - number3
}    
console.log("Numeros de mayor a menor:")
console.log(mayor, centro, menor)
console.log("Numeros de menos a mayor:")
console.log(menor, centro, mayor)

if(number1 === number2 && number2 === number3) {
    console.log("Los numeros son iguales." )
}
}

console.log(orderNumbers())


