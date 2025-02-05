/* Your JS here. */
console.log('Hello World!')

window.onscroll = function() {updateHeader()};


// // Get the header
var header = document.getElementById("header");
var profileHeader = document.getElementById("profile");
var interestsHeader = document.getElementById("interests");
var projectsHeader = document.getElementById("projects");
var demoHeader = document.getElementById("demo")


function updateHeader() {
  if (window.scrollY > 0) {
    header.classList.add("top");
  } else {
    header.classList.remove("top");
  }
  var currHeight = 60;
  console.log(currHeight)
  if (window.scrollY < 500) {
    
      header.style.height = 74 + "px";
      profileHeader.style.fontSize = 20 + "px";
      interestsHeader.style.fontSize = 20 + "px";
      projectsHeader.style.fontSize = 20 + "px";
      demoHeader.style.fontSize = 20 + "px";

    
  } else {
    header.style.height = 60 + "px";
    profileHeader.style.fontSize = 15 + "px";
    interestsHeader.style.fontSize = 15 + "px";
    projectsHeader.style.fontSize = 15 + "px";
    demoHeader.style.fontSize = 15 + "px";
  }

  requestAnimationFrame(updateHeader);
}

updateHeader();



window.onscroll = function() {updateNavBar()};
// NAVBAR INDICATOR
var profileSection = document.getElementById("profileSection");
var profilePosition = profileSection.getBoundingClientRect().top;

var interestSection = document.getElementById("interestSection");
var interestPosition = interestSection.getBoundingClientRect().top;

var projectSection = document.getElementById("projectSection");
var projectPosition = projectSection.getBoundingClientRect().top;

var videoSection = document.getElementById("videoSection");
var videoPosition = videoSection.getBoundingClientRect().top; 

function updateNavBar() {
  if (window.scrollY < (interestPosition - 310)) {
    profileHeader.style.borderStyle = "solid";
    interestsHeader.style.borderStyle = "hidden";
    projectsHeader.style.borderStyle = "hidden";
    demoHeader.style.borderStyle = "hidden";
  } else if (window.scrollY < projectPosition - 310) {
    profileHeader.style.borderStyle = "hidden";
    interestsHeader.style.borderStyle = "solid";
    projectsHeader.style.borderStyle = "hidden";
    demoHeader.style.borderStyle = "hidden";
  } else if (window.scrollY < videoPosition - 310) {
    profileHeader.style.borderStyle = "hidden";
    interestsHeader.style.borderStyle = "hidden";
    projectsHeader.style.borderStyle = "solid";
    demoHeader.style.borderStyle = "hidden";
  } else {
    profileHeader.style.borderStyle = "hidden";
    interestsHeader.style.borderStyle = "hidden";
    projectsHeader.style.borderStyle = "hidden";
    demoHeader.style.borderStyle = "solid";
  }
  requestAnimationFrame(updateNavBar);
}

// Header Smooth Scrolling
profileHeader.addEventListener("click", function() {
  var yheight = window.scrollY;
  var timer = setInterval(function() {
    if (yheight > 5) {
      window.scrollTo(0, yheight);
      yheight = yheight - 24;
    }
  }, 1);
  
  
});

interestsHeader.addEventListener("click", function() {
  var yheight = window.scrollY;

  if (yheight < interestPosition - 150) {
    var timer = setInterval(function() {
      if (yheight < interestPosition - 150) {
        window.scrollTo(0, yheight);
        yheight = yheight + 24;
      }
    }, 1);
  } else {
    var timer = setInterval(function() {
      if (yheight > interestPosition - 150) {
        window.scrollTo(0, yheight);
        yheight = yheight - 24;
      }
    }, 1);
  }
  
});

projectsHeader.addEventListener("click", function() {
  var yheight = window.scrollY;

  if (yheight < projectPosition - 150) {
    var timer = setInterval(function() {
      if (yheight < projectPosition - 150) {
        window.scrollTo(0, yheight);
        yheight = yheight + 24;
      }
    }, 1);
  } else {
    var timer = setInterval(function() {
      if (yheight > projectPosition - 150) {
        window.scrollTo(0, yheight);
        yheight = yheight - 24;
      }
    }, 1);
  }
});

demoHeader.addEventListener("click", function() {
  var yheight = window.scrollY;

  if (yheight < videoPosition - 50) {
    var timer = setInterval(function() {
      if (yheight < videoPosition - 50) {
        window.scrollTo(0, yheight);
        yheight = yheight + 24;
      }
    }, 1);
  } 
});





const nextSlide = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".slide");

let curSlide = 0;
let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});





var modal = document.getElementById("mlModal");

var btn = document.getElementById("mlBtn");

var span = document.getElementById("mlClose");

btn.onclick = function() {
  console.log("btn click")
  modal.style.display = "block";
}

span.onclick = function() {
  console.log("span click")
  modal.style.display = "none";
}



var modal1 = document.getElementById("dsModal");

var btn1 = document.getElementById("dsBtn");

var span1 = document.getElementById("dsClose");

btn1.onclick = function() {
  modal1.style.display = "block";
  console.log("btn1 click")
}

span1.onclick = function() {
  console.log("span1 click")
  modal1.style.display = "none";
}

var modal2 = document.getElementById("wpModal");

var btn2 = document.getElementById("wpBtn");

var span2 = document.getElementById("wpClose");

btn2.onclick = function() {
  modal2.style.display = "block";
  console.log("btn1 click")
}

span2.onclick = function() {
  console.log("span1 click")
  modal2.style.display = "none";
}



