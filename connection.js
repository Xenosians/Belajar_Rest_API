var mysql = require('mysql');

// Connection to database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbrestapi'
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected Sucsessfuly");
});

module.exports = conn;