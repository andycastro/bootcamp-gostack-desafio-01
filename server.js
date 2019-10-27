const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/challengeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001);