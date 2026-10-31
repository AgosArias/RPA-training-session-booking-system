var mongoose = require('mongoose');
let connectionPromise;

function connectToDatabase()
{
	const url = 'mongodb://localhost:27017/rpaTraining';
	const connect = mongoose.connect(url);
	
	connectionPromise = connect.then((db) => {
		console.log("Connected correctly to server");
	}, (err) => { console.log(err); });
	
	return connectionPromise;
}


module.exports = connectToDatabase;