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

    $("#formPerfil").submit(function(e) {
        e.preventDefault();
        let nombre = $("#nombre").val();
        let correo = $("#correo").val();
        let mensaje = $("#mensaje").val();

        if(nombre === "" || correo === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        let datos = {nombre, correo, mensaje};
        localStorage.setItem("perfil", JSON.stringify(datos));
        alert("Datos guardados correctamente.");
    });

    if(localStorage.getItem("perfil")) {
        let datos = JSON.parse(localStorage.getItem("perfil"));
        $("#nombre").val(datos.nombre);
        $("#correo").val(datos.correo);
        $("#mensaje").val(datos.mensaje);
    }