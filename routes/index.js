const express = require('express');
const router = express.Router();

// importing homeController in controllers folder
const homeController = require('../controllers/homeController');

// calling homeController method on matching the path
router.get('/', homeController.home);

module.exports = router;
