const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create);
// router.get('/flights/news', destinationsCtrl.new);

module.exports = router;

