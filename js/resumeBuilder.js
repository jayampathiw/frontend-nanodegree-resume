var data = "%data%";
var $header = $("#header");
var bio = {
  "name": "Jayampathy Wijesena",
  "role": "Front End Developer",
  "contacts": {
    "mobile": "0759494955",
    "email": "udayanga5@gmail.com",
    "github": "@jayampathiw",
    "location": "Colombo"
    },
  "welcomeMessage": "Hello, welcome to my world!",
  "skills": ["HTML", "CSS", "JavaScript", "Jquery"],
  "biopic": "images/fry.jpg",
  "display": function(){
    var my_name = HTMLheaderName.replace(data, bio.name);
    var role = HTMLheaderRole.replace(data, bio.role);
    var mobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var email = HTMLemail.replace(data, bio.contacts.email);
    var github = HTMLgithub.replace(data, bio.contacts.github);
    var my_location = HTMLlocation.replace(data, bio.contacts.location);
    var welcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var pic = HTMLbioPic.replace(data, bio.biopic);
    $header.prepend(my_name);
    $("#name").append(role);
    $header.append(pic, welcome);
    $header.append(HTMLskillsStart);
    $("#topContacts").append(mobile, email, github, my_location);
    $("#footerContacts").append(mobile, email, github, my_location);
    $("<hr>").insertAfter("#topContacts").css({"margin-bottom": "10px"});

    for (var skill in bio.skills){
      var my_skills = HTMLskills.replace(data, bio.skills[skill]);
      $("#skills").append(my_skills);
    }
  }
};

bio.display();

var work = {
  "jobs": [{
    "employer": "eBuilder",
    "title": "Associate Tec Lead",
    "dates": "November 2010 - Current",
    "location": "Colombo",
    "description": "Worked in front end develpmnet using JQuery, javascript and bootsrap"
},{
    "employer": "Rezgateway",
    "title": "Software Engineer",
    "dates": "October 2008 - November 2009",
    "location": "Colombo",
    "description": "Worked in Development using struts and relational database."
},{
    "employer": "Virtusa",
    "title": "Associate Software Engineer",
    "dates": "March 2008 - October 2009",
    "location": "Colombo",
    "description": "Worked in front end develpmnet using JQuery, javascript and bootsrap"
}],
  "display": function(){
    work.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);
      var added_employer = HTMLworkEmployer.replace(data, job.employer);
      var added_title = HTMLworkTitle.replace(data, job.title);
      var added_employer_title = added_employer + added_title;
      var added_job_desc = HTMLworkDescription.replace(data, job.description);
      var work_dates = HTMLworkDates.replace(data, job.dates);
      $(".work-entry:last").append(added_employer_title);
      $(".work-entry:last").append(work_dates);
      $(".work-entry:last").append(added_job_desc);
    });
  }
};

work.display();

var projects = {
  "projects": [{
    "title": "Test Project 1" ,
    "dates": "November 2010 - Current",
    "description": "Worked as Developer",
    "images": ["images/197x148.gif"]
    },
    {
    "title": "Test Project 2" ,
    "dates": "October 2008 - November 2009",
    "description": "One year project that assisted with web development",
    "images": ["images/197x148.gif"]
    },
    {
    "title": "Test Project 3" ,
    "dates": "March 2008 - October 2009",
    "description": "One year project that assisted with web development",
    "images": ["images/197x148.gif"]
    }],
  "display": function(){
    projects.projects.forEach(function(project){
      $("#projects").append(HTMLprojectStart);
      var added_title = HTMLprojectTitle.replace(data, project.title);
      $(".project-entry:last").append(added_title);
      var added_dates = HTMLprojectDates.replace(data, project.dates);
      $(".project-entry:last").append(added_dates);
      var added_description = HTMLprojectDescription.replace(data, project.description);
      $(".project-entry:last").append(added_description);
      if (project.images.length > 0){
        project.images.forEach(function(img){
          var addedImage = HTMLprojectImage.replace(data, img);
          $(".project-entry:last").append(addedImage);
        });
      }
    });
  }
};
projects.display();

var education = {
  "schools": [{
    "school": "BCS - The Chartered Institute for IT",
    "degree": "Bachelor of Science",
    "majors": ["Sofware Engineering"],
    "url": "https://www.bcs.org/",
    "dates": "April 2009 - March 2012",
    "location": "Colombo, Sri Lanka"
    },{
    "school": "National Institute of Business Management",
    "degree": "Diploma in Computer System Design ( DCSD )",
    "majors": ["Computer System Design"],
    "url": "https://www.nibm.lk",
    "dates": "April 2003 - March 2004",
    "location": "Colombo, Sri Lanka"
    }],
  "onlineCourses": [{
    "school": "Udacity",
    "date": "February 2016 - Current",
    "course": "Front End Nanodegree Program",
    "url": "https://www.udacity.com"
    }],
  "display": function(){
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(sch){

      var school_name = HTMLschoolName.replace("#", sch.url).replace(data, sch.school);
      var school_degree = HTMLschoolDegree.replace(data, sch.degree);
      var add_school_location = HTMLschoolLocation.replace(data, sch.location);
      var schoolName_degree_location = school_name + add_school_location + school_degree;
      var add_school_date = HTMLschoolDates.replace(data, sch.dates);
      var add_school_major = HTMLschoolMajor.replace(data, sch.majors);

      $(".education-entry").append(schoolName_degree_location);
      $(".education-entry").append(add_school_date);
      $(".education-entry").append(add_school_major);
    });
    education.displayOnlineEducation();
  },
  "displayOnlineEducation": function(){
    $(".education-entry").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(online){
        var add_online_school = HTMLonlineSchool.replace(data, online.school).replace("#", online.url);
        var add_online_url = HTMLonlineURL.replace(data, online.url);
        var add_school_url = add_online_school + add_online_url;
        var add_online_date = HTMLonlineDates.replace(data, online.date);
        var add_online_title = HTMLonlineTitle.replace(data, online.course);
        $(".education-entry").append(add_school_url);
        $(".education-entry").append(add_online_date);
        $(".education-entry").append(add_online_title);
    });
  }
};
/***************************Appending to main HTML***************************/
/***************************Replaced data variables***************************/
education.display();

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  lastName = name[1].toUpperCase();
  name_1 = name[0].slice(0,1).toUpperCase();
  var firstName = name_1 + name[0].slice(1).toLowerCase();

  return firstName + " " + lastName;
}

$('#main').append(internationalizeButton);

console.log(inName(bio.name));


$("#mapDiv").append(googleMap);
