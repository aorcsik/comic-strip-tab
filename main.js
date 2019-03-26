var pattern = localStorage.comicStripPattern || "https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/{yyyy}/{yyyy}-{mm}-{dd}.gif";
var container = document.getElementById("comic-strip-container");

var today = new Date(), date = new Date();
container.src = getPatternUrl(pattern, date);
document.getElementById("date-span").innerHTML = date.toDateString();

document.getElementById("previous-btn").addEventListener("click", function() {
  date.setDate(date.getDate() - 1);
  container.src = getPatternUrl(pattern, date);
  if (today.getDate() != date.getDate()) document.getElementById("next-btn").disabled = false;
  document.getElementById("date-span").innerHTML = date.toDateString();
});

document.getElementById("next-btn").addEventListener("click", function() {
  date.setDate(date.getDate() + 1);
  container.src = getPatternUrl(pattern, date);
  if (today.getDate() == date.getDate()) document.getElementById("next-btn").disabled = true;
  document.getElementById("date-span").innerHTML = date.toDateString();
});
