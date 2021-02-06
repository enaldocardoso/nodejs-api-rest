 const mysql = require('mysql')

 var pool = mysql.createConnection({
     host: 'localhost',
     port: 3307,
     user: 'root',
     password: 'admin',
     database: 'agenda-petshop'

 });

module.exports = conexao