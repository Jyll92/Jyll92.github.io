var canvas = document.querySelector(".starfield");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// constants
const COLOR_SPACE = "#000000FF";
const COLOR_STARS = "white";
const STAR_NUM = 200; // number of stars in the starfield
const STAR_SIZE = 0.005; // max star size as a fraction of screen width
const STAR_SPEED = 0.05; // fraction of screen width per second
const FPS = 90; // Frames Per Sec

// Set up the stars
var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xv = starSpeed * randomSign() * Math.random();
// Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
for (let i = 0; i < STAR_NUM; i++) {
    let speedMult = Math.random() * 1.5 + 0.5;
    stars[i] = {
        r: Math.random() * STAR_SIZE * canvas.width / 2,
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        xv: xv * speedMult,
        yv: yv * speedMult
    }
}



function randomSign() {
    return Math.random() >= 0.5 ? 1 : -1;
}

// Animation Time
setInterval(update, 1000 / FPS);

function update() {
    ctx.fillStyle = COLOR_SPACE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the stars
    ctx.fillStyle = COLOR_STARS;
    for (let i = 0; i < STAR_NUM; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        ctx.fill();

        // update the star's x position
        stars[i].x += stars[i].xv / FPS;

        // reposition the star to the other side if it goes off screen
        if (stars[i].x < 0 - stars[i].r) {
            stars[i].x = canvas.width + stars[i].r;
        } else if (stars[i].x > canvas.width + stars[i].r) {
            stars[i].x = 0 - stars[i].r;
        }
        
        // update the star's y position
        stars[i].y += stars[i].yv / FPS;

        // reposition the star to the other side if it goes off screen
        if (stars[i].y < 0 - stars[i].r) {
            stars[i].y = canvas.height + stars[i].r;
        } else if (stars[i].y > canvas.height + stars[i].r) {
            stars[i].y = 0 - stars[i].r;
        }
    }
}