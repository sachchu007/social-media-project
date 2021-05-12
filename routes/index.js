const express = require('express');

const router= express.Router();
const homeController = require('../controllers/homecontroller');

console.log('everything is fine');

router.get('/',homeController.home);

module.exports = router;