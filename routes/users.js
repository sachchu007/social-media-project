const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_conroller');

router.get('/profile',usersController.profile);




module.exports = router;