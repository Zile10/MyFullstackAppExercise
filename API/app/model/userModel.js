const {hash, compare, hashSync} = require('bcrypt');

function get() {
  try {
    con.query("SELECT * FROM users", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

async function createUser(req, res) {
  try {
    con.query(`INSERT INTO users VALUES(DEFAULT, ${req.body.username}, ${req.body.email}, ${req.body.password}, DEFAULT`, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
}