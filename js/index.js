const botoes = document.querySelectorAll('.botoes .botao');
const personagens = document.querySelectorAll('.pokemom');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add('selecionado');
        personagens[indice].classList.add('selecionado');
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.pokemom.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botoes .botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}
