// Dados globais
let appConfig = {};

const FALLBACK_DATA = {
  config: {
    nome: "Maria Silva",
    cargo: "Cuidadora de Idosos",
    slogan: "Cuidar com respeito, dedicação e amor em cada momento.",
    telefone: "5511999999999",
    email: "contato@cuidadordeidosos.com.br",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    cidade: "São Paulo, SP",
    area_atendimento: "Grande São Paulo e região",
    horarios: "Segunda a Domingo, 7h às 22h (plantões sob consulta)",
    endereco: "São Paulo, SP",
    whatsapp: "https://wa.me/5511999999999",
    desenvolvedor: "Pedro Correia Lopes Filho"
  },
  services: [
    {
      id: "cuidados-basicos",
      nome: "Cuidados Básicos",
      categoria: "Cuidados Básicos",
      descricao: "Assistência diária essencial para manter o idoso limpo, confortável e bem cuidado.",
      imagem: "assets/services/cuidados-basicos.jpg",
      duracao: "Conforme necessidade",
      modalidade: "Domiciliar",
      beneficios: ["Higiene pessoal com segurança", "Prevenção de quedas e lesões", "Bem-estar e dignidade preservados"],
      como_funciona: ["Avaliação das necessidades individuais", "Planejamento de rotina de cuidados", "Execução diária com registros"],
      cuidados: ["Higiene pessoal", "Banho assistido", "Troca de roupas", "Alimentação", "Hidratação", "Administração de medicamentos (quando permitido)"]
    },
    {
      id: "acompanhamento",
      nome: "Acompanhamento",
      categoria: "Acompanhamento",
      descricao: "Companhia, conversas e atividades para estimular a saúde mental e física do idoso.",
      imagem: "assets/services/acompanhamento.jpg",
      duracao: "Conforme necessidade",
      modalidade: "Domiciliar / Externo",
      beneficios: ["Redução da solidão", "Estímulo cognitivo", "Maior qualidade de vida"],
      como_funciona: ["Conversa e escuta ativa", "Atividades recreativas e leituras", "Caminhadas e exercícios leves"],
      cuidados: ["Companhia", "Conversas", "Leitura", "Jogos", "Caminhadas", "Exercícios leves"]
    },
    {
      id: "apoio-diario",
      nome: "Apoio Diário",
      categoria: "Apoio Diário",
      descricao: "Organização da rotina, preparação de refeições e apoio nas tarefas cotidianas.",
      imagem: "assets/services/apoio-diario.jpg",
      duracao: "Conforme necessidade",
      modalidade: "Domiciliar",
      beneficios: ["Rotina estruturada", "Ambiente seguro e organizado", "Mais autonomia para o idoso"],
      como_funciona: ["Organização da rotina diária", "Preparação de refeições saudáveis", "Compras e organização do ambiente"],
      cuidados: ["Organização da rotina", "Preparação de refeições", "Compras", "Organização do ambiente"]
    },
    {
      id: "acompanhamento-externo",
      nome: "Acompanhamento Externo",
      categoria: "Acompanhamento Externo",
      descricao: "Acompanhamento em consultas, exames, farmácia e eventos familiares.",
      imagem: "assets/services/acompanhamento-externo.jpg",
      duracao: "Conforme necessidade",
      modalidade: "Externo",
      beneficios: ["Segurança em deslocamentos", "Comunicação com a família", "Apoio em momentos importantes"],
      como_funciona: ["Agendamento e planejamento", "Transporte e acompanhamento", "Retorno com informações à família"],
      cuidados: ["Consultas médicas", "Exames", "Farmácia", "Passeios", "Eventos familiares"]
    },
    {
      id: "cuidados-especiais",
      nome: "Cuidados Especiais",
      categoria: "Cuidados Especiais",
      descricao: "Atendimento especializado para idosos com condições específicas de saúde.",
      imagem: "assets/services/cuidados-especiais.jpg",
      duracao: "Conforme necessidade",
      modalidade: "Domiciliar",
      beneficios: ["Atendimento individualizado", "Técnicas específicas para cada condição", "Maior tranquilidade para a família"],
      como_funciona: ["Avaliação especializada", "Plano de cuidados personalizado", "Acompanhamento contínuo"],
      cuidados: ["Pós-operatório", "Alzheimer", "Parkinson", "Mobilidade reduzida", "Cuidados paliativos", "Pacientes acamados"]
    }
  ],
  gallery: [
    { id: "g1", titulo: "Atendimento Domiciliar", descricao: "Cuidado atencioso no ambiente familiar.", imagem: "assets/gallery/atendimento-domiciliar.jpg" },
    { id: "g2", titulo: "Passeios ao Ar Livre", descricao: "Momentos de frescor e movimento.", imagem: "assets/gallery/passeios.jpg" },
    { id: "g3", titulo: "Leitura e Conversa", descricao: "Estímulo cognitivo e companhia.", imagem: "assets/gallery/leitura.jpg" },
    { id: "g4", titulo: "Momentos de Interação", descricao: "Carinho e atenção em cada detalhe.", imagem: "assets/gallery/interacao.jpg" },
    { id: "g5", titulo: "Ambiente Organizado", descricao: "Segurança e conforto para o idoso.", imagem: "assets/gallery/ambiente.jpg" },
    { id: "g6", titulo: "Bem-estar em Família", descricao: "Conexão afetiva e tranquilidade.", imagem: "assets/gallery/familia.jpg" }
  ],
  testimonials: [
    { id: "t1", nome: "Cristina Mendes", cidade: "São Paulo, SP", foto: "assets/testimonials/cristina.svg", avaliacao: 5, comentario: "A atenção e o carinho dedicados ao meu pai foram transformadores. Sentimos segurança em cada momento." },
    { id: "t2", nome: "Roberto Almeida", cidade: "Rio de Janeiro, RJ", foto: "assets/testimonials/roberto.svg", avaliacao: 5, comentario: "Profissional extremamente competente, paciente e comprometida. Recomendo de coração." },
    { id: "t3", nome: "Fernanda Lopes", cidade: "Belo Horizonte, MG", foto: "assets/testimonials/fernanda.svg", avaliacao: 5, comentario: "A tranquilidade que tivemos ao contratar esse serviço foi imensa. Nossa família agradece muito." }
  ],
  certificates: [
    { id: "c1", titulo: "Primeiros Socorros", instituicao: "Cruz Vermelha Brasileira", ano: "2024", imagem: "assets/certificates/primeiros-socorros.svg", descricao: "Capacitação em atendimento de emergências e primeiros socorros." },
    { id: "c2", titulo: "APH", instituicao: "Corpo de Bombeiros", ano: "2023", imagem: "assets/certificates/aph.svg", descricao: "Atendimento Pré-Hospitalar para situações de urgência." },
    { id: "c3", titulo: "Cuidados Geriátricos", instituicao: "Escola de Cuidadores", ano: "2025", imagem: "assets/certificates/geriatrico.svg", descricao: "Especialização em cuidados com idosos e condições senis." },
    { id: "c4", titulo: "Alzheimer e Parkinson", instituicao: "Instituto de Geriatria", ano: "2024", imagem: "assets/certificates/neuro.svg", descricao: "Cuidados específicos para pacientes com doenças neurodegenerativas." }
  ],
  experience: [
    { id: "e1", ano: "2026", titulo: "Atuação Contínua", descricao: "Cuidados domiciliares e acompanhamento personalizado para diversas famílias." },
    { id: "e2", ano: "2024", titulo: "Especialização Geriátrica", descricao: "Certificação em cuidados geriátricos e primeiros socorros." },
    { id: "e3", ano: "2022", titulo: "Início da Carreira", descricao: "Começo da jornada como cuidador(a) de idosos com atendimento domiciliar." }
  ],
  faq: [
    { id: "f1", pergunta: "O atendimento é domiciliar?", resposta: "Sim, o atendimento é realizado na residência do idoso, garantindo conforto, segurança e proximidade com a família." },
    { id: "f2", pergunta: "Atende plantão noturno?", resposta: "Sim, é possível agendar plantões noturnos de acordo com a disponibilidade e a necessidade da família." },
    { id: "f3", pergunta: "Realiza acompanhamento hospitalar?", resposta: "Sim, realizo acompanhamento em consultas, exames e emergências, mantendo a família sempre informada." },
    { id: "f4", pergunta: "Atende finais de semana?", resposta: "Sim, atendimentos podem ser agendados para sábados, domingos e feriados, conforme demanda." },
    { id: "f5", pergunta: "Como funciona a contratação?", resposta: "A contratação começa com uma conversa para entender as necessidades, seguida de uma visita de avaliação e proposta personalizada." }
  ],
  blog: [
    { id: "b1", titulo: "Cuidados com Idosos: Dicas Essenciais", resumo: "Orientações práticas para garantir segurança, conforto e qualidade de vida no dia a dia.", imagem: "assets/blog/cuidados-idosos.svg", data: "2026-07-15" },
    { id: "b2", titulo: "Alimentação Saudável na Terceira Idade", resumo: "Como montar refeições nutritivas e saborosas para idosos.", imagem: "assets/blog/alimentacao.svg", data: "2026-07-08" },
    { id: "b3", titulo: "Prevenção de Quedas em Casa", resumo: "Ajustes simples que fazem toda a diferença na segurança do ambiente domiciliar.", imagem: "assets/blog/quedas.svg", data: "2026-06-28" },
    { id: "b4", titulo: "Doença de Alzheimer: Como Ajudar", resumo: "Comportamentos e cuidados que promovem bem-estar para pacientes e familiares.", imagem: "assets/blog/alzheimer.svg", data: "2026-06-20" }
  ]
};

