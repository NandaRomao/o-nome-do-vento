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
// ========== SISTEMA DE USUÁRIOS ==========

function loginUser() {
    const name = document.getElementById('user-name-input').value;
    if (name) {
        localStorage.setItem('readerName', name);
        updateUserDisplay();
    }
}

function logoutUser() {
    localStorage.removeItem('readerName');
    updateUserDisplay();
}

function updateUserDisplay() {
    const name = localStorage.getItem('readerName');
    if (name) {
        document.getElementById('user-login').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('display-name').textContent = name;
    } else {
        document.getElementById('user-login').style.display = 'block';
        document.getElementById('user-info').style.display = 'none';
    }
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', updateUserDisplay);

// ========== FIM SISTEMA DE USUÁRIOS ==========