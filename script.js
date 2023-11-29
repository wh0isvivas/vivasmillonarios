// script.js

function mostrarMenu() {
    document.getElementById('menu').style.display = 'block';
}

function mostrarDia(dia) {
    let opcionesDia = '';

    switch (dia) {
        case 'lunes':
            opcionesDia = `<h3>Opciones para Lunes 27</h3>
                            <p>Normal: Ensalada de pollo</p>
                            <p>Vegetariana: Ensalada de quinoa</p>
                            <p>Libre de alergias: Sopa de lentejas</p>`;
            break;
        case 'martes':
            opcionesDia = `<h3>Opciones para Martes 28</h3>
                            <p>Normal: Tacos de pollo</p>
                            <p>Vegetariana: Tacos de frijoles</p>
                            <p>Libre de alergias: Arroz con verduras</p>`;
            break;
        case 'miercoles':
            opcionesDia = `<h3>Opciones para Miércoles 29</h3>
                            <p>Normal: Pollo a la parrilla con quinoa</p>
                            <p>Vegetariana: Tofu con arroz integral</p>
                            <p>Libre de alergias: Pescado al horno con batatas</p>`;
            break;
        case 'jueves':
            opcionesDia = `<h3>Opciones para Jueves 30</h3>
                            <p>Normal: Espaguetis con albóndigas</p>
                            <p>Vegetariana: Espaguetis con salsa de tomate</p>
                            <p>Libre de alergias: Ensalada de garbanzos</p>`;
            break;
        case 'viernes':
            opcionesDia = `<h3>Opciones para Viernes 1</h3>
                            <p>Normal: Pizza de pollo y verduras</p>
                            <p>Vegetariana: Pizza de champiñones y pimientos</p>
                            <p>Libre de alergias: Wraps de lechuga con pavo</p>`;
            break;
        default:
            opcionesDia = `<p>Selecciona un día válido</p>`;
    }

    document.getElementById('opciones-comida').innerHTML = opcionesDia;
}

function sugerirComida() {
    const tipoComida = document.getElementById('tipo-comida').value;
    let sugerencia = '';

    switch (tipoComida) {
        case 'desayuno':
            sugerencia = 'Sugerencia para Desayuno: Tostadas con aguacate y tomate';
            break;
        case 'almuerzo':
            sugerencia = 'Sugerencia para Almuerzo: Ensalada de pollo con quinoa';
            break;
        case 'bebida':
            sugerencia = 'Sugerencia para Bebida: Batido de frutas';
            break;
        default:
            sugerencia = 'Selecciona un tipo de comida válido';
    }

    document.getElementById('sugerencia-comida').innerHTML = sugerencia;
}
