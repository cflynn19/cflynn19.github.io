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
    
      header.style.height = 60 + "px";
      profileHeader.style.fontSize = 20 + "px";
      interestsHeader.style.fontSize = 20 + "px";
      projectsHeader.style.fontSize = 20 + "px";
      demoHeader.style.fontSize = 20 + "px";

    
  } else {
    header.style.height = 48 + "px";
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
      yheight = yheight - 34;
    }
  }, 1);
  
  
});

interestsHeader.addEventListener("click", function() {
  var yheight = window.scrollY;

  if (yheight < interestPosition - 150) {
    var timer = setInterval(function() {
      if (yheight < interestPosition - 150) {
        window.scrollTo(0, yheight);
        yheight = yheight + 34;
      }
    }, 1);
  } else {
    var timer = setInterval(function() {
      if (yheight > interestPosition - 150) {
        window.scrollTo(0, yheight);
        yheight = yheight - 34;
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
        yheight = yheight + 34;
      }
    }, 1);
  } else {
    var timer = setInterval(function() {
      if (yheight > projectPosition - 150) {
        window.scrollTo(0, yheight);
        yheight = yheight - 34;
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
        yheight = yheight + 34;
      }
    }, 1);
  } 
});





const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");

let curSlide = 0;
let maxSlide = slides.length - 1;

// Initialize the slider by setting the first slide correctly
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});

// Next slide button click handler
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

// Previous slide button click handler
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





// var modal = document.getElementById("mlModal");

// var btn = document.getElementById("mlBtn");

// var span = document.getElementById("mlClose");

// btn.onclick = function() {
//   console.log("btn click")
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   console.log("span click")
//   modal.style.display = "none";
// }



// var modal1 = document.getElementById("dsModal");

// var btn1 = document.getElementById("dsBtn");

// var span1 = document.getElementById("dsClose");

// btn1.onclick = function() {
//   modal1.style.display = "block";
//   console.log("btn1 click")
// }

// span1.onclick = function() {
//   console.log("span1 click")
//   modal1.style.display = "none";
// }

// var modal2 = document.getElementById("wpModal");

// var btn2 = document.getElementById("wpBtn");

// var span2 = document.getElementById("wpClose");

// btn2.onclick = function() {
//   modal2.style.display = "block";
//   console.log("btn1 click")
// }

// span2.onclick = function() {
//   console.log("span1 click")
//   modal2.style.display = "none";
// }

// Function to create and insert the modal into the DOM
function createModal(modalId, btnId, closeId, content, title) {
  // Check if modal already exists to prevent duplication
  if (document.getElementById(modalId)) return;

  // Create modal HTML structure
  var modal = document.createElement("div");
  modal.id = modalId;
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <span id="${closeId}" class="close">&times;</span>
        <h2>${title}</h2>
      </div>
      <div class="modal-body">
        <p>${content}</p>
      </div>
    </div>
  `;

  // Append to body
  document.body.appendChild(modal);

  // Attach event listeners
  var btn = document.getElementById(btnId);
  var span = document.getElementById(closeId);

  if (btn) {
    btn.onclick = function () {
      console.log("btn click");
      modal.style.display = "block";
    };
  }

  if (span) {
    span.onclick = function () {
      console.log("span click");
      modal.style.display = "none";
    };
  }

  // Close modal when clicking outside the content
  modal.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Call this function for each modal
createModal("mlModal", "mlBtn", "mlClose", "With hands-on experience in full-stack development, I have designed and deployed scalable applications using technologies like React.js, Node.js, and MongoDB. As a Course Assistant for CS222, I mentored students on full-stack projects, ensuring structured development and smooth GitHub workflows. I led the development of Planterra, a MERN stack application integrating Firebase authentication and external APIs to enhance plant-care recommendations. Additionally, I contributed to UIUC Apartment Finder, implementing SQL databases and search filters for an optimized user experience.", "Full Stack Development");
createModal("dsModal", "dsBtn", "dsClose", "As a Mobile Software Developer Intern at Planter, I played a key role in enhancing a widely used gardening app with over 100,000 monthly users. I developed in-app features like plant nutrition details and interactive soil pH information, improving user engagement. Additionally, I facilitated a database migration from Firebase Realtime Database to Firestore, significantly improving scalability and query efficiency. My experience with Flutter and Firebase authentication in other projects further reinforces my ability to build secure, responsive, and feature-rich mobile applications.", "Mobile App Development");
createModal("wpModal", "wpBtn", "wpClose", "I have applied machine learning techniques to real-world financial data, developing and fine-tuning Recurrent Neural Network models for cryptocurrency price prediction. My project demonstrated profitability through rigorous backtesting on historical order book data, achieving consistent performance across 200 test cases. By integrating ML Ops with ML Flow API, I improved model tracking and reproducibility. My ability to implement data pipelines, optimize models, and manage experiments highlights my expertise in AI-driven financial strategies and predictive analytics.", "Machine Learning");





const text1_options = [
  "Why art is so important",
  "Why you shouldn't buy the new iPhone",
  "Is life actually real?",
  "How to learn JS in 2 months"
];
const text2_options = [
  "69 min. read",
  "7 min. read",
  "8 min. read",
  "87,658.1277 min. read"
];
const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
const image_options = [
  "https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1506073828772-2f85239b6d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};