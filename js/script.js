$(document).ready(function() {

    // Alerta de bienvenida
    $("#btnAlerta").click(function() {
        alert("¡Bienvenido a tu perfil!");
    });

    // Cambiar color de fondo con localStorage
    $("#btnColor").click(function() {
        let color = prompt("Ingrese un color de fondo (nombre o hexadecimal):");
        if(color) { // Solo si se ingresa algo
            $("body").css("background-color", color);
            localStorage.setItem("fondo", color);
        }
    });

    // Aplicar color de fondo guardado al cargar la página
    if(localStorage.getItem("fondo")) {
        $("body").css("background-color", localStorage.getItem("fondo"));
    }

    // Cambiar contenido de <p> dinámicamente
    $("#btnCambiarTexto").click(function() {
        $("#descripcion").text("Este es un nuevo texto actualizado dinámicamente.");
    });

    // Submit del formulario unificado
    $("#formPerfil").submit(function(e) {
        e.preventDefault(); // Evita recargar la página

        let nombre = $("#nombre").val();
        let correo = $("#correo").val();
        let mensaje = $("#mensaje").val();

        // Validación de campos
        if(nombre === "" || correo === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Guardar datos en localStorage
        let datos = {nombre, correo, mensaje};
        localStorage.setItem("perfil", JSON.stringify(datos));

        // Agregar mensaje a la lista dinámica
        $("ul").append("<li>" + mensaje + "</li>");

        alert("Datos guardados correctamente.");
    });

    // Precargar formulario si hay datos guardados
    if(localStorage.getItem("perfil")) {
        let datos = JSON.parse(localStorage.getItem("perfil"));
        $("#nombre").val(datos.nombre);
        $("#correo").val(datos.correo);
        $("#mensaje").val(datos.mensaje);

        // También podemos precargar el mensaje en la lista
        if(datos.mensaje) {
            $("ul").append("<li>" + datos.mensaje + "</li>");
        }
    }

});
