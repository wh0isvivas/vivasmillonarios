// scrip.js

function inicializarMapa() {
    // Código para inicializar el mapa
}

function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var nombreCompleto = document.getElementById('nombreCompleto').value;
    var cedula = document.getElementById('cedula').value;
    var gmail = document.getElementById('gmail').value;
    var telefono = document.getElementById('telefono').value;
    var motivoContacto = document.getElementById('motivoContacto').value;

    // Realizar las validaciones
    var advertencia = document.getElementById('advertencia');
    advertencia.style.display = 'none'; // Ocultar el mensaje de advertencia

    // Validar campos vacíos
    if (
        nombreCompleto.trim() === '' ||
        cedula.trim() === '' ||
        gmail.trim() === '' ||
        telefono.trim() === '' ||
        motivoContacto.trim() === ''
    ) {
        advertencia.innerText = 'Por favor, completa todos los campos.';
        advertencia.style.display = 'block';
        return;
    }

    // Validar que el nombre tenga más de dos letras y no contenga números
    if (nombreCompleto.length <= 2 || /\d/.test(nombreCompleto) || hasRepeatedLetters(nombreCompleto)) {
        advertencia.innerText = 'Por favor, ingresa un nombre válido.';
        advertencia.style.display = 'block';
        return;
    }

    // Validar que la cédula solo contenga números
    if (!/^\d+$/.test(cedula)) {
        advertencia.innerText = 'Por favor, ingresa una cédula válida.';
        advertencia.style.display = 'block';
        return;
    }

    // Validar que el correo electrónico tenga un formato válido
    if (!isValidEmail(gmail)) {
        advertencia.innerText = 'Por favor, ingresa un correo electrónico válido.';
        advertencia.style.display = 'block';
        return;
    }

    // Validar que el teléfono solo contenga números y tenga exactamente 10 dígitos y no sea una escalera
    if (!/^\d{10}$/.test(telefono) || isStaircase(telefono)) {
        advertencia.innerText = 'Por favor, ingresa un número de teléfono válido.';
        advertencia.style.display = 'block';
        return;
    }

    // Validar que el motivo de contacto contenga más de 10 caracteres
    if (motivoContacto.length <= 10) {
        advertencia.innerText = 'Por favor, ingresa un motivo de contacto válido.';
        advertencia.style.display = 'block';
        return;
    }

    // Validar caso especial para "Jeffer"
    if (nombreCompleto.toLowerCase() === 'jeffer') {
        advertencia.innerText = 'Lo siento, Jeffer ha alcanzado su límite de usos.';
        advertencia.style.display = 'block';
        return;
    }

    // Si todas las validaciones pasan, puedes continuar con el código para enviar el formulario
    // Aquí puedes agregar la lógica para enviar los datos a tu backend o realizar cualquier otra acción necesaria

    // En este ejemplo, simplemente mostramos una alerta
    alert('Formulario enviado correctamente!');
}

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para verificar si el número de teléfono es una escalera numérica
function isStaircase(phoneNumber) {
    var staircaseRegex = /^(0123456789|9876543210)$/; // Escalera ascendente o descendente
    return staircaseRegex.test(phoneNumber);
}

// Función para verificar si hay más de 3 letras idénticas seguidas en el nombre
function hasRepeatedLetters(name) {
    var repeatedLettersRegex = /(.)\1{2,}/; // Más de 3 letras idénticas seguidas
    return repeatedLettersRegex.test(name);
}
