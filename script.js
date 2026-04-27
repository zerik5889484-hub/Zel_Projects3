
/* loader */
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("menu").style.display = "flex";
  }, 1200);
};

/* navigation */
const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.onclick = () => {

    pages.forEach(p => p.classList.remove("active"));

    const id = link.dataset.page;
    document.getElementById(id).classList.add("active");

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    document.querySelector("nav").classList.remove("open");
  };
});

/* burger */
document.getElementById("burger").onclick = () => {
  document.querySelector("nav").classList.toggle("open");
};

/* particles */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let p = [];

for (let i = 0; i < 50; i++) {
  p.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    dx: (Math.random()-0.5)*0.3,
    dy: (Math.random()-0.5)*0.3
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  p.forEach(pt => {
    pt.x += pt.dx;
    pt.y += pt.dy;

    ctx.fillStyle = "#00ffff";
    ctx.fillRect(pt.x,pt.y,2,2);
  });

  requestAnimationFrame(draw);
}

draw();