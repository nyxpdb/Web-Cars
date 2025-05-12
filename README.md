# WebCars API - Backend

Este projeto implementa uma API de gerenciamento de carros, construída com **Node.js**, **Express** e **MongoDB**. Ele permite que você realize operações CRUD (Create, Read, Update, Delete) em carros, com os campos `nome`, `cor`, `modelo`, `ano` e `preco`.

## Tecnologias Utilizadas

* **Node.js**: Plataforma para construir o backend em JavaScript.
* **Express**: Framework minimalista e flexível para Node.js, usado para criar o servidor e as rotas da API.
* **MongoDB**: Banco de dados NoSQL usado para armazenar informações dos carros.
* **Mongoose**: ODM (Object Data Modeling) para trabalhar com MongoDB de forma mais simples.
* **dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.
* **Cors**: Para habilitar requisições de diferentes origens (CORS).
* **Body-parser**: Para parsear o corpo das requisições HTTP.

## Funcionalidades

A API permite as seguintes operações:

* **POST** `/api/cars/new`: Criação de um novo carro.
* **GET** `/api/cars`: Listar todos os carros cadastrados.
* **GET** `/api/cars/{id}`: Consultar detalhes de um carro específico pelo ID.
* **PUT** `/api/cars/edit/{id}`: Atualizar as informações de um carro específico pelo ID.
* **DELETE** `/api/cars/delete/{id}`: Excluir um carro pelo ID.

## Endpoints

### 1. **POST** `/api/cars/new`

Cria um novo carro com os dados fornecidos.

**Corpo da requisição (JSON):**

```json
{
  "nome": "BMW X6",
  "cor": "Azul",
  "modelo": "2020",
  "ano": 2010,
  "preco": 2500000
}
```

**Resposta (JSON):**

```json
{
  "success": true,
  "message": "Carro criado com sucesso!",
  "data": {
    "nome": "BMW X6",
    "cor": "Azul",
    "modelo": "2020",
    "ano": 2010,
    "preco": 2500000,
    "_id": "61c7d015f1b5f80d5f57f9f0"
  }
}
```

### 2. **GET** `/api/cars`

Lista todos os carros cadastrados.

**Resposta (JSON):**

```json
{
  "success": true,
  "message": "Carros encontrados com sucesso!",
  "data": [
    {
      "nome": "BMW X6",
      "cor": "Azul",
      "modelo": "2020",
      "ano": 2010,
      "preco": 2500000,
      "_id": "61c7d015f1b5f80d5f57f9f0"
    },
    {
      "nome": "Civic",
      "cor": "Preto",
      "modelo": "2018",
      "ano": 2018,
      "preco": 90000,
      "_id": "61c7d0a2f1b5f80d5f57f9f1"
    }
  ]
}
```

### 3. **GET** `/api/cars/{id}`

Consulta um carro específico pelo ID.

**Resposta (JSON):**

```json
{
  "success": true,
  "message": "Carro encontrado com sucesso!",
  "data": {
    "nome": "BMW X6",
    "cor": "Azul",
    "modelo": "2020",
    "ano": 2010,
    "preco": 2500000,
    "_id": "61c7d015f1b5f80d5f57f9f0"
  }
}
```

### 4. **PUT** `/api/cars/edit/{id}`

Atualiza as informações de um carro específico.

**Corpo da requisição (JSON):**

```json
{
  "nome": "BMW X6",
  "cor": "Preto",
  "modelo": "2021",
  "ano": 2021,
  "preco": 3000000
}
```

**Resposta (JSON):**

```json
{
  "success": true,
  "message": "Carro atualizado com sucesso!",
  "data": {
    "nome": "BMW X6",
    "cor": "Preto",
    "modelo": "2021",
    "ano": 2021,
    "preco": 3000000,
    "_id": "61c7d015f1b5f80d5f57f9f0"
  }
}
```

### 5. **DELETE** `/api/cars/delete/{id}`

Deleta um carro específico pelo ID.

**Resposta (JSON):**

```json
{
  "success": true,
  "message": "Carro deletado com sucesso!"
}
```

## Como Rodar o Projeto

### 1. Clonando o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/nyxpdb/Web-Cars
cd Web-Cars
```

### 2. Instalando Dependências

No diretório do projeto, instale as dependências necessárias:

```bash
npm install
```

### 3. Configurando as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do seu projeto e adicione as variáveis necessárias. Exemplo:

```
MONGO_URI=mongodb+srv://$MONGO_USERNAME:$MONGO_PASSWORD@$MONGO_CLUSTER/$MONGO_DB?retryWrites=true&w=majority&appName=Cluster0 quero isso aqui SEM 
```

### 4. Rodando o Servidor

Para rodar a aplicação localmente, use o comando:

```bash
npm start
```

O servidor será iniciado e ficará disponível em `http://localhost:3000`.

### 5. Testando a API

Você pode usar o **Postman** ou **CURL** para interagir com a API. Aqui está um exemplo de como você pode usar o cURL para testar o **POST** de um novo carro:

```bash
curl -X POST http://localhost:3000/api/cars/new -H "Content-Type: application/json" -d '{
  "nome": "BMW X6",
  "cor": "Azul",
  "modelo": "2020",
  "ano": 2010,
  "preco": 2500000
}'
```

## Considerações Finais

Esse projeto é uma API simples para cadastro e manipulação de informações de carros. Ela pode ser expandida e aprimorada de acordo com as necessidades do seu projeto, como a adição de autenticação de usuários, validações de entrada, entre outras melhorias.

---
