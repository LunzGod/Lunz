let noCount = 0;

function preguntaInteraccion(respuesta) {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const respuestaTexto = document.getElementById('respuesta-texto');
    const respuestaDiv = document.getElementById('respuesta');

    if (respuesta === 'si') {
        respuestaTexto.innerText = "¡Sí! 😍 Me encantaría pasar el día contigo.";
        respuestaDiv.style.display = 'block';
        btnSi.disabled = true; // Desactiva el botón "Sí"
        btnNo.disabled = true; // Desactiva el botón "No"
    } else if (respuesta === 'no') {
        noCount++;
        if (noCount < 3) {
            respuestaTexto.innerText = "¡Oh no! 😢 ¿Seguro? Piensa en ello... ¿Quizás me das una oportunidad?";
        } else if (noCount < 6) {
            respuestaTexto.innerText = "¡No lo puedo creer! 😟 Estoy seguro/a de que cambiarás de opinión...";
        } else {
            respuestaTexto.innerText = "¡Sigue diciendo que no, pero te voy a convencer! 💖";
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
