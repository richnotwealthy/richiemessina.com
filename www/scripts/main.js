var Q = require('q');
var dust = require('dustjs-linkedin');
dust.config.cache = false;

var aboutTempl = Q.denodeify(require('../views/about-template.js')(dust));
var aboutConfig = require('../config/about.js');

var projectsTempl = Q.denodeify(require('../views/projects-template.js')(dust));
var projectsConfig = require('../config/projects.js');

function loadAbout(){
    aboutTempl(aboutConfig).then(function(about){
       $('#main-box').append($(about));
    });
}

function loadProjects(){
    projectsTempl(projectsConfig).then(function(projects){
        $('#main-box').append($(projects));
    });
}

function loadResume(){
}

function loadContact(){
}

var views = {
    about: loadAbout,
    projects: loadProjects,
    resume: loadResume,
    contact: loadContact
}

$(document).ready(function(){
    $('.button-collapse').sideNav();
    particlesJS.load('particles-js', 'config/particles.json');

    // load default page
    loadAbout();

    $('nav ul a').click(function(){
        $('#main-box').empty();
        views[$(this).html()]();
    });
});