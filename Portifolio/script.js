const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('.menu-icon');
const words = document.querySelectorAll('.cd-words-wrapper b');
let index = 0;

navLinks.style.maxHeight = '0px';

menuIcon.addEventListener('click', () => {
    if (navLinks.style.maxHeight === '0px') {
        navLinks.style.maxHeight = '380px';
    } else {
        navLinks.style.maxHeight = '0px';
    }
});

// Função para mostrar as frases
function mostrarFrase() {
    // Oculta todas as frases
    words.forEach((word, i) => {
        word.classList.remove('is-visible');
        if (i === index) {
            word.classList.add('is-visible'); // Mostra a frase atual
        }
    });

    index = (index + 1) % words.length; // Avança o índice circularmente
}

// Chama a função a cada 3 segundos
setInterval(mostrarFrase, 3000);
mostrarFrase(); // Para mostrar a primeira frase imediatamente

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});
