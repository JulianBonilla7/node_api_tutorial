const mongoose = require('mongoose');

// import environmental variables from our .env file
require('dotenv').config({ path: '.env' });

const port = process.env.PORT || 3000;

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(err.message});
});

// Import all models
const Task = require('./api/models/User');

// Start our app!
const app = require('./app');
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});