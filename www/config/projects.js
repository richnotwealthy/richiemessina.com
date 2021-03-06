module.exports = {
  title: "Projects",
  body: "a few projects that I've worked on in the past (and can show)!",
  cards: [{
      title: "richiemessina.com",
      image: "../images/rdm.png",
      right: false,
      actions: [{
        text: "Github",
        link: "https://github.com/rivyx/richiemessina.com"
      }],
      description: "The site you're using right now! It functions as a single page application " +
        "generating responsive views in real-time using the Dust.js templating engine. It is hosted " +
        "on Netlify and built on top of the MaterializeCSS framework. The entire workflow " +
        "of building this site was automated through Gulp and the styling was completely transpiled by Sass."
    },
    {
      title: "SITO Mobile Planner",
      image: "../images/media-planner.png",
      right: true,
      actions: [{
        text: "SITO Mobile",
        link: "http://sitomobile.com/"
      }],
      description: "A robust Node application built to intelligently " +
        "and interactively visualize terabytes of business and bid request data. The app follows a " +
        "general MVC pattern with some aspects of MVVM. It is constructed mostly of HTML, " +
        "CSS, JavaScript, Dust.js, and Sass on the front-end with Express.js running a proxy to " +
        "Elasticsearch and RethinkDB on the back-end. Much of the visualization is done through D3.js, " +
        "the Google Maps JavaScript API, and DataTables."
    },
    {
      title: "SITO Mobile Geocoder",
      image: "../images/geocoder.png",
      right: false,
      actions: [{
        text: "SITO Mobile",
        link: "http://sitomobile.com/"
      }],
      description: "A cross-platform desktop application which provides smart parsing of " +
        "spreadsheets for geocoding addresses to latitude/longitude locations. " +
        "Packaged with Electron using web technologies such as HTML, CSS, and JS."
    },
    {
      title: "For Hue",
      image: "../images/for-hue-logo.png",
      right: true,
      actions: [{
          text: "Demo",
          link: "https://for-hue.herokuapp.com/"
        },
        {
          text: "Github",
          link: "https://github.com/rivyx/for-hue"
        },
        {
          text: "Devpost",
          link: "https://devpost.com/software/for-hue"
        }
      ],
      description: "Developed for HackNYU 2017, a web app which adjusts the colors of a pdf file for various types of colorblindness. Built with React on the front-end " +
        "and Express with Sockets handling the color conversion through ImageMagick and JIMP on the back-end. Logo and design by my friends and teammates " +
        "Daniel Jiang, <a href=\"http://ryanchin.co/\" class=\"blue-link\" target=\"_blank\">Ryan Chin</a>, and Pooja Patel."
    },
    {
      title: "michaelmessina.com",
      image: "../images/messinalaw.png",
      right: false,
      actions: [{
          text: "Homepage",
          link: "http://www.michaelmessina.com/"
        }
      ],
      description: "The homepage of Michael J. Messina, Attorney at Law. Built with HTML, CSS, and JS, this website functions as a basic Node.js " +
        "application hosted on Heroku with Express.js handling the routing and static file serving. The page was designed with Sketch by my freelance partner, " +
        "<a href=\"http://www.connormaxlin.com/\" class=\"blue-link\" target=\"_blank\">Connor Lin</a>, and developed by me. Communication between designer and developer was done both in person and through Zeplin."
    },
    {
      title: "Data Hoops",
      image: "../images/datahoops.png",
      right: true,
      actions: [{
        text: "Github",
        link: "https://github.com/rivyx/data-hoops"
      }],
      description: "A simple visualization tool with an overcomplicated project architecture for creating NBA shot charts. I made this to practice some React, Redux, and D3.js over the " +
        "course of a weekend. I also learned a bit about Webpack and React Router along the way. The data source is being accessed through the stats.nba.com " +
        "API, which has no official documentation. Use of it was possible through web scraping that was accomplished with Python."
    },
    {
      title: "Prepdroid",
      image: "../images/prepdroid.png",
      right: false,
      actions: [{
          text: "Play Store",
          link: "https://play.google.com/store/apps/details?id=com.yolasite.rivyze.prepdroid"
        },
        {
          text: "Github",
          link: "https://github.com/rivyx/prepdroid"
        }
      ],
      description: "My first application, made to be used by students at St. Peter's Prep, Jersey City, NJ.\nI made this when " +
        "I first got interested in programming. It was my very first personal project. I actually built the entire thing during " +
        "finals week of my junior year in high school, 2014."
    },
    {
      title: "EatEasy",
      image: "../images/eateasy.png",
      right: true,
      actions: [{
          text: "Github",
          link: "https://github.com/snehaarkery/EatEasy"
        }
      ],
      description: "React Native Andriod/iOS application built for my Software Entrepreneurship class at NYU. " +
        "EatEasy works as a food shopping assistant allowing users to scan the barcode of a food product to " +
        "check if the product is within his or her diet."
    }
  ]
};
