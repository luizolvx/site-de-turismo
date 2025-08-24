# Documentação Técnica do Projeto – Explore Brasil

**Desenvolvedor:** Luiz Otávio  
**Ano:** 2024  
**Tecnologias:** HTML5, CSS3, JavaScript (ES6+)
**Link para visualização do site:** https://luizolvx.github.io/site-de-turismo/avaliacao/avaliacao.html
---

## 1. Visão Geral do Projeto
O **Explore Brasil** é um site de uma agência de turismo, especializado em destinos nacionais.  
O projeto foi desenvolvido com foco em **design responsivo**, **interatividade** e uma **experiência do usuário intuitiva**.  
Ele é composto por cinco páginas principais que apresentam destinos, permitem cadastro de usuários e possibilitam a avaliação de serviços.

---

## 2. Arquitetura e Tecnologias

### 2.1 Estrutura de Arquivos
A organização dos arquivos segue uma estrutura modular para facilitar a manutenção e escalabilidade.

explore-brasil/
│── index.html # Página inicial (Home)
│
├── sobre/
│ └── sobre.html # Página institucional (Sobre)
│
├── destinos/
│ └── destino.html # Página de destinos turísticos
│
├── contato/
│ └── contato.html # Página de contato e cadastro
│
├── avaliacao/
│ └── avaliacao.html # Página de avaliação de serviços
│
├── estilo/
│ └── css.css # Folha de estilos principal
│
├── scripts/
│ └── jscript.js # Lógica de validação do formulário
│
├── jscript_avaliacao.js # Lógica do sistema de avaliação
│
└── imagens/ # Diretório para recursos multimídia


### 2.2 Tecnologias Utilizadas  
- **HTML5:** Estruturação semântica de todo o conteúdo das páginas.  
- **CSS3:** Estilização com **Flexbox, Grid Layout** e **Media Queries** para garantir a responsividade.  
- **JavaScript:** Interatividade, validação de formulários e manipulação dinâmica do DOM.  
- **Google Fonts:** Tipografia personalizada (fonte *Bebas Neue*).  

---

## 3. Páginas e Funcionalidades Detalhadas  

### 3.1 Página Inicial (*index.html*)  
- **Header:** Barra de navegação fixa e consistente.  
- **Mídia:** Vídeo de fundo em loop (*autoplay* e *muted*).  
- **Conteúdo:** Seção de destinos populares em **cards interativos**.  

### 3.2 Página Sobre (*sobre.html*)  
- **Conteúdo:** História, missão e valores da agência.  
- **Layout:** Texto descritivo + imagem representativa da marca.  

### 3.3 Página de Destinos (*destino.html*)  
- **Catálogo:** Dez pacotes de destinos turísticos brasileiros.  
- **Cards de Destino:** Imagem, descrição, preço (original e promocional) e duração.  
- **Interatividade:** Efeitos *hover* com animação de escala.  

### 3.4 Página de Contato (*contato.html*)  
- **Formulário de Cadastro:** Nome, e-mail, senha e confirmação de senha.  
- **Validação:** Script em tempo real com **feedback visual** (sucesso ou erro).  

### 3.5 Página de Avaliação (*avaliacao.html*)  
- **Sistema de Avaliação:** Interface por estrelas (1 a 5).  
- **Interatividade:** Estrelas reagem a *mouseover*, *mouseout* e *click*.  
- **Feedback:** Mensagem de confirmação personalizada após envio.  

---

## 4. Design e Experiência do Usuário (UI/UX)  

### 4.1 Identidade Visual  
- **Esquema de Cores:**  
  - Primária: Verde (#4CAF50, #24e11a)  
  - Ação: Vermelho (#b30000)  
  - Neutras: Branco, preto e cinza  

- **Tipografia:**  
  - Títulos: *Bebas Neue*  
  - Texto: Sans-serif padrão  

### 4.2 Responsividade  
- **Tablets (até 768px):**  
  - Barra de navegação reorganizada  
  - Cards de destino ajustados para 90% da largura  

- **Smartphones (até 480px):**  
  - Fontes e espaçamentos reduzidos  
  - Cards ocupam 100% da largura  

---

## 5. Conclusão  
O projeto **Explore Brasil** demonstra a aplicação de tecnologias **front-end** para criar um site funcional, visualmente atraente e acessível.  

Principais competências aplicadas:  
- Estruturação de código semântico  
- Design responsivo  
- Interatividade com JavaScript  
- Validação de formulários no cliente  

O site está pronto para implantação e futuras expansões, como:  
- Integração com **backend** para gerenciamento de reservas  
- Banco de dados de destinos turísticos.

