import mysql from "mysql2"

export const db = mysql.createConnection({
  host: process.env.host || "localhost",
  user: process.env.user || "root",
  password: process.env.password || "333@abhayabhay",
  database: process.env.database || "blog"
})
// const q = "SELECT * FROM users WHERE email = 'aaa' OR username = 'aaa'";
// db.query(q, (err, data) => {
//   if (err) {
//     console.log(err);
//     return err;
//   }
//   console.log(data);
//   return data;
// });