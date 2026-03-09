//calculadora
function agregarNumero(numero) {
    document.getElementById('pantalla').value += numero;
}

function limpiar() {
    document.getElementById('pantalla').value = '';
}

function borraruno() {
    let pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    try {
        document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
    } catch {
        document.getElementById('pantalla').value = 'Error';
    }
}
