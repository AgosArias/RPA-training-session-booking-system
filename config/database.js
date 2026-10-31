var mongoose = require('mongoose');
require('dotenv').config();
let connectionPromise;

function connectToDatabase()
{
	const connect = mongoose.connect(process.env.MONGODB_URI, {dbName: 'rpaTraining'});
	
	connectionPromise = connect.then((db) => {
		console.log("Connected correctly to server");
	}, (err) => {     
				connectionPromise = null;
				console.log(err); });
	
	return connectionPromise;
}


module.exports = connectToDatabase;