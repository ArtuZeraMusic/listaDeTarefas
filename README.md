# Projeto Lista de Tarefas

Este projeto é uma aplicação completa de "Lista de Tarefas" (To-Do List) desenvolvida com um back-end em Java Spring Boot e um front-end em Angular. Ele foi criado com o objetivo de ser uma peça de portfólio didática e funcional para desenvolvedores júnior, demonstrando as melhores práticas de desenvolvimento full-stack.

## Funcionalidades

A aplicação permite as seguintes operações básicas sobre tarefas:

*   **Criar**: Adicionar novas tarefas à lista.
*   **Ler**: Visualizar todas as tarefas existentes.
*   **Deletar**: Remover tarefas da lista.

## Tecnologias Utilizadas

### Back-end (Java Spring Boot)

*   **Java 17**: Linguagem de programação.
*   **Spring Boot 3**: Framework para construção de aplicações Java robustas.
*   **Maven**: Gerenciador de dependências.
*   **H2 Database**: Banco de dados em memória para facilitar a execução sem instalações adicionais.
*   **RESTful API**: Para comunicação com o front-end.
*   **CORS (@CrossOrigin)**: Configurado para permitir acesso do front-end.

### Front-end (Angular)

*   **Angular (versão mais recente e estável)**: Framework para construção de interfaces de usuário.
*   **Angular CLI**: Ferramenta de linha de comando para auxiliar no desenvolvimento Angular.
*   **HttpClient**: Para comunicação com a API REST do back-end.
*   **FormsModule**: Para manipulação de formulários simples.
*   **CSS**: Estilização minimalista e funcional.

## Estrutura do Projeto

O projeto é organizado em duas subpastas principais:

```
/projeto-tarefas
|-- /backend
|   |-- pom.xml
|   `-- /src
|       `-- /main
|           |-- /java/com/exemplo/tarefas
|           |   |-- controller/TarefaController.java
|           |   |-- model/Tarefa.java
|           |   |-- repository/TarefaRepository.java
|           |   `-- TarefasApplication.java
|           `-- /resources
|               `-- application.properties
|-- /frontend
|   `-- /cliente
|       |-- /src
|       |   |-- /app
|       |   |   |-- app.component.css
|       |   |   |-- app.component.html
|       |   |   |-- app.component.ts
|       |   |   `-- app.module.ts
|       |   `-- /styles.css
|       `-- angular.json
`-- README.md
```

## Como Executar o Projeto

Siga os passos abaixo para clonar o repositório, instalar as dependências e executar o back-end e o front-end.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

*   **Java Development Kit (JDK) 17** ou superior.
*   **Maven** (gerenciador de dependências do Java).
*   **Node.js** (versão LTS recomendada).
*   **npm** (gerenciador de pacotes do Node.js, geralmente vem com o Node.js).
*   **Angular CLI**: Instale globalmente com `npm install -g @angular/cli`.

### 1. Clonar o Repositório

Abra seu terminal ou prompt de comando e execute o seguinte comando:

```bash
git clone <URL_DO_REPOSITORIO>
cd projeto-tarefas
```

### 2. Executar o Back-end (Spring Boot)

Navegue até a pasta `backend` no seu terminal:

```bash
cd backend
```

Compile e execute a aplicação Spring Boot. O H2 Database será inicializado em memória e a API estará disponível na porta 8080.

```bash
mvn spring-boot:run
```

Você verá logs indicando que a aplicação Spring Boot foi iniciada com sucesso.

### 3. Executar o Front-end (Angular)

Abra um **novo terminal** ou prompt de comando. Navegue até a pasta `frontend/cliente`:

```bash
cd ../frontend/cliente
```

Instale as dependências do Angular:

```bash
npm install
```

Inicie a aplicação Angular. Ela será executada na porta 4200.

```bash
ng serve --open
```

O comando `--open` abrirá automaticamente seu navegador padrão na URL `http://localhost:4200`, onde você poderá interagir com a aplicação "Lista de Tarefas".

## Comandos para Publicação no GitHub

Para publicar este projeto em um novo repositório no GitHub (assumindo que você já criou um repositório vazio no site do GitHub e copiou a URL do repositório remoto):

```bash
# Certifique-se de estar na pasta raiz do projeto (projeto-tarefas)
cd /caminho/para/projeto-tarefas

git init
git add .
git commit -m "Initial commit: Projeto Lista de Tarefas"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO_GITHUB>
git push -u origin main
```

Substitua `<URL_DO_SEU_REPOSITORIO_GITHUB>` pela URL real do seu repositório no GitHub (ex: `https://github.com/seu-usuario/projeto-tarefas.git`).

ArtuZera Music!


