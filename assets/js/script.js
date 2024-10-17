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
    atualizarConteudo('01', 'Ecoconstrua', '1');

    document.querySelector('.conteudo-tabela-projetos').classList.add('selecionado');
});
