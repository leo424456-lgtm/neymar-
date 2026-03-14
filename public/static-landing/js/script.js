document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing Page carregada com sucesso!');
    
    // Exemplo de interação simples
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Botão clicado!');
        });
    });
});
