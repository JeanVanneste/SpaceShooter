const logger = require('morgan');
const NeDB = require('nedb');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const http = require('http');

const scores = new NeDB({
    filename: path.join(__dirname, 'score.db'),
    autoload: true
});

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());

app.use('/scores', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log('SET CROSS ORIGIN');
    next();
});

app.get('/scores', (req, res) => {
    console.log('GET SCORES');
    scores.find({}).sort({score: -1}).exec(
        (err, docs) => {
            if(err) {
                console.log(err);
            }
            
            /*
            fs.writeFile('log/debug.log', docs, (err) => {
                if (err) console.log(err);
            });
            */

            res.send({
                scores: docs
            });
        });
});

app.options('/scores', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.send(200);
});

app.post('/scores', (req, res) => {
    if(req.body) {
        console.log(req.body);
        scores.insert({
            player: req.body.name,
            score: req.body.score,
            ts: Date.now()
        }, (err) => {
            if(err) {
                res.send({
                    ok: false,
                    error: err
                });
            }

            res.send({
                ok: true
            });
        });
    }
    else {
        res.send({
            ok: false,
            error: 'No Body Provided'
        });
    }
});

var httpServer = http.createServer(app);

const port = 3030;

httpServer.listen(port, () => {
    console.log(`HTTP Server listening on port ${port}`);
});