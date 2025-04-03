const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(cors());
app.use(express.json());

// Luo taulu jos ei ole vielä olemassa
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)');

// Lisää käyttäjä
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, email });
  });
});

// Hae kaikki käyttäjät
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Käynnistä palvelin
app.listen(3001, () => {
  console.log('Backend running at http://localhost:3001');
});
