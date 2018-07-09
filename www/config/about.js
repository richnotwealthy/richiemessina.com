function grade(n) {
  return {
    filled: Array(n),
    empty: Array(10 - n)
  };
}

module.exports = {
  title: 'About',
  me: '../images/me.png',
  body: "Hi there! Welcome to my portfolio site. This web page functions as a single page application " +
    "generating responsive views in real-time using the Dust.js templating engine. It is hosted " +
    "on Netlify and built on top of the MaterializeCSS framework. The entire workflow " +
    "of building this site was automated through Gulp and the styling was completely transpiled by Sass.",
  infos: [{
      icon: 'code',
      label: 'Developer',
      text: "Deeply passionate about modern software, I simply love " +
        "developing programs and applications with expansive utility and attractive architecture. " +
        "I am constantly building out interesting projects and am always excited to pick up new work."
    },
    {
      icon: 'class',
      label: 'Student',
      text: "I consider myself not only a student in the classroom " +
        "but also in practice. For me, the most essential component of programming is the readiness " +
        "and ability to learn and adapt to new technologies and outside perspectives."
    },
    {
      icon: 'lightbulb_outline',
      label: 'Enthusiast',
      text: "On top of my passion for computer science, " +
        "I am also immensely interested in music and basketball culture. When I'm not buried inside " +
        "of a program, you can usually find me exploring my guitar or playing some pick-up basketball."
    }
  ],
  jobs: [{
      title: "Software Engineer Intern",
      img: "../images/fb.png",
      bullets: [
        "Currently working within the Recruiting Products team."
      ],
      company: "Facebook",
      dates: "Jun 2018 - Aug 2018"
    },
    {
      title: "Software Development Engineering Intern",
      img: "../images/amazon.jpg",
      bullets: [
        "Worked within the Hardware Engineering Automation Lab at AWS writing software tools to manage, " +
        "schedule, and execute tests of Amazon and manufacturer-related " +
        "cloud and infrastructure hardware.",
        "Implemented graph algorithms for generating smart, interactive test workflows."
      ],
      company: "Amazon",
      dates: "Feb 2018 - Apr 2018"
    },
    {
      title: "Platform Engineer",
      img: "../images/sito-o.png",
      bullets: [
        "Co-lead the development of multiple web applications for analyzing and providing location insights. " +
        "The primary stack used involves React and Redux on the front-end and RethinkDB and Elasticsearch on the back-end " +
        "with Node servers and proxies as middleware.",
        "Developed cross-platform desktop application which provides smart parsing of " +
        "spreadsheets for geocoding addresses to latitude/longitude locations. " +
        "Packaged with Electron using web technologies such as HTML, CSS, and JS.",
        "Built multiple CLIs and scripts with Python and Node.js for analyzing and building parts of the databases " +
        "and dynamically generating and parsing immense amounts of location-based information.",
        "Helped manage the responsibilities of technology interns."
      ],
      company: "SITO Mobile",
      dates: "Jan 2017 - Jan 2018",
      former: "Technology Development Intern (June 2016 - Jan 2017)"
    },
    {
      title: "Media Support Technician",
      img: "../images/nyu-torch.png",
      bullets: [
        "Leading the development of a full stack web application for managing equipment.",
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
          name: "Zsh, Vim, Tmux",
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
          img: "../images/dust.png",
          name: "Dust.js",
          grade: grade(8)
        },
        {
          img: "../images/reactnative.png",
          name: "React Native",
          grade: grade(7)
        },
        {
          img: "../images/electron.png",
          name: "Electron",
          grade: grade(7)
        },
        {
          img: "../images/couchdb.png",
          name: "CouchDB",
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
        },
        {
          img: "../images/postgresql.png",
          name: "PostgreSQL",
          grade: grade(6)
        },
        {
          img: "../images/mysql.jpg",
          name: "MySQL",
          grade: grade(6)
        },
        {
        img: "../images/rails.png",
        name: "Rails",
        grade: grade(5)
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
          img: "../images/javascript.jpeg",
          name: "JavaScript",
          grade: grade(9)
        },
        {
          img: "../images/cplusplus.png",
          name: "C/C++",
          grade: grade(8)
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
        img: "../images/sql.png",
        name: "SQL",
        grade: grade(7)
        },
        {
        img: "../images/ruby.png",
        name: "Ruby",
        grade: grade(6)
        },
        {
          img: "../images/java.png",
          name: "Java",
          grade: grade(4)
        }
      ],
      style: "margin-bottom: 5px;"
    },
    {
      header: "Skills",
      items: [{
          img: "../images/web-dev.png",
          name: "Full Stack Development",
          grade: grade(9)
        },
        {
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
          img: "../images/datavis.png",
          name: "Data Visualization",
          grade: grade(8)
        },
        {
          img: "../images/GIS.png",
          name: "Geographic Information System",
          grade: grade(7)
        },
        {
          img: "../images/aws.png",
          name: "Amazon Web Services",
          grade: grade(6)
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
        "So far, I've achieved Dean's List placement for both my freshman and sophomore academic years with a 3.9 GPA. " +
        "I've served as member of Hall Council, Design for America NYU, Tech@NYU and the Entrepreneurship & Innovation Association.",
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
