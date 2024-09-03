const express = require('express');
const userRouter = express.Router();
//require all userControllers
const {registerUser,loginUser} = require('../controllers/userController');

// POST method to register a user
//move async function to controller folder
userRouter.post('/register', registerUser);

// POST method to login a user
userRouter.post('/login', loginUser);

module.exports = userRouter;