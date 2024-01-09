# Frontend

>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

<br>

Este projeto foi desenvolvido com angular 17 com o intuito de aprimorar meus conhecimentos no framework.

## Tech Stack
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<br>

## Desktop

![image](https://github.com/marcosprofile/crud-angular-v17/assets/86635292/5b08af5a-b3f9-4630-bd03-34450a72deea)

<br>
<br>

## 🎲 Rodando o Projeto

### Backend

```bash
# Crie uma pasta principal
$ será necessário para armazenar o backend e o frontend

# Crie a pasta do backend
$ dentro da pasta principal, crie uma nova pasta chamada backend

# Acesse a pasta backend no terminal/cmd
$ cd <nome-da-pasta-principal>/backend

# Crie o arquivo package.json
$ npm init -y

# Instale o json-server
$ npm i json-server

# Acesse a pasta do projeto no terminal/cmd
$ cd <nome-da-pasta>

# Abra no VSCode
$ code .

# Crie um banco de dados simples db.json
$ { "products": [] }

# Altere a porta de execução do banco de dados no arquivo package.json
$ "scripts": {
    "start": "json-server --watch db.json --port 3001"
  }

# O servidor inciará o backend na porta:3001 - acesse <http://localhost:3001>
```
<br>

### Frontend
```bash
# Clone este repositório
$ git clone <https://github.com/marcosprofile/crud-angular-v17.git>

# Adicione a pasta do projeto clonado dentro da pasta principal
$ para padronizar, nomeie a pasta do projeto clonado para /frontend/.
$ Este passo é necessário para conectar o frontend com o backend

# Acesse a pasta do projeto no terminal/cmd
$ cd <nome-da-pasta-principal>

# Abra no VSCode
$ code .

# Acesse a pasta frontend no terminal do VSCode
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ ng s

# O servidor inciará na porta:4200 - acesse <http://localhost:4200>
```
<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.
