const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.listen(3001);
app.get('/', (req, res) => {
  console.log('Running...');
});