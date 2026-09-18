<div align="center">
  <img src="frontend/assets/images/capasoujunior.png" alt="Capa SouJunior" width="100%">

  # 🚀 Landing Page · Jasper.C
  
  <p align="center">
    <b>Desenvolvido pela squad <u>Jasper.C</u> para o Hackathon da SouJunior</b>
  </p>

  <p align="center">
    <b>Transformando visitantes em apoiadores ativos da comunidade de transição para júniores.</b>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Status-Em_Desenvolvimento-brightgreen?style=flat-square" alt="Status">
    <img src="https://img.shields.io/badge/Hackathon-SouJunior-blue?style=flat-square" alt="Hackathon">
    <img src="https://img.shields.io/badge/Licença-MIT-yellow?style=flat-square" alt="License">
  </p>
</div>

---
<details>
<summary><b>📑 Sumário</b></summary>

- [1. Projeto](#projeto)
- [2. Solução](#-solução)
- [3. Estrutura da Landing Page](#estrutura-da-landing-page)
- [4. Stack Tecnológica](#stack-tecnológica)
- [5. Arquitetura do Projeto](#arquitetura-do-projeto)
- [6. Equipe — Jasper.C](#equipe--jasper-c)
- [7. Como Executar o Projeto Localmente](#como-executar-o-projeto-localmente)
- [8. Acesso ao Projeto em andamento](#acesso-ao-projeto-em-andamento)

</details>

---
## Projeto

A SouJunior é uma comunidade voltada para profissionais em início de carreira na área de tecnologia, oferecendo mentorias gratuitas, projetos open-source e oportunidades de desenvolvimento profissional.

Mantida com o apoio e engajamento da própria comunidade, a SouJunior busca fortalecer sua sustentabilidade por meio do Apoia.se, permitindo que pessoas contribuam a partir de R$ 2,00 para ajudar na continuidade dessas iniciativas.

Neste Hackathon, nossa Squad recebeu o desafio de criar uma Landing Page criativa, moderna e persuasiva, capaz de transformar a jornada do visitante e incentivar novos apoiadores.

Atualmente, a campanha de arrecadação aparece no final de uma página institucional extensa, depois de conteúdos sobre a comunidade, áreas de atuação e depoimentos.

Isso gera dois principais problemas:

*  A página atual não foi estruturada com foco em conversão de apoiadores;
*  Não há uma comunicação clara sobre para onde os recursos arrecadados são direcionados.

Para quem está considerando apoiar, entender o impacto da contribuição e como os recursos são utilizados é fundamental para gerar confiança e incentivar o apoio.

---
## Solução

Criar uma **Landing Page exclusiva para o Apoia.se da SouJunior**, com uma experiência visual, moderna e envolvente que apresente a causa, evidencie seu impacto e mostre **com transparência como os recursos são utilizados**.

A página também contará com um **formulário de adesão**, facilitando o cadastro e o engajamento de novos apoiadores.

A proposta combina **storytelling, dados reais, prova social e CTAs estratégicos**, conduzindo o visitante de forma natural até o apoio e reforçando que **cada contribuição ajuda a manter iniciativas gratuitas para profissionais juniores.**

---
## Estrutura da Landing Page

| Seção | O que a página entrega (Objetivo / Conteúdo) |
| :--- | :--- |
| **Cabeçalho (Header / Navegação)** | Apresenta a identidade visual (logotipo) e o menu de acesso rápido para as principais seções da página, facilitando a navegação. |
| **Hero (Banner Principal)** | Entrega a proposta de valor logo no primeiro impacto visual, combinando um título chamativo, textos de apoio, elementos visuais e o botão de ação principal (CTA). |
| **Recursos / Benefícios** | Detalha as principais funcionalidades, vantagens ou diferenciais, organizados em blocos visuais com ícones para facilitar a leitura rápida. |
| **Prova Social / Depoimentos** | Transmite credibilidade e confiança ao exibir avaliações de usuários, depoimentos ou marcas parceiras que já utilizaram a solução. |
| **Formulário** | Permite a interação direta do usuário, coletando dados essenciais (como nome, e-mail e mensagens ou preferências) para conversão, inscrições ou envio de informações. |

## Stack Tecnológica

| Camada | Tecnologia | Propósito no Projeto |
| :--- | :--- | :--- |
| **Front-end** | HTML5 / CSS3 / JavaScript (Vanilla| Estrutura semântica, estilização modular e interatividade da landing page |
| **Versionamento** | Git & GitHub | Controle de versão, colaboração em equipe e salvamento de código |
| **Infraestrutura** | Netlify | Hospedagem de alta performance e deploy contínuo (CI/CD) |

## Arquitetura do Projeto
```text
soujunior-landing/
├── frontend/             # Interface visual da Landing Page
│   ├── index.html        # Página principal
│   ├── css/              # Estilos modulares (variables, global, components)
│   ├── js/               # Scripts divididos por responsabilidade (menu, doação, form)
│   └── assets/           # Imagens, banners e ícones do projeto
├── .gitignore
├── LICENSE
└── README.md
```
## 👥 Equipe — Jasper.C

| Nome da Participante | Papel na Squad | LinkedIn |
| :--- | :--- | :--- |
| **Anelise Paz Bittencourt** | QA e UI/UX | [Perfil LinkedIn](https://www.linkedin.com/in/abitten/) |
| **Sara França Trindade** | Front-end | [Perfil LinkedIn](https://www.linkedin.com/in/sara0333) |
| **Jade Moreira de Assis Rodrigues** | FullStack | [Perfil LinkedIn](https://www.linkedin.com/in/jade-rodrigues-/) |
| **Patricia Barbosa de Almeida** | PO | [Perfil LinkedIn](https://www.linkedin.com/in/patriciabalmeida/) |
| **Carolina Souza Ferraço** | PO | [Perfil LinkedIn](https://www.linkedin.com/in/carolina-ferra%C3%A7o/) |
| **Joice Ferreira Passos** | Mentora Geral | [Perfil LinkedIn](https://www.linkedin.com/in/joiceferreirapassos) |

---

## Como Executar o Projeto Localmente

### 1. Clonar o Repositório
Abra o seu terminal e clone o repositório do projeto:

```bash
git clone [https://github.com/soujunior-squad-jasperc/soujunior-landing-apoiase.git](https://github.com/soujunior-squad-jasperc/soujunior-landing-apoiase.git)
cd soujunior-landing-apoiase
```
### 2. Rodando o Front-end
Como o Front-end foi desenvolvido utilizando HTML, CSS e Vanilla JavaScript sem frameworks pesados, para rodar:

Abra a pasta do projeto no VS Code.

Instale a extensão Live Server.

Navegue até a pasta frontend/, clique com o botão direito no arquivo index.html e selecione "Open with Live Server". O site abrirá automaticamente no seu navegador.

🌐 Acesso ao Projeto em andamento
[Deploy no Netlify](https://soujunior-landingpage-apoiase.netlify.app/)






