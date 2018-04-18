'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: 'Please enter a name'
  },
  last_name: {
    type: String,
    required: 'Please enter a last name'
  },
  address: String,
  city: String,
  state: String,
  country: String,
  phone: String,
  area_code: String,
  birthdate: Date
});

module.exports = mongoose.model('User', userSchema);