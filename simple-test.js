// Versão simplificada para teste de loading
console.log('Simple script: Iniciando');

// Remove loading screen após 2 segundos
setTimeout(() => {
  console.log('Simple script: Removendo loading screen');
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.transition = 'opacity 0.5s ease';
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
      console.log('Simple script: Loading removido com sucesso');
    }, 500);
  } else {
    console.error('Simple script: Loading element não encontrado');
  }
}, 2000);

console.log('Simple script: Script carregado completamente');
