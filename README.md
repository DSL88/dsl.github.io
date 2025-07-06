# 🚀 Portfolio Estático - DSL88

## 📋 Descrição

Site estático moderno e responsivo criado com **Vite** e **Vanilla JavaScript**, otimizado para deployment no **GitHub Pages**. O projeto segue as melhores práticas de desenvolvimento web com foco em performance, acessibilidade e SEO.

## ✨ Características

- 📱 **100% Responsivo** - Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento ultra-rápido
- 🎨 **Design Moderno** - Interface limpa e profissional
- 🔍 **SEO Otimizado** - Meta tags e estrutura semântica
- 🌙 **Animações Suaves** - Transições e efeitos visuais
- 📧 **Formulário de Contato** - Sistema de notificações
- 🚀 **Deploy Automático** - CI/CD com GitHub Actions

## 🛠️ Tecnologias Utilizadas

- **Vite** - Build tool moderno e rápido
- **Vanilla JavaScript** - JavaScript puro, sem frameworks
- **CSS Grid & Flexbox** - Layout responsivo moderno
- **Google Fonts** - Tipografia profissional
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Actions** - Deploy automático

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 16+ instalado
- Git instalado

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute em modo de desenvolvimento
```bash
npm run dev
```
O site estará disponível em `http://localhost:5173`

### 4. Faça o build para produção
```bash
npm run build
```

### 5. Visualize o build localmente
```bash
npm run preview
```

## � Deploy no GitHub Pages

### Configuração Automática

1. **Fork ou clone** este repositório
2. **Configure o GitHub Pages**:
   - Vá para Settings > Pages
   - Em "Source", selecione "GitHub Actions"
3. **Faça commit** das suas alterações
4. O deploy será **automático** via GitHub Actions

### Deploy Manual

Se preferir fazer deploy manual:

```bash
npm run build
# Suba os arquivos da pasta 'dist' para o seu servidor
```

## 📁 Estrutura do Projeto

```
├── public/                 # Arquivos públicos
│   ├── vite.svg           # Favicon
│   └── backup-styles.css  # CSS de fallback
├── src/                   # Código fonte
│   ├── main.js           # JavaScript principal
│   └── style.css         # Estilos CSS
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── index.html            # HTML principal
├── vite.config.js        # Configuração do Vite
├── package.json          # Dependências do projeto
└── README.md            # Documentação
```

## 🎨 Personalização

### Cores e Variáveis CSS
Edite as variáveis CSS em `src/style.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #1a202c;
  /* ... outras variáveis */
}
```

### Conteúdo
Edite o conteúdo diretamente no `index.html`:

- **Informações pessoais** - Seção hero
- **Sobre** - Seção about
- **Projetos** - Seção projects
- **Contato** - Seção contact

### JavaScript
O código JavaScript está modularizado em `src/main.js`:

- `LoadingModule` - Gerencia a tela de carregamento
- `NavigationModule` - Navegação e menu mobile
- `BackToTopModule` - Botão voltar ao topo
- `AnimationModule` - Animações em scroll
- `ContactModule` - Formulário de contato

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Faz build para produção
- `npm run preview` - Visualiza o build localmente

## 🌐 SEO e Performance

### Meta Tags Incluídas
- Open Graph (Facebook)
- Twitter Cards
- Meta description e keywords
- Canonical URLs

### Otimizações
- Critical CSS inline
- Fonts preload
- Imagens otimizadas
- Minificação automática
- Gzip compression

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Acessibilidade

- Estrutura HTML semântica
- ARIA labels e roles
- Contraste de cores adequado
- Navegação por teclado
- Screen reader friendly

## 🎯 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Contato

- **Email**: seu@email.com
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)

---

⭐ **Se este projeto foi útil, deixe uma estrela!** ⭐
- 🚀 **Deploy Automático** - GitHub Actions para CI/CD
- ♿ **Acessível** - HTML semântico e acessível
- 🔧 **Vanilla JS** - JavaScript puro e performático

## 🛠️ Tecnologias Utilizadas

- **Vite** - Build tool e dev server
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Grid/Flexbox
- **JavaScript ES6+** - Funcionalidades interativas
- **GitHub Actions** - Deploy automático
- **GitHub Pages** - Hospedagem gratuita

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DSL88/dsl.github.io.git
cd dsl.github.io
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Deploy

### GitHub Pages (Automático)

O projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions:

1. Faça push para a branch `main`
2. O workflow do GitHub Actions será executado automaticamente
3. O site será publicado em `https://dsl88.github.io/`

### Configuração Manual do GitHub Pages

1. Vá em **Settings** → **Pages** no seu repositório
2. Selecione **GitHub Actions** como source
3. O deploy será feito automaticamente a cada push

## 📁 Estrutura do Projeto

```
Site/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions workflow
│   └── copilot-instructions.md # Instruções do Copilot
├── public/
│   └── vite.svg               # Ícones e assets estáticos
├── src/
│   ├── main.js               # JavaScript principal
│   └── style.css             # Estilos CSS
├── index.html                # HTML principal
├── vite.config.js           # Configuração do Vite
├── package.json             # Dependências do projeto
└── README.md               # Este arquivo
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Preview do build local

# Linting
npm run lint         # Verifica código (se configurado)
```

## 🎨 Personalização

### Cores e Temas

As cores principais são definidas em CSS custom properties no arquivo `src/style.css`:

```css
:root {
  --primary-color: #646cff;
  --primary-dark: #535bf2;
  /* ... outras variáveis */
}
```

### Configuração do GitHub Pages

No arquivo `vite.config.js`, certifique-se de atualizar o `base` com o nome do seu repositório:

```javascript
export default defineConfig({
  base: '/Nome-Do-Seu-Repositorio/',
  // ...
})
```

## 📱 Funcionalidades

- **Navegação Responsiva** - Menu hambúrguer em dispositivos móveis
- **Scroll Suave** - Navegação suave entre seções
- **Formulário de Contato** - Pronto para integração com serviços
- **Notificações** - Sistema de feedback visual
- **Performance** - Otimizado para carregamento rápido

## 🌐 Integrações Possíveis

- **Netlify Forms** - Para formulários de contato
- **Google Analytics** - Para análise de tráfego
- **Service Worker** - Para funcionalidades PWA
- **CMS Headless** - Para conteúdo dinâmico

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

DSL88 - [GitHub Profile](https://github.com/DSL88)

Link do Projeto: [https://github.com/DSL88/dsl.github.io](https://github.com/DSL88/dsl.github.io)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!

---

🌐 **Visite o site:** [https://dsl88.github.io](https://dsl88.github.io)
