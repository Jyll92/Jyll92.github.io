let currentLocation = "home";
let form;

const Projects = document.querySelector(`#Projects`);
Projects.addEventListener(`click`, () => {
  LoadProjects();
});
const Home = document.querySelector(`#Home`);
Home.addEventListener(`click`, () => {
  LoadHome();
});
const Contact = document.querySelector(`#Contact`);
Contact.addEventListener(`click`, () => {
  LoadContact();
});

function LoadProjects() {
  mainWindow = document.querySelector(`#mainContent`);

  mainWindow.classList.add("fadeOut");

  setTimeout(() => {
    mainWindow.innerHTML = ``;
    if (currentLocation == "contact") {
      mainWindow.classList.remove("mainGrid");
      mainWindow.classList.add("mainFlex");
    }
    currentLocation = "projects";
    mainWindow.classList.remove("fadeOut");

    mainWindow.insertAdjacentHTML(
      "beforeend",
      '<div id="projectOne"><div class="container"><a href="./Archive/home.html" target="_blank"><h3>Sci-Fi Web Site</h3><p>This page contains an animated starfield landing page, a spaceship made from SVG elements, and a Blender model exported into After Effects. I had an idea and tried some new things to make it happen. I didnt love the results, but I learned from the process.</p></a></div><video src="./Videos/Portal.mp4" id="projectVidOne" loop muted></video></div></div>'
    );
    projectOne = document.querySelector(`#projectOne`);

    setTimeout(() => {
      projectOne.style.transform = "translateX(0)";
      projectOne.onmouseover = function () {
        projectOne.style.transform = "scaleY(1.2)";
      };
      projectOne.onmouseout = function () {
        projectOne.style.transform = "scaleY(1)";
      };
    }, 10);

    mainWindow.insertAdjacentHTML(
      "beforeend",
      '<div id="projectTwo"><video src="./Videos/Asteroids.mp4" id="projectVidTwo" loop muted></video><div class="container"><a href="./Archive/Asteroids.html" target="_blank"><h3>Asteroids</h3><p>The classic arcade game built in javascript. This version also contains a nerual network you can toggle on for auto aiming; it tracks the closest asteroid.</p></a></div></div>'
    );
    projectTwo = document.querySelector(`#projectTwo`);

    setTimeout(() => {
      projectTwo.style.transform = "translateX(0)";
      projectTwo.onmouseover = function () {
        projectTwo.style.transform = "scaleY(1.2)";
      };
      projectTwo.onmouseout = function () {
        projectTwo.style.transform = "scaleY(1)";
      };
    }, 400);

    mainWindow.insertAdjacentHTML(
      "beforeend",
      '<div id="projectThree"><div class="container"><a href="https://github.com/Jyll92/" target="_blank"><h3>More Projects</h3><p>Follow me on Github to keep up with my latest projects!</p><i class="fab fa-github"></i></a></div><div class="container"><a href="./Archive/Project/PhotoSite/Gallery.html"><h3>Photo Gallery</h3><p>This was one of my first projects. Hexagon frames with a falling text "Matrix" style effect. </p></a></div><video src="./Videos/PhotoPreview.mp4" id="projectVidThree" loop muted></video></div>'
    );
    projectThree = document.querySelector(`#projectThree`);

    setTimeout(() => {
      projectThree.style.transform = "translateX(0)";
      projectThree.onmouseover = function () {
        projectThree.style.transform = "scaleY(1.2)";
      };
      projectThree.onmouseout = function () {
        projectThree.style.transform = "scaleY(1)";
      };
    }, 800);

    setTimeout(() => {
      projectOne.classList.add("newTrans");
      projectTwo.classList.add("newTrans");
      projectThree.classList.add("newTrans");
    }, 1000);
    setTimeout(() => {
      let vid1 = document.querySelector(`#projectVidOne`);
      vid1.play();
    }, 1600);
    setTimeout(() => {
      let vid2 = document.querySelector(`#projectVidTwo`);
      vid2.play();
    }, 1800);
    setTimeout(() => {
      let vid3 = document.querySelector(`#projectVidThree`);
      vid3.play();
    }, 2000);
  }, 400);
}

