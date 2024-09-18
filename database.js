const mysql = require("mariadb");

const pool1 = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
});
