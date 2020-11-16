
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Omar Hassane",
  title: "Coming Soon",
  subTitle1: "A Computer Engineering Master's Student. I work as a research assistant within the ",
  subTitle2:"collaborative research and development project between Ericsson and Concordia University. My research is about applying software engineering to optimize the automation of the design and deployment of services to Cloud systems. I also have experience in designing, developing, deploying and maintaining web services using Javascript/ Node.js / Java / Docker/ Kubernetes and other technologies.",
  subTitle3:"Expected to graduate in July 2020.",
  resumeLink: "https://drive.google.com/file/d/1VdERvF6hKyfJ5vmj1OkHscrdr1uv1MVt/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/omodev",
  linkedin: "https://www.linkedin.com/in/hassaneomar/",
  gmail: "omaarhassane@gmail.com"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skillset",
  subTitle1: "I have acquired various technical skills throughout my study, internships and research experiences. I have used many programming languages, libraries and framework. Mainly: ",
  languageskills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }, 
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "far fa-brackets-curly"
    }

  ],
  subTitle2: "I have been contributing in different occasions to building CI/CD pipelines for web services using: ",
  languageskills2: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Java EE",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }, 
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    }
  ]

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research/ Teaching Assistant",  
      company: "Concordia University",
      companylogo: require("./assets/images/concordiaLogo.png"),
      date: "January 2018 – Present",
      desc: "",
      descBullets: [
        "My main work as a research assistant is on model-based software management for Cloud systems",
        "As a teaching assistant for the Operating Systems & Communication Networks and Protocols courses, I was in charge of preparing programming assignments, labs and tutorials about multi-threading, Process scheduling and UDP/TCP Socket programming using Java, C++ and Python"
      ]
    },
    {
      role: "Software Engineer Intern",   
      company: "Optionizr",
      companylogo: require("./assets/images/optionizrLogo.jpg"),
      date: "February 2017 – June 2017",
      desc: "As a software engineering intern, I was in charge of the following tasks:",
      descBullets: [
        "Node.js API development",
        "Adding and maintaining functionalities on the main websites, the extranet and the annex websites",
        "Research and Development (Clustering, Security, Process optimization)"
      ]
    },
    {
      role: "Software Engineer Intern",  
      company: "Nokia Solutions & Networks",
      companylogo: require("./assets/images/nokiaLogo.jpg"),
      date: "June 2016 – August 2016",
      desc: "As a software engineering intern, I have been introduced to all the software engineering process cycles. I have contributed to different cycle evolutions by:",
      descBullets: [
        "Collecting stakeholder requirements and submitting them to the project manager",
        "Preparing detailed reports concerning the functional and technical specifications of the project",
        "Modifying existing software to correct errors, upgrade interfaces, create new services and improve performance",
        "Writing test scenarios for web services"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "OGMwZWQ1N2Y2MzY3ZmExZmRmMGFjMmQwOGQzNmQxMjM3ZDYzYTQ2OA==",
  githubUserName: "omodev", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Publications"),
  subtitle: "Research publications in well-known Software Engineering Conferences and Journals",

  achivementsCards: [
    {
      title: "MAPLE-T: A Tool for Process Enactment with Traceability Support",
      subtitle: "ACM/IEEE 22nd International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C), Munich, Germany 2019",
      footerLink: [
        { name: "Learn More", url: "https://ieeexplore.ieee.org/document/8904826" },
      ]
    },
    {
      title: "Process Enactment with Traceability Support for NFV Systems",
      subtitle: "System Analysis and Modeling. Languages, Methods, and Tools for Industry 4.0. SAM, September 2019",
      footerLink: [{ name: "Learn More", url: "https://link.springer.com/chapter/10.1007/978-3-030-30690-8_7" }]
    },

    {
      title: "Model-Driven Process Enactment for NFV Systems with MAPLE",
      subtitle: " Softw Syst Model (2020). https://doi.org/10.1007/s10270-020-00783-9",
      footerLink: [
        { name: "Learn More", url: "https://link.springer.com/article/10.1007/s10270-020-00783-9" }
      ]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all."
};

export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, achievementSection, contactInfo};