function LoadHome() {
  mainWindow = document.querySelector(`#mainContent`);
  mainWindow.classList.add("fadeOut");

  setTimeout(() => {
    mainWindow.classList.remove("fadeOut");
    mainWindow.innerHTML = ``;

    if (currentLocation == "contact") {
      mainWindow.classList.remove("mainGrid");
      mainWindow.classList.add("mainFlex");
      console.log("hi");
    }

    currentLocation = "home";

    mainWindow.insertAdjacentHTML(
      "beforeend",
      '<div id="info"><h1>Jyll Ataru</h1><h2>Web Developer & Software Engineer</h2><p>I am an aspiring software developer looking for new oppourtunities. Currently attending the Comonwealth Coders Web Developer program. Im adaptable and enjoy learning new things. Check out my projects or contact me to learn more.</p></div><img id="selfImg" src="./Images/self.png" alt="Picture of Jyll standing"><div id="skills"><ul><li><i class="fab fa-js-square"></i>Javascript</li><li><i class="fab fa-html5"></i>HTML</li><li><i class="fab fa-css3-alt"></i>CSS</li><li><i class="fab fa-git-alt"></i>Git</li><li><i class="fab fa-react"></i>React</li><li><i class="fab fa-node"></i>Node.js</li><li><i class="fas fa-server"></i>MongoDB</li><li><i class="fab fa-node-js"></i>Express</li><li><i class="fab fa-js-square"></i>Javascript</li><li><i class="fab fa-html5"></i>HTML</li><li><i class="fab fa-css3-alt"></i>CSS</li><li><i class="fab fa-git-alt"></i>Git</li><li><i class="fab fa-react"></i>React</li><li><i class="fab fa-node"></i>Node.js</li></ul></div>'
    );
  }, 400);
}

function LoadContact() {
  mainWindow = document.querySelector(`#mainContent`);
  mainWindow.classList.add("fadeOut");

  currentLocation = "contact";
  setTimeout(() => {
    mainWindow.classList.remove("fadeOut");
    mainWindow.classList.remove("mainFlex");
    mainWindow.classList.add("mainGrid");
    mainWindow.innerHTML = ``;

    mainWindow.insertAdjacentHTML(
      "beforeend",
      '<div id="contactContainer"><h3>Contact Me</h3><form action="https://formspree.io/f/xknkeawe" method="POST" id="my-form"><div class="form-group"><label for="name">Name:</label><input type="text" id="name" name="name" <input type="text" id="name" name="name" placeholder="Enter Name" required></div><div class="form-group"><label for="email">Email:</label><input type="email" id="email" name="email" placeholder="Enter Email" required></div><div class="form-group"><textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Message . . ." required></textarea></div><button type="submit">Send Message</button></form><div id="status" class=""></div></div><div id="directContact"><a href="./Files/Jyll.Wright.pdf" target="_blank"><h2>View Resume</h2><img src="./Images/resumePreview.png" alt="Preview of Resume"></a><h3>or Email Me Directly</h3><h4>Jyll@JyllAtaru.com</h4><div class="icons"><a href="https://github.com/Jyll92/"><i class="fab fa-github-square"></i></a><a href="www.linkedin.com/in/jyll-wright"><i class="fab fa-linkedin"></i></a></div></div>'
    );
    form = document.getElementById("my-form");
    form.addEventListener("submit", handleSubmit);
  }, 800);
}

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Success, thanks for the message!";
      status.classList.add("success");
      form.reset();
      setTimeout(function () {
        status.innerHTML = "";
        status.classList.remove("success");
      }, 4000);
    })
    .catch((error) => {
      status.innerHTML = "Error: Form not Submitted";
      status.classList.add("error");
      setTimeout(function () {
        status.innerHTML = "";
        status.classList.remove("error");
      }, 4000);
    });
}
