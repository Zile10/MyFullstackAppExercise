const express = require('express');
const model   = require('../')
const con     = require('../config/db_connection');

function get(req, res) {
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

module.exports = {
  get,
}