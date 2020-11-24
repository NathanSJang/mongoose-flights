const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

//new page
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
// router.post('/flights/:id/tickets', ticketsCtrl.addTicket);

module.exports = router;