async function loadJSON(path) {
  try {
    const res = await fetch(path + '?v=' + Date.now());
    if (!res.ok) throw new Error('Erro ao carregar ' + path + ' (status ' + res.status + ')');
    return await res.json();
  } catch (e) {
    console.warn('Fallback para', path);
    return null;
  }
}

async function initApp() {
  let config = await loadJSON('data/config.json');
  if (!config || Object.keys(config).length === 0) config = FALLBACK_DATA.config;
  appConfig = config;

  applyConfig(config);
  initTheme();
  initNavbar();
  initMobileMenu();
  initCounters();
  initTestimonialsSlider();
  initLightbox();
  initForm();
  initWhatsAppFloat(config);
  initFooter(config);
  initImageFallbacks();

  const services = await loadJSON('data/services.json') || FALLBACK_DATA.services;
  renderServices(services, config);

  const gallery = await loadJSON('data/gallery.json') || FALLBACK_DATA.gallery;
  renderGallery(gallery);

  const testimonials = await loadJSON('data/testimonials.json') || FALLBACK_DATA.testimonials;
  renderTestimonials(testimonials);

  const certificates = await loadJSON('data/certificates.json') || FALLBACK_DATA.certificates;
  renderCertificates(certificates);

  const experience = await loadJSON('data/experience.json') || FALLBACK_DATA.experience;
  renderExperience(experience);

  const faq = await loadJSON('data/faq.json') || FALLBACK_DATA.faq;
  renderFaq(faq);

  const blog = await loadJSON('data/blog.json') || FALLBACK_DATA.blog;
  renderBlog(blog);

  if (document.getElementById('service-detail')) {
    renderServiceDetail(services, config);
  }

  // Observar animações após renderização dinâmica
  initScrollReveal();

  // Garante que elementos sejam visíveis mesmo se o observer não disparar
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      el.classList.add('active');
    });
  }, 100);
}

