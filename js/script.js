$(document).ready(function() {

    // Alerta de bienvenida
    $("#btnAlerta").click(function() {
        alert("¡Bienvenido a tu perfil!");
    });

    // Cambiar color de fondo
    $("#btnColor").click(function() {
        let color = prompt("Ingrese un color de fondo:");
        $("body").css("background-color", color);
        localStorage.setItem("fondo", color);
    });

    // Aplicar color de fondo guardado
    if(localStorage.getItem("fondo")) {
        $("body").css("background-color", localStorage.getItem("fondo"));
    }

    // Cambiar contenido de <p>
    $("#btnCambiarTexto").click(function() {
        $("#descripcion").text("Este es un nuevo texto actualizado dinámicamente.");
    });

    // Validar y guardar formulario
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

    // Precargar formulario
    if(localStorage.getItem("perfil")) {
        let datos = JSON.parse(localStorage.getItem("perfil"));
        $("#nombre").val(datos.nombre);
        $("#correo").val(datos.correo);
        $("#mensaje").val(datos.mensaje);
    }

    // Agregar elementos dinámicamente a lista
    $("#formPerfil").on("submit", function(e){
        e.preventDefault();
        let mensaje = $("#mensaje").val();
        if(mensaje !== "") {
            $("ul").append("<li>" + mensaje + "</li>");
        }
    });

});
