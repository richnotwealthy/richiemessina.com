var Q = require('q');
var dust = require('dustjs-linkedin');
dust.config.cache = false;

var infoBoxTempl = Q.denodeify(require('../views/infobox-template.js')(dust));

$(document).ready(function(){
    infoBoxTempl({}).then(function(infobox){
        $('#info-box').append($(infobox));
        $('.parallax').parallax();
    });
});
