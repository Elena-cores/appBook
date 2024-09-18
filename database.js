const mysql = require("mariadb");

const pool1 = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
});

onst pool2 = mysql.createPool({
    host: "localhost",
    database: "sprint",
    user: "root",
    password: "root",
  });
