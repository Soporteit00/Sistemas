//Funciones para avanzar 

const icon = document.getElementById("icon");
const avanzarBtn = document.getElementById("avanzarBtn");

icon.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

icon.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});


//Funcion para controlar evento de la tarjeta de Teams
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );