// Importação condicional do CSS para evitar travamento
try {
  import('./style.css');
} catch (error) {
  console.warn('CSS não pôde ser importado:', error);
}

// Modern Portfolio Website with Advanced Features
class ModernPortfolio {
  constructor() {
    console.log('ModernPortfolio: Constructor iniciado');
    this.isLoading = true;
    this.currentSection = 'home';
    this.isMobileMenuOpen = false;
    this.init();
  }

  init() {
    console.log('ModernPortfolio: Init iniciado');
    this.initializeComponents();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.handleLoadingScreen();
    this.initParallax();
    this.initNotifications();
    console.log('ModernPortfolio: Init concluído');
  }

  initializeComponents() {
    console.log('ModernPortfolio: initializeComponents iniciado');
    // Get DOM elements
    this.header = document.querySelector('.navbar');
    this.mobileMenuBtn = document.querySelector('.hamburger');
    this.nav = document.querySelector('.nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.backToTopBtn = document.querySelector('#backToTop');
    this.contactForm = document.querySelector('#contact-form');
    this.loadingScreen = document.querySelector('#loading');
    
    console.log('ModernPortfolio: Elementos encontrados:', {
      header: !!this.header,
      mobileMenuBtn: !!this.mobileMenuBtn,
      nav: !!this.nav,
      navLinks: this.navLinks.length,
      backToTopBtn: !!this.backToTopBtn,
      contactForm: !!this.contactForm,
      loadingScreen: !!this.loadingScreen
    });
    
    // Add smooth scrolling class to html
    document.documentElement.classList.add('smooth-scroll');
    console.log('ModernPortfolio: initializeComponents concluído');
  }

  setupEventListeners() {
    // Navigation
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });

    // Mobile menu
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Back to top button
    if (this.backToTopBtn) {
      this.backToTopBtn.addEventListener('click', () => this.scrollToTop());
    }

    // Contact form
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    // Scroll events
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));
  }

  handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    this.scrollToSection(targetId);
    this.setActiveNav(targetId);
    
    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - (this.header?.offsetHeight || 80);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  setActiveNav(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
    this.currentSection = sectionId;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.nav?.classList.toggle('active', this.isMobileMenuOpen);
    this.mobileMenuBtn?.classList.toggle('active', this.isMobileMenuOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  handleScroll() {
    const scrollTop = window.pageYOffset;
    
    // Header background on scroll
    if (this.header) {
      if (scrollTop > 100) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }
    
    // Back to top button visibility
    if (this.backToTopBtn) {
      if (scrollTop > 500) {
        this.backToTopBtn.classList.add('show');
      } else {
        this.backToTopBtn.classList.remove('show');
      }
    }
    
    // Parallax effect
    this.updateParallax(scrollTop);
  }

  handleResize() {
    // Close mobile menu on resize
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  handleKeyDown(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.3,
      rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.setActiveNav(sectionId);
          
          // Add animation class
          entry.target.classList.add('animate-in');
          
          // Animate child elements
          const animateElements = entry.target.querySelectorAll('.animate-on-scroll');
          animateElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, options);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
  }

  handleLoadingScreen() {
    console.log('ModernPortfolio: handleLoadingScreen iniciado');
    const loadingElement = document.getElementById('loading');
    console.log('Loading screen element encontrado:', !!loadingElement);
    
    if (!loadingElement) {
      console.error('ModernPortfolio: Elemento #loading não encontrado!');
      return;
    }
    
    // Simulate loading time
    setTimeout(() => {
      console.log('ModernPortfolio: Timeout executado, removendo loading screen');
      loadingElement.style.transition = 'opacity 0.5s ease';
      loadingElement.style.opacity = '0';
      
      setTimeout(() => {
        loadingElement.style.display = 'none';
        this.isLoading = false;
        console.log('ModernPortfolio: Loading screen removido');
        this.animateInitialElements();
      }, 500);
    }, 1000); // Reduzido para 1 segundo para teste
  }

  animateInitialElements() {
    console.log('ModernPortfolio: animateInitialElements iniciado');
    // Animate hero section elements
    const heroElements = document.querySelectorAll('.hero .animate-on-scroll');
    console.log('ModernPortfolio: Elementos hero encontrados:', heroElements.length);
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 200);
    });
    console.log('ModernPortfolio: animateInitialElements concluído');
  }

  initParallax() {
    this.parallaxElements = document.querySelectorAll('.parallax');
  }

  updateParallax(scrollTop) {
    if (this.parallaxElements) {
      this.parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrollTop * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (this.validateForm(data)) {
      this.submitForm(data);
    }
  }

  validateForm(data) {
    const { name, email, message } = data;
    
    if (!name || name.trim().length < 2) {
      this.showNotification('Nome deve ter pelo menos 2 caracteres', 'error');
      return false;
    }
    
    if (!this.isValidEmail(email)) {
      this.showNotification('Email inválido', 'error');
      return false;
    }
    
    if (!message || message.trim().length < 10) {
      this.showNotification('Mensagem deve ter pelo menos 10 caracteres', 'error');
      return false;
    }
    
    return true;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async submitForm(data) {
    try {
      // Show loading state
      const submitBtn = this.contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      this.showNotification('Mensagem enviada com sucesso!', 'success');
      this.contactForm.reset();
      
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
    } catch (error) {
      this.showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');
      
      // Reset button
      const submitBtn = this.contactForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Enviar Mensagem';
      submitBtn.disabled = false;
    }
  }

  initNotifications() {
    // Create notification container if it doesn't exist
    if (!document.querySelector('.notification-container')) {
      const container = document.createElement('div');
      container.className = 'notification-container';
      document.body.appendChild(container);
    }
  }

  showNotification(message, type = 'info') {
    const container = document.querySelector('.notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;
    
    container.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => this.hideNotification(notification));
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      this.hideNotification(notification);
    }, 5000);
    
    // Animate in
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
  }

  hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded: Evento disparado, criando ModernPortfolio');
  new ModernPortfolio();
});

console.log('Script carregado: Event listener para DOMContentLoaded registrado');

// Handle page visibility change for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when tab is not visible
    document.body.classList.add('paused');
  } else {
    // Resume animations when tab becomes visible
    document.body.classList.remove('paused');
  }
});

// Progressive Web App features
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
