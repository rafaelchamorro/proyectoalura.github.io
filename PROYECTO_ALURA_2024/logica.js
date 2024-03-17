
/* Diccionario de las equivalencias de encriptación */ 
const encriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
/* Función encriptar una vez se presione el boton encriptar todo el texto de la caja del input  
y lo pasa a letra minuscula si el valor es vació en via una alerta de no ingreso de ningun dato,
se crea la variable resultado si el texto input se reemplaza según el diccionario para el caso de encriptar
el texto del input se lee caracter por caracter y el resultado selecciona y se envía como respuesta */
function encriptar() {
    const input = document.getElementById('inputText').value.toLowerCase();
    if (!input) {
        alert('Por favor, ingresa un valor antes de encriptar.');
        return;
    }
    let resultado = '';
    for (let i = 0; i < input.length; i++) {
        const letra = input[i];
        if (encriptacion[letra]) {
            resultado += encriptacion[letra];
        } else {
            resultado += letra;
        }
    }
    document.getElementById('result').innerText = resultado;
}

/* Función desencriptar una vez se presione el boton encriptar todo el texto de la caja del input  
y lo pasa a letra minuscula si el valor es vació en via una alerta de no ingreso de ningun dato,
se crea la variable resultado si el texto input se reemplaza según el diccionario para el caso de desencriptar
el texto del input se lee caracter por caracter y el resultado selecciona y se envía como respuesta */
function desencriptar() {
    const input = document.getElementById('inputText').value.toLowerCase();
    if (!input) {
        alert('Por favor, ingresa un valor antes de desencriptar.');
        return;
    }
    let resultado = '';
    for (let i = 0; i < input.length; i++) {
        let encontrado = false;
        for (const letra in encriptacion) {
            if (encriptacion[letra] === input.slice(i, i + encriptacion[letra].length)) {
                resultado += letra;
                i += encriptacion[letra].length - 1;
                encontrado = true;
                break;
        }
        }
        if (!encontrado) {
            resultado += input[i];
        }
    }
    document.getElementById('result').innerText = resultado;
}

/* La función se encarga de tomar el resultado quer aparece posterior de generar la encriptación o revelar
el mensaje para ello se toma la variable del resultado, se selecciona y se copia temporalmente*/
function copiarResultado() {
    const resultado = document.getElementById('result').innerText;
    const tempInput = document.createElement('input');
    tempInput.value = resultado;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Resultado copiado al portapapeles: ' + resultado);
}
