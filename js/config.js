/*
  config.js — dados da Padaria Braga
  Edite aqui textos, imagens, WhatsApp e horários.
*/
const PADARIA = {
  nome: "Padaria Braga",
  slogan: "O sabor que é tradição no bairro Industrial",

  heroImagem:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=85",
  heroImagemSecundaria:
    "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=85",

  whatsapp: "3133613369",
  mensagemPadrao:
    "Olá! Vi o site da Padaria Braga e gostaria de mais informações.",

  sobre:
    "Referência no bairro Industrial, a Padaria Braga prepara diariamente pães fresquinhos, bolos, salgados e doces com ingredientes selecionados e o carinho de quem atende como vizinho.",

  endereco: "R. José Ferreira Soares, 29 - Industrial, Contagem - MG, 32220-380",
  horario: "Segunda a sábado, das 6h às 20h · Domingo, das 6h às 12h",

  mapsEmbedUrl:
    "https://www.google.com/maps?q=Padaria+e+Confeitaria+Braga+Rua+Jose+Ferreira+Soares+29+Industrial+Contagem+MG&output=embed",

  // Números de destaque (seção editorial)
  stats: [
    { valor: "4,4", rotulo: "Nota no Google" },
    { valor: "6h", rotulo: "Abre cedo todo dia" },
    { valor: "100+", rotulo: "Produtos frescos" },
    { valor: "468", rotulo: "Avaliações" },
  ],

  categorias: ["Pães artesanais", "Bolos", "Salgados", "Doces", "Cafés", "Fornada diária"],

  produtos: [
    {
      nome: "Pão francês",
      descricao: "Crocante por fora, macio por dentro — saindo do forno o dia todo.",
      imagem: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=900&q=85",
      destaque: true,
    },
    {
      nome: "Bolo caseiro",
      descricao: "Receitas clássicas, fatia generosa.",
      imagem: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=700&q=85",
    },
    {
      nome: "Croissant",
      descricao: "Folhado dourado, manteiga na medida.",
      imagem: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=85",
    },
    {
      nome: "Sonho",
      descricao: "Recheio cremoso, açúcar cristal.",
      imagem: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700&q=85",
    },
  ],

  experiencias: [
    {
      numero: "01",
      titulo: "Café quentinho",
      texto: "Passado na hora, do jeitinho que você gosta.",
    },
    {
      numero: "02",
      titulo: "Pão com ovo",
      texto: "Feito na chapa quando você pede.",
    },
    {
      numero: "03",
      titulo: "Fornada contínua",
      texto: "Pães saindo do forno ao longo do dia.",
    },
    {
      numero: "04",
      titulo: "Ambiente acolhedor",
      texto: "Mesinhas pra pausa no meio da correria.",
    },
  ],

  craftImagem:
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1600&q=85",

  avaliacaoResumo: {
    nota: "4,4",
    notaDecimal: 4.4,
    total: 468,
  },

  avaliacoes: [
    {
      nome: "Mariana Alves",
      quando: "há 2 semanas",
      nota: 5,
      cor: "#bf2530",
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
      cor: "#5c4038",
      texto: "Ambiente aconchegante pra tomar um café da manhã. Virou parada obrigatória toda semana!",
    },
  ],
};