function applyConfig(config) {
  if (!config) return;
  document.title = `${config.nome || 'Cuidador(a)'} — ${config.cargo || 'Cuidador(a) de Idosos'}`;
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (config[key]) el.textContent = config[key];
  });

  const logoName = document.getElementById('logo-name');
  if (logoName && config.nome) logoName.textContent = config.nome.split(' ')[0];

  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = config.nome || 'Cuidador(a)';

  const heroCargo = document.getElementById('hero-cargo');
  if (heroCargo) heroCargo.textContent = config.cargo || 'Cuidador(a) de Idosos';

  const heroSlogan = document.getElementById('hero-slogan');
  if (heroSlogan) heroSlogan.textContent = config.slogan || 'Cuidar com respeito, dedicação e amor.';
}

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === 'dark') {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const close = document.getElementById('mobile-menu-close');
  if (!btn || !menu || !overlay || !close) return;

  function open() {
    menu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', open);
  close.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target, 10) || 0, el.dataset.suffix || '');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 2000;
  const step = target / (duration / 16);
  function update() {
    start += step;
    if (start < target) {
      el.textContent = Math.floor(start) + suffix;
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }
  update();
}

function initTestimonialsSlider() {
  window.testimonialIndex = 0;
}

function renderTestimonials(data) {
  const track = document.getElementById('testimonials-track');
  if (!track) return;
  track.innerHTML = data.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-inner">
        <img src="${t.foto}" alt="Foto de ${t.nome}" class="testimonial-avatar" loading="lazy">
        <div class="testimonial-stars" aria-label="Avaliação ${t.avaliacao} de 5 estrelas">
          ${'★'.repeat(t.avaliacao)}${'☆'.repeat(5 - t.avaliacao)}
        </div>
        <p class="testimonial-text">"${t.comentario}"</p>
        <p class="testimonial-author">${t.nome}</p>
        <p class="testimonial-city">${t.cidade}</p>
      </div>
    </div>
  `).join('');

  const prev = document.getElementById('testimonial-prev');
  const next = document.getElementById('testimonial-next');
  if (!prev || !next) return;

  function move(index) {
    if (!data.length) return;
    if (index < 0) index = data.length - 1;
    if (index >= data.length) index = 0;
    window.testimonialIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener('click', () => move(window.testimonialIndex - 1));
  next.addEventListener('click', () => move(window.testimonialIndex + 1));
  setInterval(() => move(window.testimonialIndex + 1), 6000);
}

function renderFaq(data) {
  const container = document.getElementById('faq-list');
  if (!container) return;
  container.innerHTML = data.map(f => `
    <div class="faq-item" data-faq="${f.id}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-${f.id}">
        ${f.pergunta}
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="faq-answer" id="faq-${f.id}">
        <p>${f.resposta}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      container.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const close = document.getElementById('lightbox-close');
  if (!lightbox || !lightboxImg || !close) return;

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });

  close.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
}

