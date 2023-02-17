const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.user,
  password : process.env.PASS,
  database : process.env.DB,
  multipleStatements: true,
})

module.exports = connection