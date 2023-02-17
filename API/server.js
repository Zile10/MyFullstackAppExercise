const express = require('express');
const cors    = require('cors');
const app     = express();

app.set('port', process.env.PORT || 6969);
app.set(express.json());
app.set(cors());

const router = require('./app/routes/router')