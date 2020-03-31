const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json());
app.use(routes)
app.use(errors())

module.exports = app

/**
* Rota / Recurso
*/

/**
* Metodos HTTP:
*
* GET:   Buscar informacao do back-end
* POST:  Criar informacao no back-end
* PUT:   Alterar informacao no back-end
* DELETE:Deletar informacao no back-end
*/

/**
* Tipos de Parametos:
*
* Querry Params: Parametros nomeados eviados na rota apos ?
*   Usados em filtros e paginação
* Route Params: Parametros utilizados pra identifcar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar
*/

/**
* Tipos de banco de dados:
*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
