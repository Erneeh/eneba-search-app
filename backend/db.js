const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./games.db");

db.serialize(() => {
  
});

module.exports = db;

//to seed

// db.run(`
//     INSERT INTO games (
//       title, price, discount, platform, region, image_url, likes
//     ) VALUES (
//       'FIFA 23',
//       45,
//       0,
//       'playstation',
//       'europe',
//       'https://imgproxy.eneba.games/XtwW9-cabFJ7OCJwqXhqtDPamOPOF5fF4aK_odWjB3s/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy8z/U29yOWt3eExGZDVL/Nmx5QWJ0RGVmd2tG/MmRPbnBkRVd3bWJY/UGxhMEhnLmpwZw',
//       2340
//     );
//   `);

//   db.run(`
//     INSERT INTO games (
//       title, price, discount, platform, region, image_url, likes
//     ) VALUES (
//       'Red Dead Redemption 2',
//       60,
//       0,
//       'steam',
//       'global',
//       'https://imgproxy.eneba.games/iuhaURlEpTDYsM1X6uEI6o9dZahoID4JnAx1kyj-v9U/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/OEZLcDZuM2xvRUot/RXY0aHM1RXRDREJ0/QTR5VkZKVEdFdHRp/bTBob3cwLmpwZWc',
//       4520
//     );
//   `);

//   db.run(`
//     INSERT INTO games (
//       title, price, discount, platform, region, image_url, likes
//     ) VALUES (
//       'Split Fiction',
//       35,
//       0,
//       'xbox',
//       'asia',
//       'https://imgproxy.eneba.games/gzjBe4m8P8-w1I37Drd8icqKBCzbOK9vmaBtwzBPFxA/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/cHNhQjAwRmRUOHJK/dW9uVGhGXzN5dksz/cjBuUWhDY0IwX2lB/VDh4Q25NLmpwZw',
//       890
//     );
//   `);



//to create


//   "CREATE TABLE games (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   title TEXT NOT NULL,
//   price REAL NOT NULL,
//   discount INTEGER DEFAULT 0,
//   platform TEXT NOT NULL,
//   region TEXT NOT NULL,
//   image_url TEXT NOT NULL,
//   likes INTEGER DEFAULT 0
// );"