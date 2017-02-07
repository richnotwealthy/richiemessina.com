function grade(n) {
  return {
    filled: Array(n),
    empty: Array(10 - n)
  };
}

module.exports = {
  title: 'About',
  me: '../images/me.png',
  body: "Hi there! Welcome to my portfolio site. This web page functions as a Node.js application " +
    "generating responsive pages in real-time using the Dust.js templating engine. It is hosted " +
    "on Heroku with Express handling the server-side routing. The entire workflow " +
    "of building this site was automated through Gulp and the styling was completely transpiled by Sass.",
  infos: [{
      icon: 'code',
      label: 'Developer',
      text: "Deeply passionate about modern software, I simply love " +
        "developing programs and applications with expansive utility and attractive architecture. " +
        "I am constantly building out personal projects and am always excited to pick up new work."
    },
    {
      icon: 'class',
      label: 'Student',
      text: "I am currently an undergraduate student pursuing my BS in Computer Science & " +
        "Engineering at New York University. I consider myself not only a student in the classroom " +
        "but also in practice. For me, the most essential component of programming is the readiness " +
        "and ability to learn and adapt to new technologies and outside perspectives."
    },
    {
      icon: 'lightbulb_outline',
      label: 'Enthusiast',
      text: "Even when I'm not building out applications, I spend much of my time reading online " +
        "tech magazines and developer blogs. On top of this passion for development, " +
        "I am also immensely interested in hip-hop and basketball culture. When I'm not buried inside " +
        "of a program, you can probably find me out on the basketball courts bumping to some Kanye."
    }
  ],
  jobs: [{
      title: "Platform Engineer",
      img: "../images/sito-o.png",
      bullets: [
        "Co-leading the development of a tool for clients and administrators to communicate campaign orders. " +
        "Built on the 3REE stack for real-time functionality with React and Redux on the front-end and RethinkDB and Express on the back-end.",
        "Worked within the front and back -ends of a robust Node application built to intelligently " +
        "and interactively visualize terabytes of business and bid request data. The app follows a " +
        "general MVC pattern with some aspects of MVVM. It is constructed mostly of HTML, " +
        "CSS, JavaScript, Dust.js, and Sass on the front-end with Express.js running a proxy to " +
        "Elasticsearch and RethinkDB on the back-end. Much of the visualization is done through D3.js, " +
        "the Google Maps JavaScript API, and DataTables.",
        "Developed cross-platform desktop application which provides smart parsing of " +
        "spreadsheets for geocoding addresses to latitude/longitude locations. " +
        "Packaged with Electron using web technologies such as HTML, CSS, and JS.",
        "Built multiple CLIs with Python and Node.js for analyzing several Elasticsearch indices " +
        "to dynamically generate new sets of data."
      ],
      company: "SITO Mobile",
      dates: "Jan 2017 - Present",
      former: "Technology Development Intern (June 2016 - Jan 2017)"
    },
    {
      title: "Media Support Technician",
      img: "../images/nyu-torch.png",
      bullets: [
        "Audio and visual staging assistant.",
        "Provide customer support for video and still photographic lighting and composition.",
        "Troubleshoot signal and control flow errors present in audio and visual systems."
      ],
      company: "NYU",
      dates: "Feb 2016 - Present"
    },
    {
      title: "Inventory Management Associate",
      img: "../images/spprep-p.png",
      bullets: [
        "Help manage the physical and digital book inventory of the school.",
        "Organize orders for textbooks.",
        "Ensure the proper number of books are purchased for each classroom and student.",
        "Distribute textbooks to students."
      ],
      company: "St. Peter's Prep",
      dates: "2013 - 2015"
    }
  ],
  quals: [{
      header: "Technologies",
      items: [{
          img: "../images/terminal.png",
          name: "Bash Terminal",
          grade: grade(9)
        },
        {
          img: "../images/git.png",
          name: "Git",
          grade: grade(9)
        },
        {
          img: "../images/nodejs.png",
          name: "Node.js",
          grade: grade(9)
        },
        {
          img: "../images/react.png",
          name: "React",
          grade: grade(8)
        },
        {
          img: "../images/redux.png",
          name: "Redux",
          grade: grade(8)
        },
        {
          img: "../images/rethinkdb.png",
          name: "RethinkDB",
          grade: grade(8)
        },
        {
          img: "../images/express.png",
          name: "Express",
          grade: grade(8)
        },
        {
          img: "../images/jquery.png",
          name: "jQuery",
          grade: grade(8)
        },
        {
          img: "../images/dust.png",
          name: "Dust.js",
          grade: grade(8)
        },
        {
          img: "../images/bootstrap.png",
          name: "Bootstrap",
          grade: grade(8)
        },
        {
          img: "../images/materialize.svg",
          name: "Materialize",
          grade: grade(8)
        },
        {
          img: "../images/electron.png",
          name: "Electron",
          grade: grade(7)
        },
        {
          img: "../images/elasticsearch.png",
          name: "Elasticsearch",
          grade: grade(7)
        },
        {
          img: "../images/docker.png",
          name: "Docker",
          grade: grade(6)
        },
        {
          img: "../images/d3.png",
          name: "D3.js",
          grade: grade(6)
        }
      ]
    },
    {
      header: "Languages",
      items: [{
          img: "../images/python.png",
          name: "Python",
          grade: grade(9)
        },
        {
          img: "../images/cplusplus.png",
          name: "C++",
          grade: grade(9)
        },
        {
          img: "../images/javascript.jpeg",
          name: "JavaScript",
          grade: grade(9)
        },
        {
          img: "../images/html.png",
          name: "HTML",
          grade: grade(8)
        },
        {
          img: "../images/css.png",
          name: "CSS",
          grade: grade(8)
        },
        {
          img: "../images/sass.png",
          name: "Sass",
          grade: grade(7)
        },
        {
          img: "../images/java.png",
          name: "Java",
          grade: grade(5)
        }
      ],
      style: "margin-bottom: 5px;"
    },
    {
      header: "Miscellaneous",
      items: [{
          img: "../images/msoffice.png",
          name: "Microsoft Office",
          grade: grade(9)
        },
        {
          img: "../images/gdrive.png",
          name: "Google Drive",
          grade: grade(9)
        },
        {
          img: "../images/social.png",
          name: "Social Media",
          grade: grade(9)
        },
        {
          img: "../images/customerservice.png",
          name: "Customer Service",
          grade: grade(9)
        },
        {
          img: "../images/web-dev.png",
          name: "Web Development",
          grade: grade(8)
        },
        {
          img: "../images/GIS.png",
          name: "Geographic Information System",
          grade: grade(7)
        },
        {
          img: "../images/android.jpg",
          name: "Android Development",
          grade: grade(5)
        }
      ]
    }
  ],
  schools: [{
      title: "New York University",
      dates: "2015 - 2019 (Present)",
      text: "I'm currently pursuing a BS in Computer Science at the NYU Tandon School of Engineering. " +
        "So far, I've achieved Dean's List placement for the 2015 - 2016 academic year with a 4.0 GPA. " +
        "I've served as member of Hall Council, Design for America NYU, and the Entrepreneurship & Innovation Association.",
      img: "../images/nyu.jpg"
    },
    {
      title: "Brown University, Pre-College Program",
      dates: "July 2014 - Aug 2014",
      text: "Before my senior year of high school, I spent the summer at Brown University enrolled in an " +
        "introductory course to the Python language. Thus, the summer of 2014 serves my memory as the " +
        "starting point of my programming career. Ever since that course, I have incessantly strived " +
        "to increase my knowledge of computer science.",
      img: "../images/brown.png"
    },
    {
      title: "Saint Peter's Preparatory High School",
      dates: "2011 - 2015",
      text: "In high school, I served as President of the Prep Against Ignorance Club, Secretary of the " +
        "National Spanish Honor Society, member of the National Honor Society, and a member of the Computer Club. " +
        "I graduated with Distinguished Honors (GPA of 4.4 on a 4.5 scale, unweighted), was the recipient of " +
        "4 Academic Achievement awards granted annually, and acted as both a Sheehan Scholar (full merit " +
        "scholarship program) and an Ignatian Scholar.",
      img: "../images/spprep.png"
    }
  ]
}