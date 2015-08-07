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

var work = {};
work.position = "Tower Climber";
work.company = "Virigia Broadband";
work.years = 1;
work.city = "Culpeper";

$("#main").append(work.position);

var education = {};
education["school"] = "Mary Washington College";
education["years"] = "2001-2003";
education["city"] = "Fredericksburg";

$("#main").append(education["school"]);