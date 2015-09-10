var bio = {
	"name" : "Dave Figueroa",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "abc",
		"email" : "davefig@gmail.com",
		"github" : "xyz",
		"twitter" : "123",
		"location" : "Culpeper, VA"
	},
	"welcomeMessage" : "Welcome to my resume",
	"skills" : [
		"HTML",
		"CSS",
		"Javascript"
	],
	"biopic" : "images/profilepic.png",
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

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	if (bio.contacts) {
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	}
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	if (bio.skills) {
		$("#header").append(HTMLskillsStart);
		for (each in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[each]));
		}
	}
}

work.display = function() {
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
}

projects.display = function() {
	for (each in projects.item){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.item[each].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.item[each].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.item[each].description));
	}
}

education.display = function() {
	if (education.schools){
		for (each in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[each].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[each].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[each].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[each].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[each].major));
		}
	}
	if (education.onlineCourses){
		$("#education").append(HTMLonlineClasses);
		for (each in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[each].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[each].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[each].date));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[each].url));
		}
	}
}

projects.display();
bio.display();
work.display();
education.display();

// This logs the location of user screen clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#mapDiv").append(googleMap);