const clock = document.getElementById("clockTime");

function showTime() {
  const now = new Date();
  clock.innerText = now.toLocaleTimeString();
}

setInterval(showTime, 1000);
showTime(); // run once at start
