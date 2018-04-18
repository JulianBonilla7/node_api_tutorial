const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.listAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.checkUser, userController.getUser);
router.put('/users/:id', userController.checkUser, userController.updateUser);
router.delete('/users/:id', userController.checkUser, userController.deleteUser);

module.exports = router;
