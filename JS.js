// Tema claro/escuro
const html = document.documentElement;
const btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click', () => {
    const escuro = html.getAttribute('data-bs-theme') === 'dark';
    html.setAttribute('data-bs-theme', escuro ? 'light' : 'dark');
    btnTema.innerHTML = escuro
        ? '<i class="bi bi-moon-stars-fill"></i> Tema'
        : '<i class="bi bi-sun-fill"></i> Tema';
});

// Tamanho do texto (acessibilidade)
let tamanhoFonte = 100;
function ajustarFonte(passo) {
    tamanhoFonte = Math.min(150, Math.max(80, tamanhoFonte + passo));
    html.style.fontSize = tamanhoFonte + '%';
}
document.getElementById('btnFonteMais').addEventListener('click', () => ajustarFonte(10));
document.getElementById('btnFonteMenos').addEventListener('click', () => ajustarFonte(-10));

// Alto contraste (acessibilidade)
const btnContraste = document.getElementById('btnContraste');
btnContraste.addEventListener('click', () => {
    const ativo = document.body.classList.toggle('alto-contraste');
    btnContraste.setAttribute('aria-pressed', ativo);
});

// Ampliar imagens ao clicar
const modalEl = document.getElementById('modalImagem');
const modal = new bootstrap.Modal(modalEl);
const imagemAmpliada = document.getElementById('imagemAmpliada');
document.querySelectorAll('img.zoom').forEach(img => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    const abrir = () => {
        imagemAmpliada.src = img.src;
        imagemAmpliada.alt = img.alt;
        modal.show();
    };
    img.addEventListener('click', abrir);
    img.addEventListener('keydown', e => { if (e.key === 'Enter') abrir(); });
});
