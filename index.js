const fnSuma = require('./modules/suma')
const fnResta = require('./modules/resta')
const fnMultiplicacion = require('./modules/multiplicacion')
const fnDivision = require('./modules/division')
const process = require('process')
const params = process.argv;
let action = params[2]
let numberOne = Number(params[3])
let numberTwo = Number(params[4])

numberOne = parseInt(numberOne)
numberTwo = parseInt(numberTwo)

if(action === 'suma'){
    let resultadoSuma = fnSuma(numberOne,numberTwo);
    console.log("la suma da como resultado ",resultadoSuma);
}

if(action === 'resta'){
    let resultadoResta = fnResta(numberOne,numberTwo);
    console.log("la resta da como resultado ", resultadoResta);
}   

if(action === 'multiplicacion'){
    let resultadoMultiplicacion = fnMultiplicacion(numberOne,numberTwo);
    console.log("la multiplicacion da como resultado ",resultadoMultiplicacion);
}

if(action === 'division'){
    let resultadoDivision = fnDivision(numberOne,numberTwo);
    console.log("la division da como resultado ",resultadoDivision);
}

