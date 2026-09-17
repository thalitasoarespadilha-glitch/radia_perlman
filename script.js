document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos no HTML
    const btnFrase = document.getElementById('btnFrase');
    const mensagem = document.getElementById('mensagem');


    // Verifica se os elementos existem antes de adicionar o evento
    if (btnFrase && mensagem) {
        
        btnFrase.addEventListener('click', () => {
            // Se estiver oculto ou sem classe definida, exibe
            if (mensagem.style.display === 'none' || mensagem.style.display === '') {
                mensagem.style.display = 'block';
                btnFrase.textContent = 'Ocultar homenagem';
            } else {
                mensagem.style.display = 'none';
                btnFrase.textContent = 'Ver mensagem especial';
            }
        });


    } else {
        console.error('Elementos do botão ou da mensagem não foram encontrados no HTML.');
    }
});


