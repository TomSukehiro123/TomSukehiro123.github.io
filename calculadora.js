const primerNumero = document.getElementById('numero1');
const signoop = document.getElementById('signo');
const segundoNumero = document.getElementById('numero2');
const primerboton = document.getElementById('boton');
const texto = document.getElementById('texto')

function calcular(){
    const operador = signoop.value 
    const numero = parseFloat(primerNumero.value)
    const numerootro = parseFloat(segundoNumeroNumero.value)
    if(operador == "+" || operador == "-" || operador == "*" || operador == "/"){
    let resultado
    switch (operador) {
        case "+":
            resultado = numero + numerootro;
            
            break;
            case "-":
                resultado = numero - numerootro;
                
                break;
                case "*":
                    resultado = numero * numerootro;
                    
                    break;
                    case "/":
                        resultado = numero / numerootro;
                        
                        break;
                        


    
        
    } 
}
}