const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwer1234',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
