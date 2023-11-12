const express = require('express');
const path = require('path');

const mainController = require('./controllers/mainController');

const app = express();
global.__basedir = path.dirname(__dirname);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get('/', mainController);

app.all('*', (req, res, next) => {
  res.status(404).redirect('/');
});

module.exports = app;
