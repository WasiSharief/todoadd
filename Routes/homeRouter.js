const express = require('express');
const home_controller = require('../Controllers/home_controller');
const router = express.Router();
const homeController = require('../Controllers/home_controller');

router.get('/',home_controller.home);

module.exports = router;