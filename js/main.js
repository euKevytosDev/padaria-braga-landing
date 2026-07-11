/*
  main.js — Padaria Braga (layout editorial premium)
*/

function montarLinkWhatsApp(numero, mensagem) {
  const numeroLimpo = numero.replace(/\D/g, "");
  return `https://wa.me/55${numeroLimpo}?text=${encodeURIComponent(mensagem)}`;
}

function preencherConteudo() {
  const linkWhats = montarLinkWhatsApp(PADARIA.whatsapp, PADARIA.mensagemPadrao);

  document.getElementById("hero-titulo").textContent = PADARIA.nome;
  document.getElementById("hero-slogan").textContent = PADARIA.slogan;
  document.getElementById("texto-sobre").textContent = PADARIA.sobre;
  document.getElementById("texto-endereco").textContent = PADARIA.endereco;
  document.getElementById("texto-horario").textContent = PADARIA.horario;
  document.getElementById("footer-nome").textContent = PADARIA.nome;

  const heroPrincipal = document.getElementById("hero-img-principal");
  if (heroPrincipal && PADARIA.heroImagem) {
    heroPrincipal.style.backgroundImage = `url("${PADARIA.heroImagem}")`;
  }

  const heroSec = document.getElementById("hero-img-secundaria");
  if (heroSec && PADARIA.heroImagemSecundaria) {
    heroSec.style.backgroundImage = `url("${PADARIA.heroImagemSecundaria}")`;
  }

  const badgeNota = document.getElementById("hero-badge-nota");
  if (badgeNota && PADARIA.avaliacaoResumo) {
    badgeNota.textContent = PADARIA.avaliacaoResumo.nota;
  }

  const craftBanner = document.getElementById("craft-banner");
  if (craftBanner && PADARIA.craftImagem) {
    craftBanner.style.backgroundImage = `url("${PADARIA.craftImagem}")`;
  }

  const mapa = document.getElementById("mapa-embed");
  if (mapa && PADARIA.mapsEmbedUrl) mapa.src = PADARIA.mapsEmbedUrl;

  [
    document.getElementById("btn-whatsapp"),
    document.getElementById("hero-cta-whatsapp"),
    document.getElementById("contato-cta-whatsapp"),
    document.getElementById("nav-cta-whatsapp"),
  ].forEach((btn) => {
    if (btn) {
      btn.href = linkWhats;
      if (btn.id === "btn-whatsapp" || btn.id === "nav-cta-whatsapp") {
        btn.setAttribute("aria-label", `Falar com ${PADARIA.nome} no WhatsApp`);
      }
    }
  });

  preencherMarquee();
  preencherStats();
  preencherProdutos();
  preencherExperiencias();
  preencherAvaliacoes();
}

function preencherMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track || !PADARIA.categorias) return;

  const items = PADARIA.categorias
    .map((nome) => `<span class="marquee__item">${nome}</span>`)
    .join("");

  // Duplica para loop infinito
  track.innerHTML = items + items;
}

function preencherStats() {
  const grid = document.getElementById("grid-stats");
  if (!grid || !PADARIA.stats) return;

  grid.innerHTML = "";

  PADARIA.stats.forEach((s) => {
    const el = document.createElement("div");
    el.className = "stat";
    el.innerHTML = `<span class="stat__valor">${s.valor}</span><span class="stat__rotulo">${s.rotulo}</span>`;
    grid.appendChild(el);
  });
}

function preencherProdutos() {
  const grid = document.getElementById("grid-produtos");
  if (!grid || !PADARIA.produtos) return;

  grid.innerHTML = "";

  PADARIA.produtos.forEach((p) => {
    const card = document.createElement("article");
    card.className = "bento-card" + (p.destaque ? " bento-card--destaque" : "");

    card.innerHTML = `
      <img class="bento-card__img" src="${p.imagem}" alt="${p.nome}" loading="lazy">
      <div class="bento-card__overlay"></div>
      <div class="bento-card__conteudo">
        <h3 class="bento-card__nome">${p.nome}</h3>
        ${p.descricao ? `<p class="bento-card__desc">${p.descricao}</p>` : ""}
      </div>
    `;

    const img = card.querySelector(".bento-card__img");
    img.onerror = () => {
      img.style.display = "none";
      card.style.background = "linear-gradient(135deg, var(--vermelho), var(--carvao))";
    };

    grid.appendChild(card);
  });
}

