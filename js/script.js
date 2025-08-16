$(document).ready(function() {

    $("#btnAlerta").click(function() {
        alert("¡Bienvenido a tu perfil!");
    });

    $("#btnColor").click(function() {
        let color = prompt("Ingrese un color de fondo:");
        $("body").css("background-color", color);
        localStorage.setItem("fondo", color);
    });

    if(localStorage.getItem("fondo")) {
        $("body").css("background-color", localStorage.getItem("fondo"));
    }

    $("#btnCambiarTexto").click(function() {
        $("#descripcion").text("Este es un nuevo texto actualizado dinámicamente.");
    });
