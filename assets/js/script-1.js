function pintarBloque1(color) {
    elementoNegro = document.querySelector("#bloque-1")
    elementoNegro.style.backgroundColor = color
}  


function pintarBloque2(color) {
    elementoNegro = document.querySelector("#bloque-2")
    elementoNegro.style.backgroundColor = color
}  

function pintarBloque3(color) {

    elementoNegro = document.querySelector("#bloque-3")
    elementoNegro.style.backgroundColor = color
}  

function pintarBloque4(color) {
    elementoNegro = document.querySelector("#bloque-4")
    elementoNegro.style.backgroundColor = color
}  


    black = document.querySelector("#bloque-1");
    black.addEventListener("click", pintarBloque1);

    black = document.querySelector("#bloque-2");
    black.addEventListener("click", pintarBloque2);
    
    black = document.querySelector("#bloque-3");
    black.addEventListener("click", pintarBloque3);

    black = document.querySelector("#bloque-4");
    black.addEventListener("click", pintarBloque4);



