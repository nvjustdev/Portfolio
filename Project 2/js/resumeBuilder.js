//Creating variables comma-delimited to prevent var lookup
var work = {
	"job" : [
	{
		"title" : "Mobile Developer",
		"position" : "Consultant (Part-Time)",
		"company" : "Stealth Mode Startup",
		"location" : "Cupertino",
		"timeframe" : "November 2014 - Present",
		"skills" : [
		"iOS development",
		"Android development",
		"Mobile App automated testing"
		]
	},
	{
		"title" : "Content Developer",
		"position" : "Consultant (Part-Time)",
		"company" : "Shmoop University",
		"location" : "Palo Alto",
		"timeframe" : "September 2014 - February 2015",
		"skills" : [
		"Introduction to Java",
		"Object oriented programming",
		"Object oriented programming using Java"
		]
	},
	{
		"title" : "Founder and CEO",
		"position" : "Full Time",
		"company" : "Prakruthe App Labs",
		"location" : "Campbell, CA",
		"timeframe" : "January 2014 - December 2014",
		"skills" : [
		"Designing Mobile Apps",
		"iOS development",
		"Android development",
		"Mobile App testing"
		]
	},
	{
		"title" : "Software Test Engineer",
		"position" : "Full Time",
		"company" : "Cisco Systems Inc",
		"location" : "San Jose",
		"timeframe" : "March 2005 - January 2014",
		"skills" : [
		"Wireless LAN Technologies",
		"Wi-Fi Location Technologies",
		"Research and Development",
		"Software Testing",
		"Automation",
		"Software Tools Development using Java",
		"Systems Engineering",
		"Research and Development"
		]
	},
	{
		"title" : "Software Test Engineer",
		"position" : "Full Time",
		"company" : "Airespace Inc",
		"location" : "San Jose",
		"timeframe" : "August 2003 - March 2005",
		"skills" : [
		"Wireless LAN Technologies",
		"Wi-Fi Location Technologies",
		"Research and Development",
		"Software Testing",
		"Systems Engineering",
		"Research and Development"
		]
	}
	],
	"internship" : [
	{
		"title" : "Pre-professional Programmer",
		"company" : "IBM Almaden Research Center",
		"location" : "San Jose",
		"timeframe" : "June 2002 - September 2002",
		"skills" : [
		"iSCSI",
		"Python programming"
		]
	},
	{
		"title" : "Data Entry Intern",
		"company" : "National Institute of Ocean Technology",
		"location" : "Chennai",
		"timeframe" : "April 1993 - June 1993",
		"skills" : [
		"Data Entry",
		"Reading Meteorological Data"
		]
	}
	],
	"volunteer" : [
	{
		"title" : "Teacher / Teaching Assistant / Teacher Coordinator for Microsoft Excel",
		"company" : "Sathya Sai International Organization",
		"location" : "California",
		"timeframe" : "September 2003 - September 2005",
		"skills" : [
		"Teaching"
		]
	}
	],
	display : function() {
		var jobs = this.job,
		skillsLearned = "",
		workDetails = "";

		$("#employment").append(HTMLworkType.replace("%data%", "Employment History"));
		for (var i = 0; i < jobs.length; i++) {
			$("#employment").append(HTMLworkStart);

			if (i == 0) {
				skillsLearned = "Responsibilities include working on " + jobs[i].skills.join(", ");
			}
			else if (i === 1) {
				skillsLearned = "Responsibilities included developing the following courses: " + jobs[i].skills.join(", ");
			} else {
				skillsLearned = "Responsibilities included working on " + jobs[i].skills.join(", ");
			}

			workDetails = HTMLworkEmployer.replace("%data%", jobs[i].company)
			.concat(HTMLworkLocation.replace("%data%", jobs[i].location))
			.concat(HTMLworkTitle.replace("%data%", jobs[i].title))
			.concat(HTMLworkDates.replace("%data%", jobs[i].timeframe))
			.concat(HTMLworkDescription.replace("%data%", skillsLearned));

			$(".work-entry:last").append(workDetails);
		}

		jobs = this.internship;
		$("#internship").append(HTMLworkType.replace("%data%", "Internship History"));

		for (var i = 0; i < jobs.length; i++) {
			$("#internship").append(HTMLworkStart);

			if (i == 0) {
				skillsLearned = "Responsibilities include working on " + jobs[i].skills.join(", ");
			}
			else if (i === 1) {
				skillsLearned = "Responsibilities included developing the following courses: " + jobs[i].skills.join(", ");
			} else {
				skillsLearned = "Responsibilities included working on " + jobs[i].skills.join(", ");
			}

			workDetails = HTMLworkEmployer.replace("%data%", jobs[i].company)
			.concat(HTMLworkLocation.replace("%data%", jobs[i].location))
			.concat(HTMLworkTitle.replace("%data%", jobs[i].title))
			.concat(HTMLworkDates.replace("%data%", jobs[i].timeframe))
			.concat(HTMLworkDescription.replace("%data%", skillsLearned));

			$(".work-entry:last").append(workDetails);
		}

		jobs = this.volunteer;
		$("#volunteer").append(HTMLworkType.replace("%data%", "Volunteer Work History"));

		for (var i = 0; i < jobs.length; i++) {
			$("#volunteer").append(HTMLworkStart);
			if (i == 0) {
				skillsLearned = "Responsibilities include working on " + jobs[i].skills.join(", ");
			}
			else if (i === 1) {
				skillsLearned = "Responsibilities included developing the following courses: " + jobs[i].skills.join(", ");
			} else {
				skillsLearned = "Responsibilities included working on " + jobs[i].skills.join(", ");
			}

			workDetails = HTMLworkEmployer.replace("%data%", jobs[i].company)
			.concat(HTMLworkLocation.replace("%data%", jobs[i].location))
			.concat(HTMLworkTitle.replace("%data%", jobs[i].title))
			.concat(HTMLworkDates.replace("%data%", jobs[i].timeframe))
			.concat(HTMLworkDescription.replace("%data%", skillsLearned));

			$(".work-entry:last").append(workDetails);
		}
	}
},
project = {
	"projects" : [
	{
		"title" : "Java Based API Test Tool",
		"date" : "August 2010",
		"description" : "A Test tool to test the Location APIs. The Location APIs were used by partners and customers to develop their location based apps",
		"image" : "http://placekitten.com/g/200/300"
	},
	{
		"title" : "Creation and Maintanence of Intranet Pages",
		"date" : "August 2003",
		"description" : "Team Intranet Pages",
		"image" : "http://placekitten.com/g/200/300"
	},
	{
		"title" : "Creation and Maintanence of Location Web pages for Intranet",
		"date" : "March 2005",
		"description" : "The location pages served as a starting point for newcomers and as a refresher for those working on the technologies.",
		"image" : "http://placekitten.com/g/200/300"
	},
	{
		"title" : "Web Based Project Portfolio",
		"date" : "July 2015",
		"description" : "As part of the Udacity Nanodegree, a web based project portfolio was put together using HTML, CSS, and Bootstrap",
		"image" : "http://placekitten.com/g/200/300"
	},
	{
		"title" : "Web Based Interactive Resume",
		"date" : "July 2015",
		"description" : "As part of the Udacity Nanodegree, an interactive resume was put together using HTML, CSS, Javascript, Jquery and Bootstrap",
		"image" : "http://placekitten.com/g/200/300"
	}
	],
	display : function() {

		var projectDetails = "",
		projects = this.projects;
		for (var i = 0, length = projects.length; i < length; i++) {
			$("#projects").append(HTMLprojectStart);

			projectDetails = HTMLprojectTitle.replace("%data%", projects[i].title)
			.concat(HTMLprojectDescription.replace("%data%", projects[i].description))
			.concat(HTMLprojectDates.replace("%data%", projects[i].date))
			.concat(HTMLprojectImage.replace("%data%", projects[i].image));

			$(".project-entry:last").append(projectDetails);
		}
	}
},
bio = {
	"name" : "Nirmala Nott Venkataramani",
	"role" : "Mobile & Web Developer",
	"contact" : {
		"email" : "nirmala.jraman@gmail.com",
		"home"  : "(408)-866-4121",
		"mobile" : "(408)-324-6262",
		"location" : "California"
	},
	"links" : {
		"linkedin" : "https://www.linkedin.com/in/nirmalavenkataramani",
		"github" : "https://github.com/nvjustdev/"
	},
	"picture" : "images/mypicture.jpg",
	"portfolio" : "",
	"welcomeMsg" : "<p>\"Hi! Welcome to my interactive resume. I am Nirmala, an <em>avid and passionate programmer</em>, though I can wear other hats too!</p><p>I take pride in my work and I have a deep sense of commitment to <em>being organized, goal oriented and sticking to schedules</em>.\"</p>",
	"coverLetter" : "<article><p>I pride myself in being a self-learner who is extremely passionate about developing software for mobile devices. I am extremely comfortable programming in Objective-C, and Android and context switching between the two with ease. When I don't know (yes, sometimes we don't know it all) a solution, I strive hard to find it and I usually do.</p><p>I work very well in a team or in an silo as might be needed, and can work with little supervision.. I am very organized, flexible and stand true to deliverables and schedules. I take deep pride in my work and attempt to look at it from both development and test perspectives.</p><p>I have been a successful remote worker for a few years now and I know what it takes to succeed while working from home.</p><p>If you think my skills might be a fit, please let me know to take these conversations forward.</p></article>",
	"skills" : [
	"Languages: HTML5, CSS3, Javascript, Objective-C, Java",
	"iOS, Android & Web development",
	"Wireless LAN & Wi-Fi Location Technologies",
	"Software Testing",
	"Teaching"
	],
	display : function() {
		var name = HTMLheaderName.replace("%data%", bio.name)
		.concat(HTMLheaderRole.replace("%data%", bio.role));

	//Basic Bio
	$("#name").append(name);

	//Picture
	$("#picture").append(HTMLbioPic.replace("%data%", bio.picture));

	//Welcome Message
	$("#welcomeMessage").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

	//Cover Letter
	$(".coverLetter").append(HTMLcoverLetter.replace("%data%", bio.coverLetter));

	//Contacts
	$("#topContacts").append(HTMLemailHeader.replace("%data%", bio.contact.email));
	$("#topContacts").append(HTMLmobileHeader.replace("%data%", bio.contact.mobile));

	console.log("<div class=\"left\">".concat(HTMLemail.replace("%data%", bio.contact.email)).concat("</div>"));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email).replace("%data%", bio.contact.email));
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile).replace("%data%", bio.contact.mobile));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.links.github).replace("%data%", bio.links.github));
	$("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.links.linkedin).replace("%data%", bio.links.linkedin));

	//Skills At A Glance
	$("#aboutMe").append(HTMLskillsStart);

	for (var i = 0, skillArray = bio.skills; i < skillArray.length; i++) {
		$("#aboutMe").append(HTMLskills.replace("%data%", skillArray[i]));
	}
}
},
education = {
	"schools" : [
	{
		"name" : "Santa Clara University",
		"location" : "Santa Clara",
		"degree" : "Master of Science",
		"graduation" : "June 2003",
		"major" : "Computer Engineering",
		"gpa" : "3.63",
		"awards" : "",
		"date" : "September 2001 - June 2003"
	},
	{
		"name" : "Indian Institute of Technology",
		"location" : "Chennai",
		"degree" : "Master of Science",
		"graduation" : "June 2001",
		"major" : "Mathematics",
		"gpa" : "4.0",
		"awards" : "Valedictorian",
		"date" : "June 1999 - May 2001"
	},
	{
		"name" : "University of Madras",
		"location" : "Chennai",
		"degree" : "Bachelor of Science",
		"graduation" : "June 1998",
		"major" : "Mathematics",
		"gpa" : "3.9",
		"awards" : "Top 10 Students",
		"date" : "June 1995 - May 1998"
	}
	],
	"certificates" : [
	{
		"name" : "Stanford Advanced Project Management",
		"organization" : "Stanford University",
		"timeframe" : "",
		"validity" : "Valid"
	},
	{
		"name" : "Sun Certified Java Programmer",
		"organization" : "Sun Microsystems",
		"timeframe" : "",
		"validity" : "Valid"
	},
	{
		"name" : "Front End Nanodegree",
		"organization" : "Udacity",
		"timeframe" : "",
		"validity" : "In progress"
	}
	],
	displaySchools : function() {
		$("#schools").append(HTMLeducationType.replace("%data%", "Schools Attended"));

		var schoolDetails = "",
		schools = this.schools;
		for (var i = 0, length = schools.length; i < length; i++) {
			$("#schools").append(HTMLschoolStart);

			schoolDetails = HTMLschoolName.replace("%data%", schools[i].name)
			.concat(HTMLschoolLocation.replace("%data%", schools[i].location))
			.concat(HTMLschoolDegree.replace("%data%", schools[i].degree)).replace("%num%", i).replace("%val%", i)
			.concat(HTMLschoolMajor.replace("%data%", schools[i].major))
			.concat(HTMLschoolDates.replace("%data%", schools[i].date));

			$(".education-entry:last").append(schoolDetails);
		}
	},

	displayCertificates : function() {
		$("#certificates").append(HTMLeducationType.replace("%data%", "Certificates Acquired"));

		var certDetails = "",
		certificates = this.certificates;
		for (var i = 0, length = certificates.length; i < length; i++) {
			$("#certificates").append(HTMLcertStart);

			certDetails = HTMLcertName.replace("%data%", certificates[i].name)
			.concat(HTMLcertOrg.replace("%data%", certificates[i].organization))
			.concat(HTMLcertValidity.replace("%data%", certificates[i].validity))
			.concat(HTMLcertDate.replace("%data%", certificates[i].timeframe));

			$(".education-entry:last").append(certDetails);
		}
	}
},
headerNavBar = {
	display : function() {
		$("#navigationBar").append(HTMLnavStart);
		$(".navigation").append(HTMLnavListStart);
		var navDetails = HTMLnavElement.replace("%data%", "work").replace("%Data%", "Work").replace("%funct%", "showWork")
		.concat(HTMLnavElement.replace("%data%", "education")).replace("%Data%", "Education").replace("%funct%", "showEducation")
		.concat(HTMLnavElement.replace("%data%", "project")).replace("%Data%", "Projects").replace("%funct%", "showProject")
		.concat(HTMLnavElement.replace("%data%", "location")).replace("%Data%", "Location").replace("%funct%", "showLocation")
		.concat(HTMLnavElement.replace("%data%", "about")).replace("%Data%", "About").replace("%funct%", "showAbout");

		$(".navbar:last").append(navDetails);
	}
};

/* Important helper functions */
function showWork() {
	document.getElementById('aboutMe').style.display = 'none';
	document.getElementById('workExperience').style.display = 'inline';
	document.getElementById('education').style.display = 'none';
	document.getElementById('projects').style.display = 'none';
	document.getElementById('map').style.display = 'none';
	document.getElementById('welcomeMsg').style.display = 'none';
}

function showEducation() {
	document.getElementById('aboutMe').style.display = 'none';
	document.getElementById('workExperience').style.display = 'none';
	document.getElementById('education').style.display = 'inline';
	document.getElementById('projects').style.display = 'none';
	document.getElementById('map').style.display = 'none';
	document.getElementById('welcomeMsg').style.display = 'none';
}

function showProject() {
	document.getElementById('aboutMe').style.display = 'none';
	document.getElementById('workExperience').style.display = 'none';
	document.getElementById('education').style.display = 'none';
	document.getElementById('projects').style.display = 'inline';
	document.getElementById('map').style.display = 'none';
	document.getElementById('welcomeMsg').style.display = 'none';
}

function showLocation() {
	document.getElementById('aboutMe').style.display = 'none';
	document.getElementById('workExperience').style.display = 'none';
	document.getElementById('education').style.display = 'none';
	document.getElementById('projects').style.display = 'none';
	document.getElementById('map').style.display = 'inline';
	document.getElementById('welcomeMsg').style.display = 'none';
	initializeMap();
}

function showAbout() {
	document.getElementById('workExperience').style.display = 'none';
	document.getElementById('education').style.display = 'none';
	document.getElementById('projects').style.display = 'none';
	document.getElementById('map').style.display = 'none';
	document.getElementById('aboutMe').style.display = 'inline';
	document.getElementById('welcomeMsg').style.display = 'inline';
}

function showAward(item) {
	if (item === 0) {
		return "<p>" + "GPA: " + education.schools[item].gpa + "</p>";
	} else {
		return "<p>" + "GPA: " + education.schools[item].gpa + "</p><p>Award: " + education.schools[item].awards + "</p>";
	}
}

/* About Section */
bio.display();

/* Navigation Bar Section */
headerNavBar.display();

/* Work Experience Section */
work.display();

/* Projects Section */
project.display();

/* Education Section */
education.displaySchools();
education.displayCertificates();

/* Maps Section */
$("#map-div").append(googleMapHeading);
$("#map-div").append(googleMap);

$(document).on("click", ".schoollink0", function(){
	var value = showAward(0);
	$(".school0-body").html(value);
});

$(document).on("click", ".schoollink1", function(){
	var value = showAward(1);
	console.log(value);
	$(".school1-body").html(value);
});

$(document).on("click", ".schoollink2", function(){
	var value = showAward(2);
	console.log(value);
	$(".school2-body").html(value);
});
