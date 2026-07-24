# Padaria Braga — Landing Page

Landing da **Padaria Braga** (bairro Industrial, Contagem-MG). Parti do template da Padaria Líder, mas redesenhei o visual: layout mais editorial, tipografia forte, menos “landing genérica”.

Queria um trabalho de front que desse pra colocar no portfólio sem parecer cópia do projeto anterior.

**No ar:** https://eukevytosdev.github.io/padaria-braga-landing/

## Stack

HTML · CSS · JavaScript puro

## Estrutura

```text
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css   # tokens de design
│   └── style.css
├── js/
│   ├── config.js       # dados da padaria
│   └── main.js
└── assets/images/
```

Mesma ideia de config: conteúdo em `config.js`, marca em `variables.css`. Troca o cliente sem reescrever o layout.

## Detalhes de layout que importam

- Hero assimétrico, tipografia grande (Cormorant Garamond + Outfit)
- Marquee com categorias
- Grid tipo bento nos produtos
- Banner full-bleed + lista numerada
- Bloco de avaliações com score
- Contato com mapa e card por cima

## Editar conteúdo

| Arquivo | O que muda |
|---------|------------|
| `js/config.js` | Textos, WhatsApp, produtos, avaliações, imagens |
| `css/variables.css` | Cores e tokens |

## Abrir local

```bash
git clone https://github.com/euKevytosDev/padaria-braga-landing.git
```

Abre `index.html` ou Live Server.

Base anterior: [padaria-esquina-landing](https://github.com/euKevytosDev/padaria-esquina-landing)

## Autor

Raian Kevin — [@euKevytosDev](https://github.com/euKevytosDev)
