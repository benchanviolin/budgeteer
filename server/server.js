// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv').config();
const queryString = require('query-string');

const { ORIGIN_URL, MONGODB_URL, PORT } = process.env;

const corsOptions = {
  origin: ORIGIN_URL,
  allowedHeaders: ['Content-Type', 'Content-Range'],
  exposedHeaders: ['Content-Range']
}
// configure app
app.use(morgan('dev')); // log requests to the console
app.use(cors(corsOptions)); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = PORT;

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect(MONGODB_URL, { useMongoClient: true }); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

// Bear models lives here
var Bear     = require('./app/models/bear');

var dataModifier     = require('./app/utils/dataModifier.js');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')

	// create a bear (accessed at POST http://localhost:8080/bears)
	.post(function(req, res) {

		var bear = new Bear();		// create a new instance of the Bear model
		bear.name = req.body.name;  // set the bears name (comes from the request)

		bear.save(function(err, newBear) {
			if (err)
				res.send(err);
      newBear = dataModifier.remapId(newBear);
			res.json(newBear);
		});


	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);
      bears = dataModifier.remapIdsFromMongoDB(bears);
      const count = bears.length;
      res.set({ 'Content-Range': `bears 0-${count}/1` });
			res.json(bears);
		});
	});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

	// get the bear with that id
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
      bear = dataModifier.remapId(bear);
      res.json(bear);
		});
	})

	// update the bear with this id
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;
			bear.save(function(err, updatedBear) {
				if (err)
					res.send(err);
        updatedBear = dataModifier.remapId(updatedBear);
				res.json(updatedBear);
			});

		});
	})

	// delete the bear with this id
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
