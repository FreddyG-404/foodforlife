const mysql = require('mysql');
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database'
};

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
