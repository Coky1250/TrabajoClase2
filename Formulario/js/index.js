document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencias a elementos del DOM
    const inputTexto = document.getElementById("inputTexto"); // Campo de entrada de texto
    const btnAgregar = document.getElementById("btnAgregar"); // Botón de agregar
    const btnBorrar = document.getElementById("btnBorrar");   // Botón de borrar
    const lista = document.getElementById("lista");           // Lista no ordenada

    // Agrega un evento de escucha al botón "Agregar"
    btnAgregar.addEventListener("click", function () {
        // Obtiene el texto ingresado en el campo de entrada, eliminando espacios en blanco al principio y al final
        const textoIngresado = inputTexto.value.trim();

        // Verifica si el texto ingresado no está vacío
        if (textoIngresado !== "") {
            // Crea un nuevo elemento de lista
            const li = document.createElement("li");

            // Establece el texto del elemento de lista en minúsculas y lo asigna al elemento de lista
            li.textContent = textoIngresado.toLowerCase();

            // Agrega el elemento de lista a la lista no ordenada
            lista.appendChild(li);

            // Limpia el campo de entrada después de agregar el elemento de lista
            inputTexto.value = "";
        }
    });

    // Agrega un evento de escucha al botón "Borrar"
    btnBorrar.addEventListener("click", function () {
        // Obtiene una referencia al último elemento de lista
        const ultimaEntrada = lista.lastChild;

        // Verifica si hay un último elemento en la lista
        if (ultimaEntrada) {
            // Elimina el último elemento de la lista
            lista.removeChild(ultimaEntrada);
        }
    });
});