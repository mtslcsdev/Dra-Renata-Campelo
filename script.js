const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
        nav.classList.remove('active'); // Fecha o menu após a rolagem
    });
});

// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Mostra o botão
    } else {
        backToTopButton.style.display = "none"; // Oculta o botão
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave para o topo
});

const comentarios = document.querySelectorAll("#slider .comentario");
let comentarioIndex = 0;

function alternarComentario() {
    // Remove a classe 'active' do comentário atual
    comentarios[comentarioIndex].classList.remove("active");

    // Incrementa o índice para o próximo comentário
    comentarioIndex = (comentarioIndex + 1) % comentarios.length;

    // Adiciona a classe 'active' ao próximo comentário
    comentarios[comentarioIndex].classList.add("active");
}

// Chama a função alternarComentario a cada 5 segundos
setInterval(alternarComentario, 5000);
