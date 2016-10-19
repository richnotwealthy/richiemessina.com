module.exports =
{
    title: "Projects",
    body: "anything and everything that I've worked on (and can show)",
    cards: [
        {
            title: "richiemessina.com",
            image: "../images/rdm.png",
            right: false,
            actions: [
                {
                    text: "Github",
                    link: "https://github.com/rivyx/richiemessina.com"
                }
            ],
            description: "The site you're using right now! It functions as a Node.js application " +
            "generating responsive pages in real-time using the Dust.js templating engine. It is hosted " +
            "on Heroku with Express handling the server-side routing. The entire workflow " +
            "of building this site was automated through Gulp and the styling was completely transpiled by Sass."
        },
        {
            title: "Prepdroid",
            image: "../images/prepdroid.png",
            right: true,
            actions: [
                {
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
            title: "michaelmessina.com",
            image: "../images/messinalaw.png",
            right: false,
            actions: [
                {
                    text: "Homepage",
                    link: "http://www.michaelmessina.com/"
                },
                {
                    text: "Connor Lin",
                    link: "http://www.connormaxlin.com/"
                }
            ],
            description: "The homepage of Michael J. Messina, Attorney at Law. Built with HTML, CSS, and JS, this website functions as a basic Node.js " +
            "application hosted on Heroku with Express.js handling the routing and static file serving. The page was designed with Sketch by my freelance partner, " +
            "Connor Lin, and developed by me. Communication between designer and developer was done both in person and through Zeplin."
        },
        {
            title: "Data Hoops",
            image: "../images/datahoops.png",
            right: true,
            actions: [
                {
                    text: "Github",
                    link: "https://github.com/rivyx/data-hoops"
                }
            ],
            description: "A simple visualization tool with an overcomplicated project architecture for creating NBA shot charts. I made this to practice some React, Redux, and D3.js over the " +
            "course of a weekend. I also learned a bit about Webpack and React Router along the way. The data source is being accessed through the stats.nba.com " +
            "API, which has no official documentation. Use of it was possible through web scraping that was accomplished with Python."
        }
    ]
};