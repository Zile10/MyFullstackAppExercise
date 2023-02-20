// Import modules
const express = require('express');
const router  = express.Router();
const con     = require('../config/db_connection');

router.get('/', (req, res) => {
  try {
    con.query('SELECT * FROM users', (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
})

router.post('/', (req, res) => {
  try {
    con.query(`INSERT INTO users VALUES(DEFAULT, ${req.body.username}, ${req.body.email}, ${req.body.password}, DEFAULT`, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
})

router.get('/:userId', (req, res) => {
  try {
    con.query('SELECT * FROM users WHERE userId = ?', [req.params.userId], (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
})

module.exports = router;