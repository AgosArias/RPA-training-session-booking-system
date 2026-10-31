const express = require('express');
const connectToDatabase = require('../config/database');

const trainingSession = require('../models/trainingSession');

const trainingSessionRouter = express.Router();

trainingSessionRouter.route('/')
.get((req,res,next) => {
    connectToDatabase()
        .then(() => trainingSession.find())
        .then((trainingSessionfound) => {
            res.render('currentorder', {
                trainingSessionList: trainingSessionfound,
                title: 'All Training Sessions'
            });
        })
        .catch((err) => next(err));
})
.post((req, res, next) => {
})
.put((req, res, next) => {
})
.delete((req, res, next) => {
});


trainingSessionRouter.route('/create')
.get((req,res,next) => {
    res.render('newtrainingSession.ejs', { title: 'RPA Training Sessions' });   
})

.post((req, res, next) => {
    connectToDatabase()
        .then(() => trainingSession.create(req.body))
        .then(() => trainingSession.find())
        .then((trainingSessionfound) => {
            res.render('currentorder', {
                trainingSessionList: trainingSessionfound,
                title: 'All Training Sessions'
            });
        })
        .catch((err) => next(err));
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /trainingSession/create');
})

.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not  supported on /trainingSession/create');
    
});


module.exports = trainingSessionRouter;