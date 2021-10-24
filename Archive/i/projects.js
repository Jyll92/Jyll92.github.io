const leftArrow = document.querySelector(".arrowLO");
const rightArrow = document.querySelector(".arrowRO");
const s1 = document.querySelector(".l1");
const s2 = document.querySelector(".l2");
const s3 = document.querySelector(".l3");
const wleftArrow = document.querySelector(".arrowL");
const wrightArrow = document.querySelector(".arrowR");
const ws1 = document.querySelector(".wl1");
const ws2 = document.querySelector(".wl2");
const ws3 = document.querySelector(".wl3");


leftArrow.addEventListener("click", () => {
  
  if ((document.querySelectorAll(".left2").length == 0)) {
    if (document.querySelectorAll(".left1").length == 0) {
      s1.classList.toggle("left1");
      s2.classList.toggle("left1");
      s3.classList.toggle("left1");
    } else {
      l1 = document.querySelectorAll(".left1");
      l1[0].classList.toggle("left2");
      l1[1].classList.toggle("left2");
      l1[2].classList.toggle("left2");
      l1[0].classList.toggle("left1");
      l1[1].classList.toggle("left1");
      l1[2].classList.toggle("left1");
    }
  } else {
    l2 = document.querySelectorAll(".left2");
    l2[0].classList.toggle("left2");
    l2[1].classList.toggle("left2");
    l2[2].classList.toggle("left2");
  }
});
rightArrow.addEventListener("click", () => {
  
  if ((document.querySelectorAll(".left1").length == 0)) {
    if (document.querySelectorAll(".left2").length == 0) {
      s1.classList.toggle("left2");
      s2.classList.toggle("left2");
      s3.classList.toggle("left2");
    } else {
      l1 = document.querySelectorAll(".left2");
      l1[0].classList.toggle("left1");
      l1[1].classList.toggle("left1");
      l1[2].classList.toggle("left1");
      l1[0].classList.toggle("left2");
      l1[1].classList.toggle("left2");
      l1[2].classList.toggle("left2");
    }
  } else {
    l2 = document.querySelectorAll(".left1");
    l2[0].classList.toggle("left1");
    l2[1].classList.toggle("left1");
    l2[2].classList.toggle("left1");
  }
});

wleftArrow.addEventListener("click", () => {
  
  if ((document.querySelectorAll(".wleft2").length == 0)) {
    if (document.querySelectorAll(".wleft1").length == 0) {
      ws1.classList.toggle("wleft1");
      ws2.classList.toggle("wleft1");
      ws3.classList.toggle("wleft1");
    } else {
      l1 = document.querySelectorAll(".wleft1");
      l1[0].classList.toggle("wleft2");
      l1[1].classList.toggle("wleft2");
      l1[2].classList.toggle("wleft2");
      l1[0].classList.toggle("wleft1");
      l1[1].classList.toggle("wleft1");
      l1[2].classList.toggle("wleft1");
    }
  } else {
    l2 = document.querySelectorAll(".wleft2");
    l2[0].classList.toggle("wleft2");
    l2[1].classList.toggle("wleft2");
    l2[2].classList.toggle("wleft2");
  }
});

wrightArrow.addEventListener("click", () => {
  
  if ((document.querySelectorAll(".wleft1").length == 0)) {
    if (document.querySelectorAll(".wleft2").length == 0) {
      ws1.classList.toggle("wleft2");
      ws2.classList.toggle("wleft2");
      ws3.classList.toggle("wleft2");
    } else {
      l1 = document.querySelectorAll(".wleft2");
      l1[0].classList.toggle("wleft1");
      l1[1].classList.toggle("wleft1");
      l1[2].classList.toggle("wleft1");
      l1[0].classList.toggle("wleft2");
      l1[1].classList.toggle("wleft2");
      l1[2].classList.toggle("wleft2");
    }
  } else {
    l2 = document.querySelectorAll(".wleft1");
    l2[0].classList.toggle("wleft1");
    l2[1].classList.toggle("wleft1");
    l2[2].classList.toggle("wleft1");
  }
});