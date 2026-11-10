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

Na Sprint 1, o foco foi a estrutura inicial da aplicação (componentes, estados, eventos e múltiplas páginas). Na Sprint 2, o foco foi o CRUD completo dos sintomas, com formulário controlado e persistência no `localStorage`. Na **Sprint 3**, o `localStorage` foi substituído pela **API RESTful do back-end** (Flask + PostgreSQL): o CRUD, o login e o cadastro passam a acontecer no servidor.

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

- CRUD completo de sintomas: **cadastrar**, **listar**, **editar** e **excluir**;
- Formulário controlado com `useState` (sintoma, intensidade, horário e descrição);
- Formulário separado no componente `SymptomForm.jsx`, reutilizado para cadastro e edição (abre preenchido ao editar);
- Botões **Editar** e **Excluir** em cada card, com confirmação antes de excluir;
- Validação simples: campos obrigatórios e remoção de espaços extras (`trim`);
- Persistência dos sintomas com `localStorage`: os registros continuam na tela após recarregar a página (F5) ou trocar de página;
- Hook customizado `useLocalStorage` (removido na Sprint 3), que funcionava como um `useState` que lê e grava no navegador;
- Atualizações imutáveis com a forma funcional do estado: cadastrar com spread (`[...anteriores, novo]`), editar com `map` e excluir com `filter`.

> Na Sprint 3, os dados deixaram de ficar no `localStorage` e passaram a ser salvos no banco PostgreSQL por meio da API.

---

## Funcionalidades da Sprint 3

- **Integração com a API RESTful do back-end** (Flask + PostgreSQL) usando **axios**;
- **CRUD completo pela API**:

| Operação | Método e rota | Onde no front |
|---|---|---|
| Create | `POST /api/sintomas` | `criarSintoma()` |
| Read | `GET /api/sintomas/mes/<ano>/<mes>` | `listarSintomasDoMes()` |
| Update | `PUT /api/sintomas/<id>` | `atualizarSintoma()` |
| Delete | `DELETE /api/sintomas/<id>` | `excluirSintoma()` |

- **Login e cadastro de usuário** (`POST /api/login`, `POST /api/cadastro`, `GET /api/me`, `GET /api/logout`): cada usuário vê apenas os próprios sintomas;
- **Mensagens de erro na tela** quando a API falha: servidor fora do ar, demora para responder, erro interno ou erro de validação (ex.: "A data de término não pode ser futura"), com botão **Tentar novamente**;
- **Indicadores de carregamento** ("Buscando seus sintomas...", "Salvando...", "Excluindo...") e botões desabilitados durante as requisições;
- **Navegação por mês** na lista de sintomas;
- Formulário atualizado para o modelo do banco: tipo do sintoma, local da dor (quando o tipo é Dor), início, término (opcional) e descrição;
- Se a sessão expirar (resposta 401), o usuário volta para a tela de login.

### Organização do código

- **`src/services/`**: chamadas à API separadas dos componentes visuais (`api.js` configura o axios e traduz os erros, `authService.js` e `sintomasService.js` contêm as requisições);
- **`src/contexts/` + `useAuth`**: o usuário logado fica num Context, evitando passar props por vários níveis (*prop drilling*);
- **`useSintomas`**: hook que concentra o estado da lista (dados, carregamento e erro) e as operações do CRUD, deixando a página `Sintomas.jsx` responsável apenas pela interface;
- **Proxy do Vite**: em desenvolvimento, `/api` é encaminhado para `http://127.0.0.1:5000`, então front e API ficam na mesma origem e o cookie de sessão funciona sem configuração extra.

---

## Tecnologias utilizadas

- React
- Vite
- Axios
- JavaScript
- HTML
- CSS
- Git
- GitHub
- Back-end: Python (Flask) + PostgreSQL

---

## Como executar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado e a **API do back-end do MeDiary rodando** em `http://127.0.0.1:5000`.

### 1. Back-end (API)

Na pasta `backend` do projeto da API (Flask + PostgreSQL):

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Teste em `http://127.0.0.1:5000/api/health`: a resposta deve ser `{"status": "ok"}`.

### 2. Front-end (este repositório)

```bash
git clone https://github.com/gustavopereiraa1/MeDiaryFront.git
cd MeDiaryFront
npm install
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`), crie uma conta e registre seus sintomas.

Para usar uma API em outro endereço, copie `.env.example` para `.env` e preencha `VITE_API_URL`.

> Se a API não estiver rodando, o app continua abrindo e mostra a mensagem *"Não foi possível conectar ao servidor"*.

---

## Estrutura do projeto

```text
MeDiaryFront/
├── public/
├── src/
│   ├── components/
│   │   ├── CadastroForm.jsx     # Formulário de criação de conta
│   │   ├── Carregando.jsx       # Indicador de carregamento
│   │   ├── LoginForm.jsx        # Formulário de login
│   │   ├── MensagemErro.jsx     # Mensagem de erro (com "Tentar novamente")
│   │   ├── Navbar.jsx           # Menu de navegação + usuário logado
│   │   ├── SeletorMes.jsx       # Navegação entre meses
│   │   ├── SymptomCard.jsx      # Card de um sintoma, com Editar/Excluir
│   │   └── SymptomForm.jsx      # Formulário controlado (cadastro e edição)
│   ├── constants/
│   │   └── sintomas.js          # Tipos e subtipos aceitos pela API
│   ├── contexts/
│   │   ├── AuthContext.js       # Context do usuário logado
│   │   └── AuthProvider.jsx     # Sessão: entrar, sair, verificar login
│   ├── hooks/
│   │   ├── useAuth.js           # Acesso ao usuário logado
│   │   └── useSintomas.js       # Estado da lista + operações do CRUD
│   ├── pages/
│   │   ├── Entrar.jsx           # Login e cadastro
│   │   ├── Home.jsx
│   │   ├── Sintomas.jsx         # CRUD de sintomas (lista e formulário)
│   │   └── Sobre.jsx
│   ├── services/
│   │   ├── api.js               # Instância do axios e tratamento de erros
│   │   ├── authService.js       # Rotas de login/cadastro
│   │   └── sintomasService.js   # Rotas do CRUD de sintomas
│   ├── utils/
│   │   └── datas.js             # Conversão de datas entre API e formulário
│   ├── App.jsx                  # Controle da página atual
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── vite.config.js               # Proxy /api -> back-end
└── README.md
```
