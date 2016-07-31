const express = require('express');
const path = require('path');
const logger = require('morgan');

var app = express();
var router = express.Router();

var port = process.env.PORT || 4444;

app.use(logger('dev'));

router.get('/', function(req, res){
    res.sendFile('index.html');
});

if(app.get('env') === 'development'){
    app.use(express.static(path.join(__dirname)));
    app.use(express.static(path.join(__dirname+'/.tmp')));
    app.use(express.static(path.join(__dirname+'/www')));
} else {
    app.use(express.static(path.join(__dirname, 'dist')));
}

app.use('/', router);

app.listen(port, 'localhost', function(){
    console.log('Express server:', this.address().address, 'listening on port', port);
});