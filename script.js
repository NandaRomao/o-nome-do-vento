// Hambúrguer funcional
const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.createElement('div');

overlay.className = 'overlay';
document.body.appendChild(overlay);

// Abrir/fechar menu
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
});

// Fechar menu clicando no overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.style.display = 'none';
});

// Fechar menu ao clicar em um link (opcional)
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
        }
    });
});