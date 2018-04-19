'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const errorHandlers = require('../handlers/errorHandlers');

const listAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const user = await (new User(req.body)).save();
  res.status(201).json(user);
};


const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send({ message: 'User with given id not found' });
  }
  res.status(200).json(user);
};


const updateUser = async (req, res) => {
  const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
  if (!user) {
    return res.status(404).send({ message: 'User with given id not found' });
  }
  res.status(201).json(user);
};


const deleteUser = async (req, res) => {
  const user = await User.findOneAndRemove({ _id: req.params.id });
  if (!user) {
    return res.status(404).send({ message: 'User with given id not found' });
  }
  res.status(204).json(user);
};

module.exports = {
  listAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
};
