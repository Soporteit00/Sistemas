//Funcion para avanzar 

const planner = document.getElementById("planner");
const avanzarBtn = document.getElementById("avanzarBtn");

planner.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

planner.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});

//Funcion para controlar el evento de la tarjeta 

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );