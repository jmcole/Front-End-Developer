
var bio = {
    "name" : "John Cole",
    "role" : "Front-End Developer",
    "contacts": {
        "mobile": " 317-363-6308",
        "email": "cole_john@att.net",
        "github": " https://github.com/jmcole",
        "LinkedIn":"https://www.linkedin.com/in/jmcole",
        "phone":"317-578-3861",
        "mobile":"317-363-6308",
        "location":"Fishers, IN"
    },
    "welcomeMessage": "Hello! Welcome to my online resume.",
    "skills": [
    "HTML"," JavaScript"," CSS"," Python"
    ],
    "bioPic": "images/IMG_00212.jpg"
};

var work = {
    "jobs": [
    {
        "employer" : "AT&T",
        "title" :"Sr. Technical Specialist",
        "dates" : "2013-2016",
        "location": "Noblesville, IN",
        "description" : "Perform project management and technical support for new network equipment installations. Create and refine work processes for the Central Office orginization."
    },
    {
        "employer": "AT&T",
        "title" : "Manager- Network Operations",
        "dates" : "2007-2013",
        "location": "Fishers, IN",
        "description" : "Managed network operations within Central Office facilities"
    },
    {
        "employer": "AT&T",
        "title" : "Manager- Network Operations",
        "dates" : "2005-2007",
        "location": "Indianapolis, IN",
        "description" : "Managed network operations center performing provisioining of network equipment."
    },
    {
        "employer": "AT&T",
        "title" : "Manager- Training & Development",
        "dates" : "2001-2007",
        "location": "Indianapolis, IN",
        "description" : "Developed and provided training and technical support to technicians and managers in the Central Office orginization."
    }
    ]
};

var education = {
    "schools": [
    {
        "name": "Marian College",
        "degree": "Bachelor of Science",
        "dates":"2008-2011",
        "location": "Indianapolis, IN",
        "major": "Business Administration"
    }
    ],

    "onlineCourses": [
    {
        "school":"Udacity",
            "title":"Introduction to Programming",
            "dates":"2015",
            "url":"http://udacity.com"
    },
    {
        "school":"University of California-Irvine",
            "title":"Introduction to Project Management",
            "dates":"2015",
            "url":"http://coursera.com"
    },
    {
        "school":"Rice University",
            "title":"Interactive Programming with Python",
            "dates":"2015",
            "url":"http://coursera.com"
    },
    {
        "school":"Georgia Institute of Technology",
            "title":"Software Defined Networking",
            "dates":"2014",
            "url":"http://coursera.com"
    },
    {
        "school":"Udacity",
            "title":"Introduction to Computer Science",
            "dates":"2014",
            "url":"http://udacity.com"
    }
    ]
};


var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "March 2016",
            "description": "Created a portflio to house Udacity Front-End Developer Projects",
            "image": ["images/portfolio.jpg"]
        },
        {
            "title": "Rice Rocks",
            "dates": "August 2014",
            "description": "Rice Rocks is an Asteroids clone coded in Python.",
            "image": ["images/ricerocks.jpg"]
        }
        ]
};

function displaybio(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedPhone=HTMLPhone.replace("%data%", bio.contacts.phone);
    var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit=HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedIn=HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn);
    var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedModal=HTMLModal.replace("%data%", bio.contacts.phone);
    var formattedModal2=HTMLModal2.replace("%data%", bio.contacts.mobile);

    $("#name").append(formattedName);
    $("#role").append(formattedRole);
    $("#pic").append(formattedBioPic);
    $("#message").append(formattedWelcomeMsg);
    $("#modal").append(formattedModal);
    $("#modal2").append(formattedModal2);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGit);
    $("#topContacts").append(formattedLinkedIn);
    $("#topContacts").append(formattedPhone);
    $("#footerContacts").append(formattedPhone);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedLinkedIn);
    $("#footerContacts").append(formattedGit);

    if(bio.skills.length > 0) {
        $("#sstart").append(HTMLskillsStart);

        for(i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
}
displaybio();

function displayWork(){
    for(jobs in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
        var formattedEmployerworkTitle = formattedworkEmployer + formattedworkTitle;
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
        var formatteddatesWorked = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
        $(".work-entry:last").append(formattedEmployerworkTitle);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formatteddatesWorked);
        $(".work-entry:last").append(formattedworkDescription);
    }
}
displayWork();

function displayProject(){
        for(p in projects.projects){
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].image);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImage);
        }
}
displayProject();



function displayEducation(){
        for(schools in education.schools){
            $("#education").append(HTMLschoolStart);
            var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[schools].name);
            var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
            var formattedSchoolnameDegree = formattedSchoolname + formattedSchooldegree;
            var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
            var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
            var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
            $(".education-entry:last").append(formattedSchoolnameDegree);
            $(".education-entry:last").append(formattedSchoollocation);
            $(".education-entry:last").append(formattedSchooldates);
            $(".education-entry:last").append(formattedSchoolmajor);
        }

        $("#education").append(HTMLonlineClasses);

        for(onlineCourses in education.onlineCourses){
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineUrl);
        }
}
displayEducation();

$("#mapDiv").append(googleMap);