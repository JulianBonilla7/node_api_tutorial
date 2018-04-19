const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/users', catchErrors(userController.listAllUsers));
router.post('/users', catchErrors(userController.createUser));
router.get('/users/:id', catchErrors(userController.getUser));
router.put('/users/:id', catchErrors(userController.updateUser));
router.delete('/users/:id', catchErrors(userController.deleteUser));

module.exports = router;
