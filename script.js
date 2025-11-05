// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Countdown timer
const endDate = new Date("2026-12-31T00:00:00").getTime();

function countDown() {
  const dist = (endDate - new Date().getTime()) / 1000;
  
  [
    ["days",    86400, Infinity], ["hours",   3600, 24],
    ["minutes", 60,    60      ], ["seconds", 1,    60]
  ].forEach(v => {
    document.getElementById(v[0]).innerText = Math.floor(dist / v[1] % v[2]);
  });
};

countDown(); setInterval(countDown, 1000);

// Email form
document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText =
    "Aitäh! Teavitame sind, kui äpp on valmis!";
  // TODO: send it somewhere
  this.reset();
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
