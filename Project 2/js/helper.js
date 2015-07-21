var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h4 id="role">%data%</h4>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="Bio Picture">';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobileHeader = '<div class="right-side col-md-6"><a href="tel:%data%">Call Nirmala</a></div>';
var HTMLemailHeader = '<div class="left-side clear-side col-md-6"><a href="mailto:%data%?subject=Regarding your resume&body=">Email Nirmala</a></div>';

var HTMLmobile = '<li class="flex-item"><span class="orange-text">Mobile: </span><span class="white-text"><a href="tel:%data%">%data%</a></span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">Email: </span><span class="white-text"><a href="mailto:%data%?subject=Regarding your resume&body=">%data%</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">Twitter: </span><span class="white-text">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text">LinkedIn: </span><span class="white-text"><a href="%data%">%data%</a></span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">Github: </span><span class="white-text"><a href="%data%">%data%</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text"><a href="%data%">%data%</a></span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">Location: </span><span class="white-text">%data%</span></li>';

var HTMLnavStart = '<nav class="navigation"></nav>';
var HTMLnavListStart = '<ul class="navbar"></ul>';
var HTMLnavElement = '<a href="#" onclick="%funct%()" id="%data%-nav"><li>%Data%</li></a>';

var HTMLwelcomeMsg = '<span class="welcome-message" id="welcomeMsg">%data%</span>';
var HTMLcoverLetter = '<article class="coverLetter coverLetter-body">%data%</article>'

var HTMLskillsStart = '<h4 id="skills-h3" class="skills-heading heading-about">Skills I Bring Along</h4><ul id="skills" class="flex-box skills-class"></ul>';
var HTMLskills = '<li class="flex-item skills-class"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class="align-work"><h4 class="work-employer">%data%</h4></div>';
var HTMLworkTitle = '<div class="align-title"><h5 class="work-title">%data%</h5></div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text align-work">%data%</div>';
var HTMLworkDescription = '<p class="work-details">%data%</p>';
var HTMLworkType = '<h3 class="work-type">%data%</h3>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h4 class="project-title">%data%</h4>';
var HTMLprojectDates = '<div class="date-text project-date">%data%</div>';
var HTMLprojectDescription = '<div class="project-details">%data%</div>';
var HTMLprojectImage = '<img src="%data%" alt="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="school-name">%data%</div>';
var HTMLschoolDegree = '<a href="#school" data-toggle="modal" data-target="#school%num%" class="schoollink%val%">%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="school-location">%data%</div>';
var HTMLschoolMajor = '<em class="major"> (%data%)</em>';
var HTMLeducationType = '<h3 class="education-type">%data%</h3>';

var HTMLcertStart = '<div class="education-entry"></div>';
var HTMLcertName = '<div class="cert-name">%data%</div>';
var HTMLcertDate = '<div class="cert-date date-text">%data%</div>';
var HTMLcertOrg = '<div class="cert-org">%data%</div>';
var HTMLcertValidity = '<div class="cert-validity">%data%</div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMapHeading = "<h2>Locations</h2>";
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
  {
    x: x,
    y: y
  }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;
  var locationDetails;
  var counter = 0, 
  mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };


  map = new google.maps.Map(document.querySelector('#map-div'), mapOptions);

  // map.fitBounds(bounds);

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(map.getCenter());
    google.maps.event.trigger(map, "resize");
  });

  google.maps.event.addListenerOnce(map, 'idle', function() {
    map.setCenter(map.getCenter());
    google.maps.event.trigger(map, 'resize');
  });

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contact.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    var workArray = work.job.concat(work.internship).concat(work.volunteer);
    for (var job in workArray) {
      locations.push(workArray[job].location);
    }

    return locations;
  }

  function detailsFinder() {

    // initializes an empty array
    var details = [];

    // adds the single location property from bio to the locations array
    details.push("Currently resides in USA and is authorized to work");

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      details.push("Attended " + education.schools[school].name);
    }

    // iterates through work locations and appends each location to
    // the locations array
    var workArray = work.job.concat(work.internship).concat(work.volunteer);
    for (var job in workArray) {
      if (workArray[job].company === "Stealth Mode Startup") {
        details.push("Works for a " + workArray[job].company);
      } else {
        details.push("Was employed in " + workArray[job].company);
      }
    }

    return details;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData, detail) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: detail
    });

    // console.log(name + " " + detail);

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: detail
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
      setTimeout(function () 
      { 
        infoWindow.close(); 
      }, 2000);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      counter++;
      createMapMarker(results[0], locationDetails[counter-1]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();
  locationDetails = detailsFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

$(document).ready(function() {
  $(window).resize(function() {
    google.maps.event.trigger(map, 'resize');
  });
  google.maps.event.trigger(map, 'resize');
});
