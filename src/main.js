// Importa o ficheiro de estilos principal. O Vite irá processá-lo.
import './style.css';

/**
 * Função principal que é executada quando o DOM está pronto.
 * Inicializa todas as funcionalidades do site.
 */
function main() {
  // Seleciona os elementos principais da página uma única vez para melhor performance.
  const elements = {
    loader: document.getElementById('loading'),
    hamburger: document.getElementById('hamburger-menu'),
    navMenu: document.getElementById('nav-menu'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    navLinks: document.querySelectorAll('.nav-link'),
    backToTopButton: document.getElementById('backToTop'),
    contactForm: document.getElementById('contact-form'),
    sectionsToAnimate: document.querySelectorAll('.fade-in-section'),
    notificationContainer: document.getElementById('notifications'),
  };

  /**
   * Esconde o ecrã de loading de forma suave.
   */
  function hideLoader() {
    if (!elements.loader) return;
    elements.loader.classList.add('fade-out');
    elements.loader.addEventListener('transitionend', () => {
      elements.loader.style.display = 'none';
    }, { once: true });
  }

  /**
   * Controla a abertura e fecho da barra lateral de navegação.
   */
  function toggleSidebar() {
    elements.hamburger.classList.toggle('active');
    elements.navMenu.classList.toggle('active');
    elements.sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = elements.navMenu.classList.contains('active') ? 'hidden' : '';
  }

  /**
   * Fecha a barra lateral (usado ao clicar num link ou no overlay).
   */
  function closeSidebar() {
    if (elements.navMenu.classList.contains('active')) {
      toggleSidebar();
    }
  }

  /**
   * Mostra ou esconde o botão "Voltar ao Topo" com base na posição de scroll.
   */
  function handleBackToTopButton() {
    if (window.scrollY > 300) {
      elements.backToTopButton.classList.add('visible');
    } else {
      elements.backToTopButton.classList.remove('visible');
    }
  }

  /**
   * Anima as secções à medida que entram no campo de visão.
   */
  function handleScrollAnimations(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }

  /**
   * Mostra uma notificação de sucesso ou erro.
   */
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    elements.notificationContainer.appendChild(notification);

    // Força o reflow para a animação de entrada funcionar
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });

    setTimeout(() => {
      notification.classList.remove('show');
      notification.addEventListener('transitionend', () => notification.remove(), { once: true });
    }, 4000);
  }

  /**
   * Lida com a submissão do formulário de contacto.
   */
  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      // Simula um envio para o Netlify ou outro serviço
      // Em um projeto real, aqui iria o fetch() para o endpoint do seu backend.
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay da rede

      showNotification('Mensagem enviada com sucesso!', 'success');
      form.reset();
    } catch (error) {
      showNotification('Ocorreu um erro. Tente novamente.', 'error');
    }
  }

  // --- Inicialização e Event Listeners ---

  hideLoader();

  // Sidebar
  elements.hamburger.addEventListener('click', toggleSidebar);
  elements.sidebarOverlay.addEventListener('click', closeSidebar);
  elements.navLinks.forEach(link => link.addEventListener('click', closeSidebar));

  // Botão "Voltar ao Topo"
  window.addEventListener('scroll', handleBackToTopButton);
  elements.backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animações de Scroll
  const animationObserver = new IntersectionObserver(handleScrollAnimations, { threshold: 0.1 });
  elements.sectionsToAnimate.forEach(section => animationObserver.observe(section));

  // Formulário de Contacto
  elements.contactForm.addEventListener('submit', handleFormSubmit);
}

// Garante que o script só é executado após o HTML ser totalmente carregado.
document.addEventListener('DOMContentLoaded', main);