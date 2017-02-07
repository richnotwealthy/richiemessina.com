const express = require('express');
const path = require('path');
const logger = require('morgan');

var app = express();
var router = express.Router();

app.use(logger('dev'));

if(app.get('env') === 'development') {
    app.use(express.static(__dirname));
    app.use(express.static(path.join(__dirname, '/.tmp')));
    app.use(express.static(path.join(__dirname, '/www')));
    app.set('port', 3333);
} else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.set('port', process.env.PORT || '8080');
}

app.use('/', router);

app.listen(app.get('port'), function() {
    console.log('Express server:', this.address().address, 'listening on port', this.address().port);
});