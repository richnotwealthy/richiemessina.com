var Q = require('q');
var dust = require('dustjs-linkedin');
dust.config.cache = false

var aboutTempl = Q.denodeify(require('../views/about-template.js')(dust));
var aboutConfig = require('../config/about.js');

var projectsTempl = Q.denodeify(require('../views/projects-template.js')(dust));
var projectsConfig = require('../config/projects.js');

var connectTempl = Q.denodeify(require('../views/connect-template.js')(dust));
var connectConfig = require('../config/connect.js');

function loadAbout() {
    aboutTempl(aboutConfig).then(function(about) {
       $('#main-view').append($(about));
    });
}

function loadProjects() {
    projectsTempl(projectsConfig).then(function(projects) {
        $('#main-view').append($(projects));
    });
}

function loadResume() {
    window.open('https://drive.google.com/open?id=0B3Z3gUqqHxY4SXAzMGFGeWR2UnM');
}

function postToGSheets(data) {
    $.ajax({
        url: '/formsubmit',
        data: JSON.stringify(data),
        type: 'POST',
        contentType: 'application/json'
    })
    .done(function(res) {
        if(res == 'OK') {
            Materialize.toast('message sent successfully', 5000);
            $('[msg-field]').val('').trigger('autoresize');
            Materialize.updateTextFields();
        } else {
            Materialize.toast('message failed to send', 5000);
        }
    });
}

function loadConnect() {
    connectTempl(connectConfig).then(function(connect) {
        $('#main-view').append($(connect))
            .find('[name=submit-msg]')
                .click(function(e) {
                    var data = {};
                    $('[msg-field]').each(function(i, field) {
                        var _field = $(field);
                        var name = _field.attr('msg-field');
                        data[name] = _field.val();
                    });
                    postToGSheets(data);
                });
    });
}

var views = {
    about: loadAbout,
    projects: loadProjects,
    resume: loadResume,
    connect: loadConnect
}

$(document).ready(function() {
    $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: true
    });
    particlesJS.load('particles-js', 'statics/particles.json');

    // load default page
    loadAbout();

    $('nav a').click(function() {
        var page = $(this).attr('page');
        if(page != 'resume') $('#main-view').empty();
        views[page]();
    });
});