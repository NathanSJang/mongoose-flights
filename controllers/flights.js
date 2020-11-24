const Flights = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlights,
  create,
  show,
  delete: deleteFlight,
}

function index(req, res) {
  Flights.find({}).sort({departs: 1}).exec(function(err, flights) {
    res.render('flights/index', { title: 'All Flights',  flights });
  });
}

function newFlights(req, res) {
  const newFlight = new Flights();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', { title: 'Add Flights', departsDate });
}

function create(req, res) {
  const flight = new Flights(req.body);
  flight.save(function(err) {
    if(err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  })
}

function show(req, res) {
  Flights.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      console.log(tickets);
      res.render('flights/show', { title: 'Flight Detail', flight, tickets });
    })
  })
}

function deleteFlight(req, res) {
  Flights.findByIdAndDelete(req.params.id, function(err, deletedFlight) {
    res.redirect('/flights');
  })
}