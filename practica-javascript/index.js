const texto1 = document.getElementById("num1");
const texto2 = document.getElementById("operador");
const texto3 = document.getElementById("num2");
const btn = document.getElementById("calcular");
const result = document.getElementById("resultado");

btn.addEventListener('click', calcular)

function calcular(){
    operacion = texto2.value
    const op1 = parseFloat(texto1.value)
    const op2 = parseFloat(texto3.value)

    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/" ) && !isNaN(op1) && !isNaN(op2)){
        let resultado
        switch(operacion){
            case "+" :
                resultado = op1 + op2
                break;
            case "-" :
                resultado = op1 - op2
                break;
            case "*" :
                resultado = op1 * op2
                break;
            case "/" :
                resultado = op1 / op2
                break;
        }
        result.style = "color:blue"
        result.value =  resultado
    }else {
        result.style = "color:red"
        result.value = "ERROR!!!"
    }
}

