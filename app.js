const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

// Error middlewares
app.use(errorHandlers.notFound);
app.use(errorHandlers.getErrors);

// done! we export it so we can start the site in index.js
module.exports = app;
