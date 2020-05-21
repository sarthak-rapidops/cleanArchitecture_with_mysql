const config = require('../config/dbconfig')
const mysql = require('mysql2')

const con = mysql.createConnection({
    host: config.config.host,
    user: config.config.user,
    password: config.config.password,
    database: config.config.dbname
})

const makeBooksDb = require('./books-db')
const BookDB = makeBooksDb({con})

module.exports = BookDB;