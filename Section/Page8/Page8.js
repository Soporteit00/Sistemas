//Funcion para avanzar 

const botones = document.getElementById("botones");
const avanzarBtn = document.getElementById("avanzarBtn");

botones.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

botones.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});

//Funcion para controlar el evento de la tarjeta 
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );