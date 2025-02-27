function atualizarConteudo(numero, titulo, texto, elemento = null) {
    document.querySelector('.numero-conteudo-projetos').innerHTML = numero;
    document.querySelector('.titulo-conteudo').textContent = titulo;
    document.querySelector('.texto-conteudo-projetos').textContent = texto;

    document.querySelectorAll('.conteudo-tabela-projetos').forEach(item => {
        item.classList.remove('selecionado');
    });

    if (elemento) {
        elemento.classList.add('selecionado');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    atualizarConteudo('01', 'Ecoconstrua', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem magnam eveniet, sequi, fugiat veniam beatae dolorum quidem repudiandae modi sit, commodi hic soluta id illo nobis deserunt eius dicta dolorem.');

    document.querySelector('.conteudo-tabela-projetos').classList.add('selecionado');
});

const slider = document.querySelector('.clientes_slider');
const PrevButton = document.querySelector('.prev');
const NextButton = document.querySelector('.next');

PrevButton.addEventListener('click', () => {
    console.log('estou aqui prev');
})

NextButton.addEventListener('click', () => {
    console.log('estou aqui next');
})