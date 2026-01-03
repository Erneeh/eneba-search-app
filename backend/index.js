const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/list", (req, res) => {
  const search = req.query.search;

  let query = "SELECT * FROM games";
  let params = [];

  if (search) {
    query += " WHERE title LIKE ?";
    params.push(`%${search}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});