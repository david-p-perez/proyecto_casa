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

//agregar valores a la pantalla al hacer clic en los botones
function agregarNumero(numero) {
    document.getElementById('pantalla').value += numero;
}
//limpiar la pantalla
function limpiar() {
    document.getElementById('pantalla').value = '';
}
//borrar un numero de la pantalla
function borraruno() {
    let pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}
//calcular el resultado de la operacion
function calcular() {
    try {
        document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
    } catch {
        document.getElementById('pantalla').value = 'Error';
    }
}
