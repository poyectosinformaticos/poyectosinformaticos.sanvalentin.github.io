document.addEventListener('DOMContentLoaded', function() {
    // Aparecer suavemente los textos
    animateText('textA1');
    animateText('textA2');
});

function animateText(elementId) {
    var element = document.getElementById(elementId);
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
}

