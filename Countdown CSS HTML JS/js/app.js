const endDate = "16 September 2027 12:00:00 AM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  // Days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // Hours
  inputs[1].value = Math.floor((diff / 3600) % 24);
  // Minutes
  inputs[2].value = Math.floor((diff / 60) % 60);
  // Seconds 
  inputs[3].value = Math.floor(diff % 60);


}
// initial call
clock()
// call every sec
setInterval(
  () => {
    clock()
  },
  1000
)