let noCount = 0;

function preguntaInteraccion(respuesta) {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const respuestaTexto = document.getElementById('respuesta-texto');
    const respuestaDiv = document.getElementById('respuesta');

    if (respuesta === 'si') {
        respuestaTexto.innerText = "Yo sabia y siempre lo supe si quieres reinicialo para que veas que pasaba si decias que no.";
        respuestaDiv.style.display = 'block';
        btnSi.disabled = true; // Desactiva el botón "Sí"
        btnNo.disabled = true; // Desactiva el botón "No"
    } else if (respuesta === 'no') {
        noCount++;
        if (noCount < 2) {
            respuestaTexto.innerText = "Ah con que si veniste a ver ";
        } else if (noCount < 4) {
            respuestaTexto.innerText = "Siguele picando";
        } else {
            respuestaTexto.innerText = "De todas formas me ibas a decir que si";
        }

        // Cambiar tamaño de los botones
        btnNo.style.transform = `scale(${1 - noCount * 0.1})`; // Se hace más pequeño
        btnSi.style.transform = `scale(${1 + noCount * 0.1})`; // Se hace más grande

        // Mostrar la respuesta
        respuestaDiv.style.display = 'block';
    }
}

function resetearPagina() {
    window.location.reload();
}
