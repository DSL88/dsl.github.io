/**
 * SITE ESTÁTICO MODERNO - GitHub Pages
 * Versão otimizada e performática sem dependências externas
 */

// ========================================
// CONFIGURAÇÃO E CONSTANTES
// ========================================
const CONFIG = {
  LOADER_DELAY: 1500,
  SCROLL_OFFSET: 100,
  ANIMATION_DELAY: 200
};

// ========================================
// ELEMENTOS DOM (Cache)
// ========================================
const DOM = {
  loader: () => document.getElementById('loading'),
  hamburger: () => document.querySelector('.hamburger'),
  navMenu: () => document.querySelector('.nav-menu'),
  navLinks: () => document.querySelectorAll('.nav-link'),
  backToTop: () => document.getElementById('backToTop'),
  contactForm: () => document.getElementById('contact-form'),
  navbar: () => document.querySelector('.navbar'),
  sections: () => document.querySelectorAll('section[id]')
};

// ========================================
// UTILITÁRIOS
// ========================================
const Utils = {
  // Throttle para otimizar eventos de scroll
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  },

  // Smooth scroll personalizado
  smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    
    const navbarHeight = DOM.navbar()?.offsetHeight || 70;
    const targetPosition = target.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// ========================================
// MÓDULOS DE FUNCIONALIDADE
// ========================================

// Módulo de Loading
const LoadingModule = {
  hide() {
    const loader = DOM.loader();
    if (!loader) return;
    
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, CONFIG.LOADER_DELAY);
  }
};

// Módulo de Navegação
const NavigationModule = {
  init() {
    this.setupMobileMenu();
    this.setupNavLinks();
    this.setupScrollEffect();
  },

  setupMobileMenu() {
    const hamburger = DOM.hamburger();
    const navMenu = DOM.navMenu();
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  },

  setupNavLinks() {
    const navLinks = DOM.navLinks();
    const navMenu = DOM.navMenu();
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Fechar menu mobile se aberto
        if (navMenu?.classList.contains('active')) {
          navMenu.classList.remove('active');
          DOM.hamburger()?.classList.remove('active');
          document.body.style.overflow = '';
        }
        
        // Scroll suave para seção
        Utils.smoothScrollTo(targetId);
        
        // Atualizar link ativo
        this.updateActiveLink(link);
      });
    });
  },

  updateActiveLink(activeLink) {
    DOM.navLinks().forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
  },

  setupScrollEffect() {
    const navbar = DOM.navbar();
    if (!navbar) return;
    
    const handleScroll = Utils.throttle(() => {
      if (window.scrollY > CONFIG.SCROLL_OFFSET) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
  }
};

// Módulo de Back to Top
const BackToTopModule = {
  init() {
    const button = DOM.backToTop();
    if (!button) return;
    
    const handleScroll = Utils.throttle(() => {
      if (window.scrollY > 500) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    }, 100);
    
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', handleScroll);
  }
};

// Módulo de Animações
const AnimationModule = {
  init() {
    this.setupScrollAnimations();
  },

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animar elementos filhos com delay
          const children = entry.target.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * CONFIG.ANIMATION_DELAY);
          });
        }
      });
    }, observerOptions);

    // Observar todas as seções
    DOM.sections().forEach(section => {
      observer.observe(section);
    });
    
    // Observar elementos com classe animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }
};

// Módulo de Formulário de Contato
const ContactModule = {
  init() {
    const form = DOM.contactForm();
    if (!form) return;
    
    form.addEventListener('submit', this.handleSubmit.bind(this));
  },

  async handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validação simples
    if (!this.validateForm(data)) return;
    
    // Simular envio
    this.showLoading(form);
    
    try {
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.showSuccess();
      form.reset();
    } catch (error) {
      this.showError();
    } finally {
      this.hideLoading(form);
    }
  },

  validateForm(data) {
    const { name, email, message } = data;
    
    if (!name?.trim()) {
      this.showNotification('Nome é obrigatório', 'error');
      return false;
    }
    
    if (!email?.includes('@')) {
      this.showNotification('Email inválido', 'error');
      return false;
    }
    
    if (!message?.trim() || message.length < 10) {
      this.showNotification('Mensagem deve ter pelo menos 10 caracteres', 'error');
      return false;
    }
    
    return true;
  },

  showLoading(form) {
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    button.disabled = true;
    button.innerHTML = '<span>Enviando...</span>';
  },

  hideLoading(form) {
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    button.disabled = false;
    button.innerHTML = 'Enviar Mensagem';
  },

  showSuccess() {
    this.showNotification('Mensagem enviada com sucesso!', 'success');
  },

  showError() {
    this.showNotification('Erro ao enviar. Tente novamente.', 'error');
  },

  showNotification(message, type) {
    // Criar container se não existir
    let container = document.getElementById('notifications');
    if (!container) {
      container = document.createElement('div');
      container.id = 'notifications';
      container.className = 'notifications';
      document.body.appendChild(container);
    }
    
    // Criar notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;
    
    container.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Auto remove
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 300);
    }, 5000);
  }
};

// ========================================
// INICIALIZAÇÃO PRINCIPAL
// ========================================
function initializeApp() {
  console.log('🚀 Inicializando site estático...');
  
  // Esconder loader
  LoadingModule.hide();
  
  // Inicializar módulos
  NavigationModule.init();
  BackToTopModule.init();
  AnimationModule.init();
  ContactModule.init();
  
  console.log('✅ Site inicializado com sucesso!');
}

// ========================================
// PONTO DE ENTRADA
// ========================================
// Aguardar carregamento completo da página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Aguardar recursos (imagens, etc.) carregarem
window.addEventListener('load', () => {
  // Garantir que o loader seja removido mesmo se houver problemas
  setTimeout(() => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.style.display = 'none';
    }
  }, CONFIG.LOADER_DELAY + 1000);
});