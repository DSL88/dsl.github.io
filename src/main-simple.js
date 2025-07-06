// Versão minimalista focada apenas no loading
class SimplePortfolio {
  constructor() {
    console.log('SimplePortfolio: Iniciando');
    this.handleLoadingScreen();
  }

  handleLoadingScreen() {
    console.log('SimplePortfolio: handleLoadingScreen iniciado');
    const loadingElement = document.getElementById('loading');
    console.log('Loading element encontrado:', !!loadingElement);
    
    if (!loadingElement) {
      console.error('Elemento #loading não encontrado!');
      return;
    }
    
    // Remove loading após 2 segundos
    setTimeout(() => {
      console.log('SimplePortfolio: Removendo loading screen');
      loadingElement.style.transition = 'opacity 0.5s ease';
      loadingElement.style.opacity = '0';
      
      setTimeout(() => {
        loadingElement.style.display = 'none';
        console.log('SimplePortfolio: Loading removido com sucesso');
        this.initializeBasicFeatures();
      }, 500);
    }, 2000);
  }

  initializeBasicFeatures() {
    console.log('SimplePortfolio: Inicializando recursos básicos');
    
    // Navegação básica
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    
    // Menu mobile básico
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }
    
    console.log('SimplePortfolio: Recursos básicos inicializados');
  }
}

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded: Criando SimplePortfolio');
    new SimplePortfolio();
  });
} else {
  console.log('DOM já carregado: Criando SimplePortfolio imediatamente');
  new SimplePortfolio();
}

console.log('Script carregado: SimplePortfolio pronto');
