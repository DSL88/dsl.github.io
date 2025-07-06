/**
 * Esconde a tela de loading de forma suave.
 */
function hideLoader() {
  const loader = document.getElementById('loading');
  if (!loader) {
    console.error('Elemento de loading não encontrado.');
    return;
  }

  // Aguarda um pouco para garantir que os estilos foram aplicados
  setTimeout(() => {
    // Adiciona a classe que inicia a transição de fade-out definida no CSS
    loader.classList.add('fade-out');

    // Após a transição de opacidade terminar, definimos o display como 'none'
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // Tempo da transição CSS
  }, 2000); // 2 segundos de loading
}

// Aguarda o carregamento completo da página
window.addEventListener('load', hideLoader);