function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const phone = (appConfig.telefone || '55').replace(/[^0-9]/g, '');
    const msg = `Olá! Meu nome é ${data.nome}. Gostaria de solicitar atendimento para ${data.paciente} (${data.idade} anos). Tipo: ${data.tipo}. Horário desejado: ${data.horario}. Mensagem: ${data.mensagem}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
}

function initWhatsAppFloat(config) {
  const btn = document.getElementById('whatsapp-float');
  const phone = (config.telefone || '55').replace(/[^0-9]/g, '');
  if (btn) btn.href = config.whatsapp || `https://wa.me/${phone}`;
}

function initFooter(config) {
  const dev = document.getElementById('dev-name');
  if (dev) dev.textContent = config.desenvolvedor || 'Pedro Correia Lopes Filho';
  const phone = (config.telefone || '55').replace(/[^0-9]/g, '');
  const whatsLink = document.getElementById('footer-whatsapp');
  if (whatsLink) whatsLink.href = config.whatsapp || `https://wa.me/${phone}`;
}

function initImageFallbacks() {
  const placeholder = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#f1f5f9"/><text x="200" y="150" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#94a3b8">Imagem</text></svg>');
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      if (this.src !== placeholder) this.src = placeholder;
    });
  });
}

function renderServices(data, config) {
  const grid = document.getElementById('services-grid');
  console.log('renderServices', grid, data.length);
  if (!grid) return;
  const phone = (config.telefone || '55').replace(/[^0-9]/g, '');
  const whats = config.whatsapp || `https://wa.me/${phone}`;
  grid.innerHTML = data.map(s => `
    <article class="service-card">
      <div class="overflow-hidden rounded-t-[1.25rem]">
        <img src="${s.imagem}" alt="${s.nome}" class="service-card-image" loading="lazy">
      </div>
      <div class="service-card-content">
        <span class="service-card-category">${s.categoria}</span>
        <h3 class="service-card-title">${s.nome}</h3>
        <p class="service-card-desc">${s.descricao}</p>
        <div class="service-card-meta">
          <span><i class="far fa-clock" aria-hidden="true"></i> ${s.duracao}</span>
          <span><i class="fas fa-home" aria-hidden="true"></i> ${s.modalidade}</span>
        </div>
        <div class="service-card-actions">
          <a href="servico.html?id=${s.id}" class="btn btn-secondary">Saiba Mais</a>
          <a href="${whats}" class="btn btn-primary btn-whatsapp" target="_blank"><i class="fab fa-whatsapp" aria-hidden="true"></i> Solicitar</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderGallery(data) {
  const grid = document.getElementById('gallery-grid');
  console.log('renderGallery', grid, data.length);
  if (!grid) return;
  grid.innerHTML = data.map((g, i) => `
    <div class="gallery-item" tabindex="0" role="button" aria-label="Ampliar imagem ${g.titulo}">
      <img src="${g.imagem}" alt="${g.titulo}" loading="lazy">
      <div class="gallery-overlay">
        <h4>${g.titulo}</h4>
        <p>${g.descricao}</p>
      </div>
    </div>
  `).join('');
}

function renderCertificates(data) {
  const grid = document.getElementById('certificates-grid');
  if (!grid) return;
  grid.innerHTML = data.map(c => `
    <article class="certificate-card">
      <img src="${c.imagem}" alt="${c.titulo}" class="certificate-image" loading="lazy">
      <div class="certificate-content">
        <span class="certificate-year">${c.ano}</span>
        <h3 class="certificate-title">${c.titulo}</h3>
        <p class="certificate-institution">${c.instituicao}</p>
        <p class="certificate-desc">${c.descricao}</p>
      </div>
    </article>
  `).join('');
}

function renderExperience(data) {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;
  timeline.innerHTML = data.map(e => `
    <div class="timeline-item reveal-left">
      <div class="timeline-dot"></div>
      <span class="timeline-year">${e.ano}</span>
      <h3 class="timeline-title">${e.titulo}</h3>
      <p class="timeline-desc">${e.descricao}</p>
    </div>
  `).join('');
}

function renderBlog(data) {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  grid.innerHTML = data.map(b => `
    <article class="blog-card">
      <div class="overflow-hidden rounded-t-[1.25rem]">
        <img src="${b.imagem}" alt="${b.titulo}" class="blog-image" loading="lazy">
      </div>
      <div class="blog-content">
        <p class="blog-date">${formatDate(b.data)}</p>
        <h3 class="blog-title">${b.titulo}</h3>
        <p class="blog-resumo">${b.resumo}</p>
        <a href="#" class="blog-readmore" onclick="event.preventDefault(); alert('Artigo em breve.')">Ler artigo <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </article>
  `).join('');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function renderServiceDetail(services, config) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const s = services.find(x => x.id === id) || services[0];
  if (!s) return;

  document.title = `${s.nome} — ${config.nome || 'Cuidador(a)'}`;
  const cat = document.getElementById('service-detail-category');
  if (cat) cat.textContent = s.categoria;
  const title = document.getElementById('service-detail-title');
  if (title) title.textContent = s.nome;
  const desc = document.getElementById('service-detail-desc');
  if (desc) desc.textContent = s.descricao;
  const img = document.getElementById('service-detail-image');
  if (img) { img.src = s.imagem; img.alt = s.nome; }

  const benefits = document.getElementById('service-detail-benefits');
  if (benefits) benefits.innerHTML = (s.beneficios || []).map(b => `<li><i class="fas fa-check-circle" aria-hidden="true"></i> ${b}</li>`).join('');
  const how = document.getElementById('service-detail-how');
  if (how) how.innerHTML = (s.como_funciona || []).map(b => `<li><i class="fas fa-check-circle" aria-hidden="true"></i> ${b}</li>`).join('');
  const cares = document.getElementById('service-detail-cares');
  if (cares) cares.innerHTML = (s.cuidados || []).map(b => `<li><i class="fas fa-check-circle" aria-hidden="true"></i> ${b}</li>`).join('');

  const dur = document.getElementById('service-detail-duration');
  if (dur) dur.textContent = s.duracao;
  const mod = document.getElementById('service-detail-modality');
  if (mod) mod.textContent = s.modalidade;

  const cta = document.getElementById('service-detail-cta');
  if (cta) {
    const phone = (config.telefone || '55').replace(/[^0-9]/g, '');
    cta.href = config.whatsapp || `https://wa.me/${phone}`;
  }
}

// Inicializa
document.addEventListener('DOMContentLoaded', initApp);
