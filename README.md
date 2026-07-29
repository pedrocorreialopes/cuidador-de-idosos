# Portfólio Premium — Cuidador(a) de Idosos

Website profissional, elegante e acolhedor para apresentação dos serviços de um(a) Cuidador(a) de Idosos. O projeto foi construído como site estático moderno, focado em transmitir confiança, humanização, segurança e profissionalismo.

## Status do projeto

✅ **Concluído (versão 1.0 estática)** — estrutura completa, design premium, responsivo e funcional.

## Funcionalidades implementadas

- **Home fullscreen** com hero impactante, foto profissional, título, slogan, estatísticas animadas e CTAs para WhatsApp e agendamento.
- **Menu fixo** com blur/glassmorphism, navegação suave, menu mobile e tema claro/escuro (dark mode).
- **Seção Sobre** com história, missão, valores, diferenciais e card de experiência.
- **Seção Serviços** com cards elegantes para cada categoria (Cuidados Básicos, Acompanhamento, Apoio Diário, Acompanhamento Externo, Cuidados Especiais).
- **Páginas individuais de serviço** (`servico.html?id=...`) com banner, descrição completa, benefícios, como funciona, cuidados realizados e perfil do paciente.
- **Seção Diferenciais** com 8 cards de destaque (humanização, pontualidade, domiciliar, comunicação, primeiros socorros, etc.).
- **Linha do tempo de Experiência** com anos de atuação, cursos e certificações.
- **Galeria** com lightbox para ampliar imagens.
- **Depoimentos** em slider automático com foto, nome, cidade, avaliação e comentário.
- **Estatísticas animadas** (contadores): idosos atendidos, horas de cuidado, famílias satisfeitas, cursos e anos de experiência.
- **Certificações** com cards de cursos, diplomas e especializações.
- **Perguntas Frequentes (FAQ)** em acordeão interativo.
- **Blog** com cards de artigos (preparado para futuro conteúdo).
- **Contato** com formulário de agendamento, informações de WhatsApp, telefone, e-mail, área de atendimento, horários, mapa e redes sociais.
- **Botão flutuante do WhatsApp**.
- **Rodapé** com links rápidos, contato e crédito ao desenvolvedor Pedro Correia Lopes Filho.
- **PWA Ready** com manifest.json e ícones.
- **Acessibilidade (WCAG AA)** com skip-link, ARIA labels, foco visível, contraste e navegação por teclado.
- **SEO básico** com meta tags, Open Graph, canonical e schema semântico.

## Estrutura de dados

Os dados ficam em arquivos JSON separados para facilitar atualizações futuras:

- `data/config.json` — nome, cargo, slogan, contatos, redes sociais, horários, desenvolvedor.
- `data/services.json` — serviços com título, descrição, imagem, duração, modalidade, benefícios, como funciona e cuidados.
- `data/gallery.json` — fotos da galeria.
- `data/testimonials.json` — depoimentos.
- `data/certificates.json` — certificados e cursos.
- `data/experience.json` — linha do tempo profissional.
- `data/faq.json` — perguntas frequentes.
- `data/blog.json` — artigos do blog.

## Estrutura de arquivos

```
/
├── index.html              # Página principal
├── servico.html            # Página individual de serviço
├── manifest.json           # Configuração PWA
├── css/
│   └── style.css           # Estilos premium, tema claro/escuro, animações
├── js/
│   └── main.js             # Interatividade, carregamento de dados, animações
├── data/
│   ├── config.json
│   ├── services.json
│   ├── gallery.json
│   ├── testimonials.json
│   ├── certificates.json
│   ├── experience.json
│   ├── faq.json
│   └── blog.json
├── assets/
│   ├── hero/
│   ├── about/
│   ├── services/
│   ├── gallery/
│   ├── testimonials/
│   ├── certificates/
│   ├── blog/
│   └── icons/
└── README.md
```

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 customizado + Tailwind CSS (via CDN)
- JavaScript ES2026 (módulos nativos, fetch, IntersectionObserver)
- Google Fonts (Poppins, Inter, Nunito)
- Font Awesome 6 (ícones)
- PWA (manifest + ícones SVG)

## Paleta de cores

- **Primária:** `#2563EB` (Azul Confiança)
- **Secundária:** `#10B981` (Verde Esperança)
- **Destaque:** `#F8FAFC`
- **Texto:** `#1E293B`
- **Background:** `#FFFFFF`

## Como personalizar

1. **Alterar nome e contatos:** edite `data/config.json`.
2. **Substituir imagens:** troque os arquivos em `assets/` mantendo os nomes e referências nos JSONs, ou altere os caminhos nos arquivos `.json`.
3. **Editar serviços, depoimentos, FAQ, etc.:** altere os respectivos arquivos em `data/`.
4. **Tema:** o dark mode é automático conforme preferência do sistema e pode ser alternado pelo botão no menu.

## Entrada URIs

- `index.html` — página inicial completa.
- `servico.html?id=<id>` — página de detalhe de um serviço. IDs disponíveis:
  - `cuidados-basicos`
  - `acompanhamento`
  - `apoio-diario`
  - `acompanhamento-externo`
  - `cuidados-especiais`

## Notas importantes sobre a implementação

- O projeto é **estático** (HTML/CSS/JS puro). As tecnologias React, Next.js, Framer Motion e GSAP foram mencionadas no prompt, mas não são aplicáveis a um site 100% estático sem ambiente Node.js/build. Foram alcançados efeitos equivalentes usando CSS3 e JavaScript nativo (scroll reveal, animações, hover, glassmorphism, microinterações).
- As imagens fornecidas são **SVGs ilustrativos** (leves, escaláveis e facilmente substituíveis). Para produção, recomenda-se substituir por fotografias reais do profissional e dos atendimentos.
- O formulário de contato abre uma conversa no WhatsApp com os dados preenchidos.

## Próximos passos recomendados

1. Substituir os SVGs por fotografias reais do profissional e do trabalho domiciliar.
2. Inserir número real de WhatsApp/telefone em `data/config.json`.
3. Adicionar links reais do Instagram e Facebook.
4. Criar artigos completos para o blog (atualmente em modo de preview).
5. Implementar envio real do formulário (backend) caso deseje armazenar leads, ou manter integração via WhatsApp.
6. Para produção com Tailwind, recomenda-se instalar o Tailwind CLI e gerar um CSS otimizado, substituindo o CDN.
7. Converter os ícones PWA de SVG para PNG (192x192 e 512x512) para maior compatibilidade com todos os navegadores.

## Desenvolvedor

Criado e desenvolvido por **Pedro Correia Lopes Filho**.

Todos os direitos reservados.
