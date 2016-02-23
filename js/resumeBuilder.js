/*$("#main").append("Jayampathy");*/

/*var newFormattedName = HTMLheaderName.reemployer('%data%', 'Jayampathy Wijesena');

var newFormattedrole = HTMLheaderrole.reemployer('%data%', 'Front End Web Developer');

$("#header").append(newFormattedName);*/

var bio = {
    name : "Jayampathy Wijesena",
    role : "Front End Web Developer",
    contactInfo : {
        mob : "0759494955",
        email : "test.test@test.com",
        address : "88/7, walpola road, angoda",
        github : "jayampathiw",
        twitter : "0759494955",
        blog : "test.blog.com",
        location : "www.tets.com"
    },
    pictureURL : "images/fry.jpg",
    welcomMessage : "Working as a Lead Software Engineer in Colombo, Sri Lanka. Thanks for stopping by!",
    skills : ["java", "javascript", "jquery", "html", "sql"]

}

var newFormattedName = HTMLheaderName.replace('%data%', bio.name);
var newFormattedrole = HTMLheaderRole.replace('%data%', bio.role);
$("#header").append(newFormattedName);
$("#header").append(newFormattedrole);

var newHTMLmobile = HTMLmobile.replace('%data%', bio.contactInfo.mob);
newHTMLmobile = newHTMLmobile.replace('flex-item', 'flex-item skill-item');
$("#header").append(newHTMLmobile);

var newHTMLemail = HTMLemail.replace('%data%', bio.contactInfo.email);
newHTMLemail = newHTMLemail.replace('flex-item', 'flex-item skill-item');
$("#header").append(newHTMLemail);

var newHTMLtwitter = HTMLtwitter.replace('%data%', bio.contactInfo.twitter);
newHTMLtwitter = newHTMLtwitter.replace('flex-item', 'flex-item skill-item');
$("#header").append(newHTMLtwitter);

var newHTMLgithub = HTMLgithub.replace('%data%', bio.contactInfo.github);
newHTMLgithub = newHTMLgithub.replace('flex-item', 'flex-item skill-item');
$("#header").append(newHTMLgithub);

var newHTMLblog = HTMLblog.replace('%data%', bio.contactInfo.blog);
newHTMLblog = newHTMLblog.replace('flex-item', 'flex-item skill-item');
$("#header").append(newHTMLblog);

var newHTMLlocation = HTMLlocation.replace('%data%', bio.contactInfo.location);
$("#header").append(newHTMLlocation);

var newHTMLbioPic = HTMLbioPic.replace('%data%', bio.pictureURL);
$("#header").append(newHTMLbioPic);

var newHTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomMessage);
$("#header").append(newHTMLwelcomeMsg);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  for(i in bio.skills){
    var newFormattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
    $("#header").append(newFormattedSkills);
  }
}



//work object
var work = {
    jobs : [{
        employer : "EBTC",
        role : "ATL",
        dates : "Dec 2010 - present",
        location : "Colombo Sri Lanka",
        description : "Involved in front end development"
    },
    {
        employer : "RezGateway",
        role : "SE",
        dates : "Nov 2009 - Nov 2010",
        location : "Colombo Sri Lanka",
        description : "Involved in front end development"
    },
    {
        employer : "Virtusa",
        role : "SE",
        dates : "Mar 2008 - Nov 2009",
        location : "Colombo Sri Lanka",
        description : "Involved in front end development"
    }]
}

function dispalyWork(){
  if(work.jobs.length > 0){
    for(i in work.jobs){
      var job = work.jobs[i];
      $("#workExperience").append(HTMLworkStart);
      var newHTMLworkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
      var newHTMLworkTitle = HTMLworkTitle.replace('%data%', job.role);
      var newWorkTiltle = newHTMLworkEmployer + newHTMLworkTitle;

      $(".work-entry:last").append(newWorkTiltle);

      var newHTMLworkDates = HTMLworkDates.replace('%data%', job.dates);
      var newHTMLworkLocation = HTMLworkLocation.replace('%data%', job.location);
      var newTMLworkDescription = HTMLworkDescription.replace('%data%', job.description);

      $(".work-entry:last").append(newHTMLworkDates);
      $(".work-entry:last").append(newHTMLworkLocation);
      $(".work-entry:last").append(newTMLworkDescription);

    }
  }
}

