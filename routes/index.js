const express = require('express');
const router = express.Router();

// importing homeController in controllers folder
const homeController = require('../controllers/homeController');

// calling homeController method on matching the path
router.get('/', homeController.home);
// to save todo
router.post('/todo', homeController.todo);

// to delete 
router.post('/deleteTodos', homeController.deleteTodos);

// router.post('/saveTask', homeController.saveTask);

module.exports = router;
