var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

tabla(tareas)

//Función tabla para mostrar todos los datos en una tabla
function tabla(tareas) {
    var cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = ""; // Limpiar el cuerpo de la tabla

    tareas.forEach((tarea, i) => {
        // Crear una nueva fila
        const fila = document.createElement("tr");

        // Crear una celda para la tarea
        const celdaTarea = document.createElement("td");
        celdaTarea.textContent = tarea.tarea;

        // Crear una celda para el botón
        const celdaBoton = document.createElement("td");
        const boton = document.createElement("button");
        boton.textContent = "Finalizar";
        boton.type = "button";
        boton.className = "btn btn-danger";
        boton.onclick = () => eliminar(i);

        // Agregar el botón a su celda
        celdaBoton.appendChild(boton);

        // Agregar las celdas a la fila
        fila.appendChild(celdaTarea);
        fila.appendChild(celdaBoton);

        // Agregar la fila al cuerpo de la tabla
        cuerpoTabla.appendChild(fila);
    });
}


// Función para eliminar una tarea del arreglo y actualizar la tabla
function eliminar(indice) {
    tareas.splice(indice, 1);
    tabla(tareas);
}

// Función para mostrar u ocultar el formulario según necesidad del usuario
function mostrarFormulario() {
    var formulario = document.getElementById("formulario");
    if (formulario.style.display === "none" || formulario.style.display === "") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
}

//Función para agregar una nueva tarea al arreglo
function agregarTarea() {
    var nuevaTarea = document.getElementById("nuevaTarea").value;
    tareas.push({ tarea: nuevaTarea });
    tabla(tareas);
    document.getElementById("formulario").style.display = "none";
    document.getElementById("nuevaTarea").value = "";
}



