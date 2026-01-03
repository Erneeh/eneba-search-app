const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./games.db");

db.serialize(() => {
     db.run(`
    CREATE TABLE games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  price REAL NOT NULL,
  discount INTEGER DEFAULT 0,
  platform TEXT NOT NULL,
  region TEXT NOT NULL,
  image_url TEXT NOT NULL,
  likes INTEGER DEFAULT 0
    );
 `);

});

module.exports = db;

