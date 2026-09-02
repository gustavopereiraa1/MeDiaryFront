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

Nesta primeira Sprint, o foco está na construção da estrutura inicial da aplicação utilizando React, componentes, estados, eventos e múltiplas páginas.

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

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS
- Git
- GitHub

---

## Estrutura do projeto

```text
MeDiaryFront/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── SymptomCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Sintomas.jsx
│   │   └── Sobre.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md