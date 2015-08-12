var formattedName = HTMLheaderName.replace("%data%", "Dave Figueroa");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Dave Figueroa",
	"role" : "Web Developer",
	"contact" : {
		"email" : "davefig@gmail.com"
	},
	"picture" : "/images/profilepic.png",
	"welcome" : "Welcome to my resume",
	"skills" : [
		"HTML",
		"CSS",
		"Javascript"
	]
};

var work = {
	"job" : [
		{
			"employer" : "Virginia Broadband",
			"title" : "Tower Climber / Field Technician",
			"dates" : "2014-2015",
			"location" : "Culpeper, VA",
			"description" : "Responsible for evaluating, installing and maintaining both wired and wireless networks along with all related network components and peripherals across a network spanning a geographical area of hundreds of square miles"
		}
	]
};

var projects = {

};

var education = {
	"school" : [
		{
			"name" : "Mary Washington College",
			"years" : "2001-2003",
			"city" : "Fredericksburg"
		}
	],
	"onlineCourse" : [
		{
			"name" : "Intro to Computer Science"
		},
		{
			"name" : "Applied Cryptography"
		}
	]
};

if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	for (each in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[each]));
	}
}

if (work.job) {
	for (each in work.job){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.job[each].employer));
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.job[each].title));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.job[each].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.job[each].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.job[each].description));
	}
}

// This logs the location of user screen clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
