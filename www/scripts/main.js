var Q = require('q');
var dust = require('dustjs-linkedin');
dust.config.cache = false

var aboutTempl = Q.denodeify(require('../views/about-template.js')(dust));
var aboutConfig = require('../config/about.js');

var projectsTempl = Q.denodeify(require('../views/projects-template.js')(dust));
var projectsConfig = require('../config/projects.js');

var connectTempl = Q.denodeify(require('../views/connect-template.js')(dust));
var connectConfig = require('../config/connect.js');

function loadAbout(){
    aboutTempl(aboutConfig).then(function(about){
       $('#main-view').append($(about));
    });
}

function loadProjects(){
    projectsTempl(projectsConfig).then(function(projects){
        $('#main-view').append($(projects));
    });
}

function loadResume(){
    window.open('/statics/richiemessina-resume.pdf');
}

function loadConnect(){
    connectTempl(connectConfig).then(function(connect){
        $('#main-view').append($(connect));
    });
}

var views = {
    about: loadAbout,
    projects: loadProjects,
    resume: loadResume,
    connect: loadConnect
}

$(document).ready(function(){
    $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: true
    });
    particlesJS.load('particles-js', 'statics/particles.json');

    $(window).scroll(function(){
        if($(this).scrollTop() > 30){
            $('nav').removeClass('transparent')
                    .addClass('particle-red');
        } else {
            $('nav').addClass('transparent')
                    .removeClass('particle-red');
        }
    })

    // load default page
    loadAbout();

    $('nav ul a').click(function(){
        var page = $(this).attr('page');
        if(page != 'resume') $('#main-view').empty();
        views[page]();
    });
});