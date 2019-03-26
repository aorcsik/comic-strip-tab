var pattern = localStorage.comicStripPattern || "https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/{yyyy}/{yyyy}-{mm}-{dd}.gif";

document.getElementById("comic-strip-pattern").value = pattern;
document.getElementById("comic-strip-preview").src = getPatternUrl(pattern);

document.getElementById("preview-btn").addEventListener("click", function() {
  document.getElementById("comic-strip-preview").src = getPatternUrl(document.getElementById("comic-strip-pattern").value);
});

document.getElementById("save-btn").addEventListener("click", function() {
  localStorage.comicStripPattern = document.getElementById("comic-strip-pattern").value;
  document.getElementById("comic-strip-preview").src = getPatternUrl(document.getElementById("comic-strip-pattern").value);
  document.getElementById("status-span").innerHTML = "Saved.";
  window.setTimeout(function() {
    document.getElementById("status-span").innerHTML = "";
  }, 1000);
});
