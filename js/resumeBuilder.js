var formattedName = HTMLheaderName.replace("%data%", "Dave Figueroa");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Dave Figueroa",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "",
		"email" : "davefig@gmail.com",
		"github" : "",
		"twitter" : "",
		"location" : "Culpeper, VA"
	},
	"welcomeMessage" : "Welcome to my resume",
	"skills" : [
		"HTML",
		"CSS",
		"Javascript"
	],
	"biopic" : "/images/profilepic.png",
	"display" : ""
};

var work = {
	"jobs" : [
		{
			"employer" : "Virginia Broadband",
			"title" : "Tower Climber / Field Technician",
			"location" : "Culpeper, VA",
			"dates" : "2014-2015",
			"description" : "Responsible for evaluating, installing and maintaining both wired and wireless networks along with all related network components and peripherals across a network spanning a geographical area of hundreds of square miles"
		}
	],
	"display" : ""
};

var projects = {
	"item" : [
		{
			"title" : "Portfolio",
			"dates" : "July 2015 - August 2015",
			"description" : "Project One was the portfolio project",
			"images" : []
		}
	],
	"display" : ""
};

var education = {
	"schools" : [
		{
			"name" : "Mary Washington College",
			"location" : "Fredericksburg, VA",
			"degree" : "",
			"majors" : [],
			"dates" : "2001-2003",
			"url" : ""
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to Computer Science",
			"school" : "",
			"date" : "",
			"url" : "",
		},
		{
			"title" : "Applied Cryptography",
			"school" : "",
			"date" : "",
			"url" : "",
		}
	],
	"display" : ""
};

if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	for (each in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[each]));
	}
}

if (work.jobs) {
	for (each in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[each].employer));
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[each].title));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[each].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[each].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[each].description));
	}
}

projects.display = function() {
	for (each in projects.item){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.item[each].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.item[each].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.item[each].description));
	}
}

projects.display();

// This logs the location of user screen clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#mapDiv").append(googleMap);