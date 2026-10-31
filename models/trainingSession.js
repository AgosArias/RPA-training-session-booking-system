const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var trainingSessionSchema = new Schema(
{
    trainingTopic: {
		type: String,
		required: true,
    },
    personName: {
		type: String,
		required: true,
    },
    personId: {
		type: String,
		required: true,
    },
    sessionDate: {
		type: Date,
		required: true,
    },
    cardNumber: {
		type: String,
		required: true,
    },
    cardExpiry: {
		type: String,
		required: true,
    },
    securityCode: {
		type: String,
		required: true,
    },
},
{
    timestamps: true,
},
);
var trainingSessions = mongoose.model("TrainingSession", trainingSessionSchema);

module.exports = trainingSessions;
