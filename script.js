var Frases = [
    ["Tu mirada pura es un oasis de paz en un mundo caótico.", "Inocencia", "_"],
    ["Tu timidez esconde una fuerza interior que brilla con luz propia.", "Timidez", "_"],
    ["Tu amor es un faro que me guía en los momentos más oscuros.", "Amor", "_"]
];
var i;

document.addEventListener('DOMContentLoaded', function () {
    // Aparecer suavemente los textos
    animateText('textA1');
    animateText('textA2');
    i = 0;
    // Agregar event listener para clics en la página
    document.body.addEventListener('click', handleClick);
});

function animateText(elementId) {
    var element = document.getElementById(elementId);
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';

    if (elementId === 'textA2') {
        // Obtener el ancho del texto A1 y establecer la posición de A2
        var textA1Width = document.getElementById('textA1').offsetWidth;
        element.style.right = textA1Width + 20 + 'px';
    }
}

function handleClick() {
    if (i < Frases.length) {
        var textA1 = document.getElementById("textA1").querySelector("h1");

        // Desvanecer el texto
        textA1.style.opacity = 0;

        // Ajustar el contenido y luego volver a mostrar suavemente
        setTimeout(function () {
            textA1.innerHTML = Frases[i][0];
            textA1.style.opacity = 1;
            textA1.style.transition = "opacity 2s"; // Corrección aquí
            animateText('textA2');
        }, 1500); // Puedes ajustar el tiempo de espera según tus preferencias

        animateText('textA2');
        i++;
    } else {
        i = 0;
        handleClick();
    }
}
