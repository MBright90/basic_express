const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home_get);

router.get('/about', homeController.about_get);

router.get('/contact', homeController.contact_get);

module.exports = router;
