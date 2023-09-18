function mostrarDatos() {
    document.getElementById("resultados").style.visibility = "visible"
    // Guardamos los datos en variables
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var dni = document.getElementById("dni").value
    var edad = document.getElementById("edad").value
    
    // Validamos si alguno de los campos está vacío
    if (nombre === '' || apellido === '' || dni === '' || edad === '') {
        alert('Por favor, complete todos los campos.');
        document.getElementById("resultados").style.visibility = "hidden";
        return; // Salimos de la función si falta algún dato
    } else {
        var correo = apellido.split(' ').join('') + "." + nombre.split(' ').join('') + "@empresa.com.ar"
        var password = apellido.split(' ').join('') + "-" + dni%1000 + "!"
        // Si todos los datos están completos, procedemos a mostrar la otra card
        document.getElementById("resultados").style.visibility = "visible";
        
        // Colocamos los datos en los span
        document.getElementById("mostrarNombre").textContent = nombre
        document.getElementById("mostrarApellido").textContent = apellido.toUpperCase()
        document.getElementById("mostrarDNI").textContent = dni
        document.getElementById("mostrarEdad").textContent = edad
        document.getElementById("mostrarCorreo").textContent = correo.toLowerCase()
        document.getElementById("mostrarPassword").textContent = password
    }
}

function borrarDatos() {
    document.getElementById("formulario").reset()
    document.getElementById("mostrarNombre").textContent = ""
    document.getElementById("mostrarApellido").textContent = ""
    document.getElementById("mostrarDNI").textContent = ""
    document.getElementById("mostrarEdad").textContent = ""
    document.getElementById("mostrarCorreo").textContent = ""
    document.getElementById("mostrarPassword").textContent = ""
    document.getElementById("resultados").style.visibility = "hidden"
}

window.onload = function(){
    document.getElementById("resultados").style.visibility = "hidden"
}