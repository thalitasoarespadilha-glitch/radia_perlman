ocument.addEventListener('DOMContentLoaded', () => {
   const btnFrase = document.getElementById('btnFrase');
   const mensagem = document.getElementById('mensagem');


   btnFrase.addEventListener('click', () => {
       if (mensagem.classList.contains('oculto')) {
           mensagem.classList.remove('oculto');
           btnFrase.textContent = 'Ocultar mensagem';
       } else {
           mensagem.classList.add('oculto');
           btnFrase.textContent = 'Ver mensagem especial';
       }
   });
});


