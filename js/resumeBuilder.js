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

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact.email);
$("#main").append(bio.picture);
$("#main").append(bio.welcome);
$("#main").append(bio.skills);

var work = {
	"employer" : [
		{
			"name" : "Virginia Broadband",
			"position" : "Tower Climber",
			"years" : 1,
			"city" : "Culpeper"
		}
	]
};

$("#main").append(work.employer[0].position);

var education = {
	"school" : [
		{
			"name" : "Mary Washington College",
			"years" : "2001-2003",
			"city" : "Fredericksburg"
		}
	]
};

$("#main").append(education.school[0].name);