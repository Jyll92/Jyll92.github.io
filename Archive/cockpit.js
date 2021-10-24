const portalButton = document.querySelector(".inportal");
const portal = document.querySelector(".portal");
const planet = document.querySelector(".planet");
const panel = document.querySelector(".panel");
const pitRight = document.querySelector(".rightcontainer");
const pitLeft = document.querySelector(".leftcontainer");
const pitMid = document.querySelector(".midcontainer");
const mission = document.querySelector(".mission");
const mdiv = document.querySelector(".main");
const spaceBar = document.querySelector(".navBar");

function pitAway() {
    pitRight.classList.add("rightcontainerAway");
    pitLeft.classList.add("leftcontainerAway");
    pitMid.classList.add("midcontainerAway");
    // Testing
    pitRight.style.paddingTop = "96px";
    pitLeft.style.paddingTop = "96px";
    pitMid.style.paddingTop = "96px";
}

function panelAway() {
    panel.classList.add("panelAway");
}

function missionAway() {
    mission.classList.add("missionAway");
}

function portalZoom() {
    portal.classList.add("portalZoom");
}
function portalAway() {
    portal.classList.add("portalAway");
}

function planetAway() {
    planet.classList.add("planetAway");
}
function buttonAway() {
    portalButton.classList.add("buttonAway");
    setTimeout(function() {
        portalButton.classList.add("buttonGone");
    },1900)
}

function UIChange() {
    panelAway();
    missionAway();
    portalZoom();
    planetAway();
    buttonAway();
    setTimeout(function() {
        portalAway();
        document.getElementById("background").src = "./Images/temp1.png";
    }, 1520);
    setTimeout(function() {
        pitAway()
    }, 1500);
    setTimeout(function() {
        document.querySelector(".navBar").style.display = "none";
    }, 1700);
    setTimeout(function() {
        // document.getElementById("background").style.display = "none";
        // document.body.style.background = "#0a0a0a";
        document.body.style.overflow = "initial";
        planet.style.display = "none";
        mission.style.display = "none";
        panel.style.display = "none";
        document.querySelector(".postPortal").style.display = "initial";
    }, 1800);
    setTimeout(function() {
        pitRight.style.display = "none";
        pitLeft.style.display = "none";
        pitMid.style.display = "none";
        document.querySelector(".main").style.display = "none";
        document.querySelector('.holo').play();
    }, 2300);
}
portalButton.addEventListener("click", () => {
    UIChange();
});