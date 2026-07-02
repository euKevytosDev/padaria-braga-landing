/*
  config.js — dados da padaria em um só lugar.
  Quando o dono pedir mudança de telefone ou horário, edite só este arquivo.
*/
const PADARIA = {
  nome: "Padaria Braga",
  slogan: "O sabor que é tradição no bairro Industrial",

  // Foto do banner principal — troque pela foto real da padaria depois
  heroImagem:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80",

  // Apenas números: DDD + telefone.
  // ATENÇÃO: (31) 3361-3369 é o telefone fixo do letreiro — CONFIRMAR o WhatsApp real antes de publicar.
  whatsapp: "313361 3369".replace(/\s/g, ""),

  mensagemPadrao:
    "Olá! Vi o site da Padaria Braga e gostaria de mais informações.",

  // Textos genéricos — substitua quando tiver a história real
  sobre:
    "Referência no bairro Industrial, a Padaria Braga prepara diariamente " +
    "pães fresquinhos, bolos, salgados e doces com ingredientes selecionados " +
    "e o carinho de quem atende como vizinho. Passe aqui e sinta o cheiro de " +
    "pão quentinho saindo do forno.",

  endereco: "R. José Ferreira Soares, 29 - Industrial, Contagem - MG, 32220-380",
  horario: "Segunda a sábado, das 6h às 20h · Domingo, das 6h às 12h (confirmar)",

  // Link do Google Maps — busca pelo endereço da Braga (trocar pelo "Incorporar mapa" oficial depois)
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Padaria+e+Confeitaria+Braga+Rua+Jose+Ferreira+Soares+29+Industrial+Contagem+MG&output=embed",

  // Categorias exibidas na barra de destaque
  categorias: [
    "Pães",
    "Bolos",
    "Salgados",
    "Doces",
    "Bebidas",
    "Cafés",
  ],

  // Produtos em destaque (nomes genéricos — troque pelos reais depois)
  produtos: [
    { nome: "Pão francês", imagem: "https://media.istockphoto.com/id/1162195490/pt/foto/fresh-bread-rolls.jpg?s=612x612&w=0&k=20&c=ZUI-YCFuRjEQBeODcZ8MlQy82d2oxicqHcqRKX8JyS4=" },
    { nome: "Bolo caseiro", imagem: "https://media.istockphoto.com/id/1313708565/pt/foto/carrot-cake-with-chocolate-icing-brazilian-cake.jpg?s=612x612&w=0&k=20&c=3l-iL0tND-_1wWCCIJ2lU23Pw5dFLc8gF8glJ4nwVrI=" },
    { nome: "Croissant", imagem: "https://media.istockphoto.com/id/1433860471/pt/foto/mini-crescent.jpg?s=612x612&w=0&k=20&c=EwYmDM8LOxSqe3VLSKU5mQ0qrLUctc2MDRG0-J3H65g=" },
    { nome: "Sonho", imagem: "https://media.istockphoto.com/id/460936857/pt/foto/sonho-brasileira.jpg?s=612x612&w=0&k=20&c=ajK-t0QNlHjEmAyu0SnY1P2efiqKEKPmGL6Ez4wdZ3g=" },
  ],

  // Experiência na padaria — textos genéricos, ajuste quando conhecer a rotina real
  experiencias: [
    {
      icone: "☕",
      titulo: "Café quentinho",
      texto: "Comece o dia com um café passado na hora, do jeitinho que você gosta.",
    },
    {
      icone: "🍳",
      titulo: "Pão com ovo na hora",
      texto: "Feito na chapa quando você pede — sequinho no ponto certo.",
    },
    {
      icone: "🥖",
      titulo: "Fornada o dia todo",
      texto: "Pães saindo do forno ao longo do dia, sempre crocantes e cheirosos.",
    },
    {
      icone: "🪑",
      titulo: "Lugar Aconchegante",
      texto: "Um cantinho relaxante e descontraído para uma pausa no meio da correria.",
    },
  ],

  // Resumo da nota (estilo Google) exibido no topo da seção de avaliações
  avaliacaoResumo: {
    nota: "4,4",
    notaDecimal: 4.4,
    total: 468,
  },

  // Avaliações de clientes (estilo Google).
  // Sem "foto" => mostra a inicial do nome num círculo colorido (avatar de letra).
  avaliacoes: [
    {
      nome: "Mariana Alves",
      quando: "há 2 semanas",
      nota: 5,
      cor: "#c1272d",
      texto: "Melhor pão francês do bairro Industrial! Sempre quentinho e crocante. Amo demais!",
    },
    {
      nome: "Carlos Eduardo",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      quando: "há 1 mês",
      nota: 5,
      texto: "Ótima variedade de salgados e bolos, preço justo. Recomendo demais a Padaria Braga!",
    },
    {
      nome: "Juliana Ferreira",
      quando: "há 2 meses",
      nota: 5,
      cor: "#7a5551",
      texto: "Ambiente aconchegante pra tomar um café da manhã. Virou parada obrigatória toda semana!",
    },
  ],
};