function preencherExperiencias() {
  const grid = document.getElementById("grid-experiencia");
  if (!grid || !PADARIA.experiencias) return;

  grid.innerHTML = "";

  PADARIA.experiencias.forEach((item) => {
    const el = document.createElement("div");
    el.className = "craft-item";
    el.innerHTML = `
      <span class="craft-item__num">${item.numero || ""}</span>
      <div>
        <h3 class="craft-item__titulo">${item.titulo}</h3>
        <p class="craft-item__texto">${item.texto}</p>
      </div>
    `;
    grid.appendChild(el);
  });
}

function preencherAvaliacoes() {
  const resumo = PADARIA.avaliacaoResumo;
  if (resumo) {
    const elNota = document.getElementById("resumo-nota");
    const elTotal = document.getElementById("resumo-total");
    const elEstrelas = document.getElementById("resumo-estrelas");
    if (elNota) elNota.textContent = resumo.nota;
    if (elTotal) elTotal.textContent = resumo.total;
    if (elEstrelas && resumo.notaDecimal) {
      elEstrelas.style.width = (resumo.notaDecimal / 5) * 100 + "%";
    }
  }

  const grid = document.getElementById("grid-avaliacoes");
  if (!grid || !PADARIA.avaliacoes) return;

  grid.innerHTML = "";

  const svgEstrela =
    '<svg class="review-card__estrela" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 2.25l2.955 5.988 6.61.96-4.783 4.663 1.129 6.584L12 17.302l-5.911 3.143 1.129-6.584L2.435 9.198l6.61-.96L12 2.25z"/></svg>';

  const seloGoogle =
    '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>';

  PADARIA.avaliacoes.forEach((av) => {
    const nota = Math.max(0, Math.min(5, av.nota || 5));
    const card = document.createElement("article");
    card.className = "review-card";

    const criarInicial = () => {
      const span = document.createElement("span");
      span.className = "review-card__inicial";
      span.textContent = (av.nome || "?").charAt(0).toUpperCase();
      if (av.cor) span.style.background = av.cor;
      return span;
    };

    const avatar = document.createElement("div");
    avatar.className = "review-card__avatar";

    if (av.foto) {
      const foto = document.createElement("img");
      foto.className = "review-card__foto";
      foto.src = av.foto;
      foto.alt = `Foto de ${av.nome}`;
      foto.loading = "lazy";
      foto.onerror = () => {
        foto.remove();
        avatar.appendChild(criarInicial());
      };
      avatar.appendChild(foto);
    } else {
      avatar.appendChild(criarInicial());
    }

    const selo = document.createElement("span");
    selo.className = "review-card__selo";
    selo.setAttribute("aria-hidden", "true");
    selo.innerHTML = seloGoogle;
    avatar.appendChild(selo);

    card.innerHTML = `
      <div class="review-card__top"></div>
      <div class="review-card__estrelas" role="img" aria-label="${nota} de 5 estrelas">${svgEstrela.repeat(nota)}</div>
      <p class="review-card__texto">"${av.texto}"</p>
    `;

    const top = card.querySelector(".review-card__top");
    top.appendChild(avatar);

    const meta = document.createElement("div");
    meta.innerHTML = `<p class="review-card__nome">${av.nome}</p><p class="review-card__quando">${av.quando || ""}</p>`;
    top.appendChild(meta);

    grid.appendChild(card);
  });
}

function configurarMenu() {
  const btn = document.getElementById("btn-menu");
  const nav = document.getElementById("nav-principal");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("nav__links--aberto");
    btn.classList.toggle("nav__toggle--aberto", aberto);
    btn.setAttribute("aria-expanded", aberto);
    document.body.style.overflow = aberto ? "hidden" : "";
  });

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav__links--aberto");
      btn.classList.remove("nav__toggle--aberto");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function configurarNavScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const atualizar = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);
  };

  atualizar();
  window.addEventListener("scroll", atualizar, { passive: true });
}

function configurarRevelarScroll() {
  const elementos = document.querySelectorAll(".revelar");
  if (!elementos.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elementos.forEach((el) => obs.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  preencherConteudo();
  configurarMenu();
  configurarNavScroll();
  configurarRevelarScroll();
});
