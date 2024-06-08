let pantalla = document.getElementsById("pantalla");
let teclas = document.getElementsByClassName("tecla");
let operaciones = document.getElementsByClassName("operacion");
let operacion = "";

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click", () => {
        pantalla.innerText += teclas[i].innerText;
    })
    
}

for (let i = 0; i < operaciones.length; i++) {
    operaciones[i].addEventListener("click", () => {
        switch (operaciones[i].innerText) {
            case "+":
                operacion = "suma";
                break;
            case "-":
                operacion = "resta";
                break;
            case "*":
                operacion = "multiplicacion";
                break;
            case "/":
                operacion = "division";
                break;        
            default:
                console.log("operacion no valida");
        }
    })
    
}