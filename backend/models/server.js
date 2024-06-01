const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: 'User registered successfully' });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
