//Funciones para avanzar 

const imagen = document.getElementById("imagen");
const avanzarBtn = document.getElementById("avanzarBtn");

imagen.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

imagen.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});