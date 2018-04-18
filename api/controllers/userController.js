'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const errorHandlers = require('../handlers/errorHandlers');

exports.listAllUsers = (req, res) => {
  User
    .find({})
    .then(data => res.status(200).json(data))
    .catch(err => errorHandlers.serverError(err, req, res));
  // User.find({}, function(err, data) {
  //   if (err)
  //     res.send(err);
  //   res.json(data);
  // });
};

exports.createUser = (req, res) => {
  var user = new User(req.body);
  user
    .save()
    .then(data => res.status(201).json(data))
    .catch(err => errorHandlers.serverError(err, req, res));
  // user.save(function(err, data) {
  //   if (err)
  //     res.send(err);
  //   res.json(data);
  // });
};


exports.getUser = (req, res) => {
  res.json(req.user);
  // User.findById(req.params.id, function(err, data) {
  //   if (err)
  //     res.send(err);
  //   res.json(data);
  // });
};


exports.updateUser = function(req, res) {
  req.user
    .update(req.body)
    .then(data => res.status(201).json(req.user))
    .catch(err => errorHandlers.serverError(err, req, res));
  // User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
  //   if (err)
  //     res.send(err);
  //   res.json(data);
  // });
};


exports.deleteUser = (req, res) => {
  req.user
    .remove()
    .then(data => res.status(204).json(data))
    .catch(err => errorHandlers.serverError(err, req, res));
  // User.remove({
  //   _id: req.params.id
  // }, function(err, data) {
  //   if (err)
  //     res.send(err);
  //   res.json({ message: 'User successfully deleted' });
  // });
};

exports.checkUser = (req, res, next) => {
  User
    .findById({_id: req.params.id})
    .then(user => {
      if (!user) {
        return res.status(404).json({
          errors: ['User not found']
        });
      } else {
        req.user = user;
        next();
      }
    })
    .catch(err => errorHandlers.serverError(err, req, res));
}