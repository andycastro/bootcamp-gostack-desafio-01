const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/challengeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir('./src/models');

const Project = mongoose.model('Project')

app.get('/', (req, res) => {
  Project.create({ 
    id: '1',
    title: 'Project I',
    tasks: 'Primeira Task'
   }); 
  
  return res.send('Running...');
});

app.listen(3001);