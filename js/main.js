let pantalla = document.getElementById("pantalla");
let tecla = document.getElementsByClassName("tecla");

for (let i = 0; index < tecla.length; i++) {
    tecla[i].addEventListener("click", () => {
            pantalla.innerText += tecla[i].innerText;
    })
    
}