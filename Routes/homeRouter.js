// including server and controller modules 
const express = require('express');
const home_controller = require('../Controllers/home_controller');
const router = express.Router();
const homeController = require('../Controllers/home_controller');
const app = express();
app.use(express.urlencoded());

// router for home page
router.get('/',home_controller.home);

// adding tasks to databse router
router.get('/add',home_controller.addtask);

// removing task from list and database 
router.get('/remove/',home_controller.removetask);

// this router sends the list id to delete it with help of other router
router.get('/send',home_controller.sendnumber);

// this makes the module available for exports in index.js
module.exports = router;