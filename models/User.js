'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  address: String,
  city: String,
  state: String,
  country: String,
  phone: String,
  area_code: String,
  birthdate: Date
});

module.exports = mongoose.model('User', userSchema);