dispalyWork();

//projecs
var projects = {
    projectDetails : [{
        name : "Test Project 1",
        dates : "2014",
        descriptions : "This is test infomation for this test project 1",
        imgeURLs : ["images/197x148.gif","images/197x148.gif"]
    },
    {
        name : "Test Project 2",
        dates : "2015",
        descriptions : "This is test infomation for this test project 2",
        imgeURLs : ["images/197x148.gif","images/197x148.gif"]
    }]
}

projects.display = function () {
    $("#projects").append(HTMLprojectStart);
    for(i in projects.projectDetails){
        var projectDetails = projects.projectDetails[i];
        var newHTMLprojectTitle= HTMLprojectTitle.replace('%data%', projectDetails.name);
        var newHTMLprojectDates= HTMLprojectDates.replace('%data%', projectDetails.dates);
        var newHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projectDetails.descriptions);

        $(".project-entry:last").append(newHTMLprojectTitle);
        $(".project-entry:last").append(newHTMLprojectDates);
        $(".project-entry:last").append(newHTMLprojectDescription);

        for(j in projectDetails.imgeURLs){
            var img = projectDetails.imgeURLs[j];
            var newHTMLprojectImage = HTMLprojectImage.replace('%data%', img);
            $(".project-entry:last").append(newHTMLprojectImage);
        }

    }
}

projects.display();

//Education
var education = {
    acadamic : [{
        provider : "Test University",
        location : "Colombo, SL",
        role : "Masters",
        year : "2016",
        result : "Major CS",
        url : "www.testurl.com"
    },
    {
        provider : "Test University",
        location : "Colombo, SL",
        role : "Bachulers",
        year : "2012",
        result : "Major CS",
        url : "www.testurl.com"
    }]
    ,online : [{
        title : "Front End Web Developer",
        school : "Udacity",
        year : "2016",
        url : "www.testurl.com"
    }]
}

function dispalyEducation(){
    $("#education").append(HTMLschoolStart);
    for(i in education.acadamic){
        var acadamic = education.acadamic[i];

        var newHTMLschoolName = HTMLschoolName.replace('%data%', acadamic.provider);
        var newHTMLschoolDegree = HTMLschoolDegree.replace('%data%', acadamic.role);
        var newHTMLschoolDates = HTMLschoolDates.replace('%data%', acadamic.year);
        var newHTMLschoolLocation = HTMLschoolLocation.replace('%data%', acadamic.location);
        var newHTMLschoolMajor = HTMLschoolMajor.replace('%data%', acadamic.result);

        $(".education-entry:last").append(newHTMLschoolName + newHTMLschoolDegree);
        $(".education-entry:last").append(newHTMLschoolDates);
        $(".education-entry:last").append(newHTMLschoolLocation);
        $(".education-entry:last").append(newHTMLschoolMajor);

    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for(i in education.online){
        var online = education.online[i];
        var newHTMLonlineTitle = HTMLonlineTitle.replace('%data%', online.title);
        var newHTMLonlineSchool = HTMLonlineSchool.replace('%data%', online.school);
        var newHTMLonlineDates = HTMLonlineDates.replace('%data%', online.year);
        var newHTMLonlineURL = HTMLonlineURL.replace('%data%', online.url);

        $(".education-entry:last").append(newHTMLonlineTitle + newHTMLonlineSchool);
        $(".education-entry:last").append(newHTMLonlineDates);
        $(".education-entry:last").append(newHTMLonlineURL);
    }
}

dispalyEducation();

$("#mapDiv").append(googleMap);



