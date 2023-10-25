<h1 align="center"> 
	Desafio Online - Generation Brazil
</h1>

<p align="center">
	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen">
</p>

## 💻 Sobre o projeto

📄 A proposta do desafio online de programação na prática para curso "Desenvolvedor/a Web Cloud - AWS re/Start" da Generation Brazil em parceria com o Potência Tech (Ifood) é criar uma API REST para armazenar dados dos alunos de uma escola.

---
## Link da Documentação via Swagger
[Documentação](https://charming-elk-smock.cyclic.cloud/documento)

---
## ⚙️ Funcionalidades

<ul>
<li>Cadastrar usuário;</li>
<li>Fazer login;</li>
<li>Detalhar o perfil do usuário logado; </li>
<li>Atualizar o perfil do usuário logado;</li>
<li>Listar todos os alunos cadastrados;</li>
<li>Cadastrar novo aluno;</li>
<li>Detalhar aluno;</li>
<li>Atualizar os dados do aluno;</li>
<li>Excluir o cadastro do aluno;</li>
</ul>

---

## 🛣️ Como executar o projeto

### Pré-requisitos

Antes de começar, precisa intalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é recomendado ter um editor para trabalhar com o código, como o [Visual Studio Code](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:JulianaT93/generation-brazil.git

# Acesse a pasta do projeto no terminal/cmd
$ cd generation-brazil

# Instale as dependências
$ npm install express pg bcrypt jsonwebtoken dotenv knex joi swagger-ui-express

$ npm install -D nodemon

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta: 3000 em seu local - Utilize http://localhost:3000

# Poderá acessar também via link do deploy - Utilize https://charming-elk-smock.cyclic.cloud/
 

```
---
