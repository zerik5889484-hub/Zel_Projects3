window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1500);
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("start").style.display = "none";
  document.getElementById("menu").style.display = "flex";
  document.getElementById("home").classList.remove("hidden");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));

    const target = link.getAttribute("href").replace("#", "");
    document.getElementById(target).classList.remove("hidden");
  });
});
