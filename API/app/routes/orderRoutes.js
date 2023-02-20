// Import modules
const express    = require('express');
const router     = express.Router();
const con        = require('../config/db_connection');
const controller = require('../controllers/userController');

// Get all users
router.get("/", controller.get);

// Register as new user
router.post("/", (req, res) => {
  try {
    con.query(
      `INSERT INTO users VALUES(default, '${req.body.username}', '${req.body.email}', '${req.body.password}')`,
      (err, result) => {
        if (err) throw err;
        res.send("Registered Successfully. Welcome to FairyTopia!");
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Get Specific user based on id
router.get("/:userId", (req, res) => {
  try {
    con.query(
      "SELECT * FROM users where userId =" + req.params.userId,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;