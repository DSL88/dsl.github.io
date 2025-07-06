# Meu Site - GitHub Pages

Um site moderno e responsivo criado com Vite, otimizado para deployment no GitHub Pages.

## 🚀 Características

- ⚡ **Vite** - Build tool super rápido
- 📱 **Responsivo** - Funciona em todos os dispositivos
- 🎨 **Design Moderno** - Interface limpa e atrativa
- 🌙 **Tema Automático** - Suporte a modo claro/escuro
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
git clone https://github.com/seu-usuario/Site.git
cd Site
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
3. O site será publicado em `https://seu-usuario.github.io/Site/`

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

Seu Nome - [seu@email.com](mailto:seu@email.com)

Link do Projeto: [https://github.com/seu-usuario/Site](https://github.com/seu-usuario/Site)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!
