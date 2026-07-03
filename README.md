# Padaria Braga — Landing Page

Landing page **mobile-first** para a **Padaria Braga** (bairro Industrial, Contagem-MG), com vitrine digital e botão de contato via WhatsApp.

## Demo

- Site ao vivo: https://eukevytosdev.github.io/padaria-braga-landing/
- Repositório: https://github.com/euKevytosDev/padaria-braga-landing

## Sobre o projeto

Projeto freelancer criado a partir do template da [Padaria Líder](https://github.com/euKevytosDev/padaria-esquina-landing). A ideia foi reaproveitar a estrutura técnica (HTML/CSS/JS organizados) e adaptar identidade visual, textos e imagens para um cliente diferente.

Demonstra capacidade de **escalar um template** sem perder qualidade nem organização do código.

## Stack

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Reset, variáveis de marca, layout responsivo |
| JavaScript (vanilla) | Menu, WhatsApp, animações |

## Funcionalidades

- Layout responsivo (mobile-first)
- Botão de WhatsApp com mensagem automática
- Menu adaptado para celular
- Seções institucionais (produtos, localização, contato)
- Configuração centralizada em `js/config.js`

## Estrutura de pastas

```text
padaria-braga-landing/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css       # Cores da Padaria Braga
│   └── style.css
├── js/
│   ├── config.js           # Dados da padaria (edite aqui!)
│   └── main.js
└── assets/images/
    ├── logo-placa.png
    └── fachada-braga.png
```

## O que editar para personalizar

| Arquivo | O que mudar |
|---|---|
| `js/config.js` | WhatsApp, endereço, horário, textos |
| `css/variables.css` | Cores da marca |
| `assets/images/` | Logo e fotos reais |

## Como rodar localmente

```bash
git clone https://github.com/euKevytosDev/padaria-braga-landing.git
cd padaria-braga-landing
```

Abra `index.html` no navegador ou use **Live Server**.

## Deploy (GitHub Pages)

Settings → Pages → branch `main`, pasta `/ (root)`.

## Próximos passos (com o cliente)

- [ ] Confirmar WhatsApp real
- [ ] Logo oficial da Braga
- [ ] Fotos dos produtos
- [ ] Google Maps incorporado
- [ ] Domínio próprio (opcional)

## Projeto base

- Template original: [padaria-esquina-landing](https://github.com/euKevytosDev/padaria-esquina-landing)

## Autor

**Raian Kevin** — Desenvolvedor Front-end

- GitHub: [@euKevytosDev](https://github.com/euKevytosDev)
- Portfólio: [portfolio-raian](https://github.com/euKevytosDev/portfolio-raian)
