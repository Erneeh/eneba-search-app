const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./games.db");

db.serialize(() => {
     
});

module.exports = db;



