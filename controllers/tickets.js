const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
}

function newTicket(req, res) {
    res.render('tickets/new', {
      title: 'New Ticket',
      id: req.params.id,
    });
};

function create(req, res) {
  req.body.flight = req.params.id;
  console.log(req.body);
  Ticket.create(req.body, function(err) {
    res.redirect(`/flights/${req.params.id}`);
  });
};