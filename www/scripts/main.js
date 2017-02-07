const Q = require('q');

var dust = require('dustjs-linkedin');
dust.config.cache = false;

const aboutTempl = Q.denodeify(require('../views/about-template.js')(dust));
const aboutConfig = require('../config/about.js');

const projectsTempl = Q.denodeify(require('../views/projects-template.js')(dust));
const projectsConfig = require('../config/projects.js');

const connectTempl = Q.denodeify(require('../views/connect-template.js')(dust));
const connectConfig = require('../config/connect.js');

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

function loadConnect() {
  connectTempl(connectConfig).then(function(connect) {
    $('#main-view').append($(connect));

    // initialize google maps
    const options = {
      zoom: 11,
      center: new google.maps.LatLng(40.6919139, -73.98462740000002),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    const map = new google.maps.Map(document.getElementById('gmap_canvas'), options);

    const marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(40.6919139, -73.98462740000002)
    });

    const infowindow = new google.maps.InfoWindow({
      content: '<strong>Richie Messina</strong><br>100 Willoughby St<br>11201 Brooklyn<br>'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    infowindow.open(map, marker);
  });
}

const views = {
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
    if (page != 'resume') $('#main-view').empty();
    views[page]();
  });
});