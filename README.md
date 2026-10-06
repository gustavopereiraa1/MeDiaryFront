# Mediary

## Diário de Sintomas

O **Mediary** é uma aplicação web desenvolvida em React com o objetivo de auxiliar usuários no registro e na organização de informações relacionadas aos seus sintomas.

A proposta é oferecer uma interface simples e organizada, permitindo que o usuário registre informações sobre sintomas e visualize seus registros de forma centralizada.

---

## Problema

Informações relacionadas a sintomas podem ficar dispersas ou serem difíceis de organizar e acompanhar ao longo do tempo.

O Mediary busca solucionar esse problema oferecendo um espaço onde o usuário possa registrar e visualizar suas informações de maneira organizada.

---

## Público-alvo

O sistema é destinado a pessoas que desejam registrar e acompanhar seus próprios sintomas de forma simples e organizada.

---

## Objetivo

Desenvolver uma aplicação web que facilite o registro e a visualização de sintomas, utilizando uma interface intuitiva e organizada.

Na Sprint 1, o foco foi a estrutura inicial da aplicação (componentes, estados, eventos e múltiplas páginas). Na Sprint 2, o foco é o formulário controlado e a persistência dos registros com `localStorage`.

---

## Funcionalidades da Sprint 1

Nesta versão inicial, o Mediary possui:

- Página inicial com apresentação do sistema;
- Página de sintomas;
- Cadastro de novos sintomas;
- Informações de intensidade, horário e descrição do sintoma;
- Exibição dinâmica dos sintomas cadastrados;
- Página com informações sobre o projeto;
- Navegação entre diferentes páginas;
- Componentização da aplicação;
- Utilização de estados com `useState`;
- Utilização de eventos com `onClick`;
- Utilização de props entre componentes.

---

## Funcionalidades da Sprint 2

- Formulário controlado com `useState` (sintoma, intensidade, horário e descrição);
- Formulário separado no componente `SymptomForm.jsx`;
- Validação simples: campos obrigatórios e remoção de espaços extras (`trim`);
- Persistência dos sintomas com `localStorage`: os registros continuam na tela após recarregar a página (F5) ou trocar de página;
- Hook customizado `useLocalStorage` (`src/hooks/useLocalStorage.js`), que funciona como um `useState` que lê e grava no navegador;
- Atualização funcional do estado ao cadastrar (`setSintomas(anteriores => [...anteriores, novo])`).

### Onde os dados ficam salvos

Os sintomas ficam no navegador, na chave `sintomas` do `localStorage`. Para visualizar: **F12 → Application (Chrome) ou Armazenamento (Firefox) → Local Storage → `http://localhost:5173`**.

---

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS
- Git
- GitHub

---

## Como executar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/gustavopereiraa1/MeDiaryFront.git
cd MeDiaryFront
npm install
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

---

## Estrutura do projeto

```text
MeDiaryFront/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Menu de navegação
│   │   ├── SymptomCard.jsx    # Card que exibe um sintoma
│   │   └── SymptomForm.jsx    # Formulário controlado de cadastro
│   ├── hooks/
│   │   └── useLocalStorage.js # Hook de persistência no localStorage
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Sintomas.jsx       # Lista + cadastro de sintomas
│   │   └── Sobre.jsx
│   ├── App.jsx                # Controle da página atual
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```
