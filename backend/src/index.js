const express = require('express');
const routes = require('./routes');

const app = express();

/*
    Rota/Recurso

    Métodos HTTP:

    GET: Buscar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação do back-end
    DELETE: Deletar uma informação no back-end


    Tipos de parâmetros:

    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request body: Corpo da requisição, utilizado para criar ou alterar

*/
//Informando para todas as rotas que irão receber um arquivo json
app.use(express.json());
app.use(routes);
app.listen(3333);