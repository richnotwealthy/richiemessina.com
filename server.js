const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const request = require('request');

var app = express();
var router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());

router.get('/', function(req, res) {
    res.sendFile('index.html');
});

router.post('/formsubmit', function(req, res) {
    var form = req.body;
    console.log('submitting form:\n', form);
    var data = {
        'entry.1168338282': form.name,
        'entry.1948475505': form.email,
        'entry.379575718': form.subject,
        'entry.1861853011': form.message
    };

    request.post(
        "https://docs.google.com/forms/d/e/1FAIpQLSdcdwYWRKPhrQgEXltsZWQv8r1cp_mUPbuDNSbDRWjNQTrBjQ/formResponse",
        { form: data }
    ).on('response', function(response) {
        console.log('response:',response.statusCode);
        res.sendStatus(response.statusCode);
    });
});

if(app.get('env') === 'development') {
    app.use(express.static(path.join(__dirname)));
    app.use(express.static(path.join(__dirname+'/.tmp')));
    app.use(express.static(path.join(__dirname+'/www')));
    app.set('port', 3333);
} else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.set('port', process.env.PORT || '8080');
}

app.use('/', router);

app.listen(app.get('port'), function() {
    console.log('Express server:', this.address().address, 'listening on port', this.address().port);
});