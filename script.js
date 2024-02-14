var coloresDeFondo = [
    "#FEF1E1",  //Beige claro
    "#F2D5B1",  //Tono pastel claro
    "#E2B494",  //Tono pastel más oscuro
    "#B8D7B5",  //Verde suave y claro
    "#92B19E",  //Verde suave más oscuro
    "#B4D4E7",  //Azul suave y claro
    "#769DBE",  //Azul suave más oscuro
    "#F9CFD6",  //Rosa pálido
    "#D9C3A7",  //Tono tierra claro
    "#A89278"   //Tono tierra más oscuro
];

var Frases = [
    ["Tu mirada pura es un oasis de paz en un mundo caótico.", "Inocencia"],
    ["Tu timidez esconde una fuerza interior que brilla con luz propia.", "Timidez"],
    ["Tu amor es un faro que me guía en los momentos más oscuros.", "Amor"],
    ["Tus abrazos son un refugio donde me siento a salvo y amado.", "Cariño"],
    ["Tus pequeños detalles me demuestran que me conoces y me queres de verdad.", "Detallista"],
    ["Tu sensibilidad me hace sentir querido y apreciado.", "Ternura"],
    ["Tu esencia única me enamora cada día más.", "Carisma"],
    ["Me siento afortunado de tenerte en mi vida.", "Gratitud"],
    ["Tu voz suave y melodiosa me acaricia el alma.", "Ternura"],
    ["Tus ojos reflejan la belleza de tu alma.", "Hermosura"],
    ["Tu mirada tierna me derrite el corazón.", "Ternura"],
    ["Tus abrazos cálidos me hacen sentir en casa.", "Cariño"],
    ["Recorda que eres una persona única y valiosa, con mucho que ofrecer."," "],
    ["Te amo con todo mi corazón."," "],
    ["Nuestras conversaciones."," "],
    ["En nuestra complicidad, se encuentra la ternura que hace que cada instante se vuelva un dulce susurro de amor compartido.","Dulzura y Ternura"]
];

document.addEventListener('DOMContentLoaded', function () {
    // Aparecer suavemente los textos
    animateText('textA1');
    animateText('textA2');
    i = 0;
    // Agregar event listener para clics en la página
    document.addEventListener('click', handleClick);
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
    let i = generarNumeroAleatorio(0, Frases.length);
    let j = generarNumeroAleatorio(0, coloresDeFondo.length);
    console.log(i+" - "+j);
    var textA1 = document.getElementById("textA1").querySelector("h1");
    var textA2 = document.getElementById("textA2").querySelector("p");

    // Desvanecer el texto
    textA1.style.opacity = 0;
    textA2.style.opacity = 0;


    // Ajustar el contenido y luego volver a mostrar suavemente
    setTimeout(function () {
        textA1.innerHTML = "✧" + Frases[i-1][0] + "✧";
        textA2.innerHTML = Frases[i-1][1];
        document.body.style.backgroundColor = coloresDeFondo[j];
        document.body.style.transition = "background-color 2s"; 
        textA1.style.opacity = 1;
        textA2.style.opacity = 1;
        
        textA1.style.transition = "opacity 2s"; // Corrección aquí
        textA2.style.transition = "opacity 2s"; // Corrección aquí
    
    }, 1500); // Puedes ajustar el tiempo de espera según tus preferencias

}

function generarNumeroAleatorio(min, max) {
    let valor = Math.floor(Math.random() * (max - min + 1)) + min;
    if(valor === 0){
        valor = 1;
    }
    
    return valor;
}
