/** @type {HTMLButtonElement} */
const previousButton = document.getElementById("previous-btn");

/** @type {HTMLButtonElement} */
const nextButton = document.getElementById("next-btn");

/** @type {HTMLImageElement} */
const comicStripContainer = document.getElementById("comic-strip-container");

/** @type {HTMLSpanElement} */
const dateSpan = document.getElementById("date-span");

const today = new Date();
const date = new Date();

/**
 * @param {Date} date 
 */
async function loadComicStrip(date) {
  const { comicStripPattern: pattern } = await chrome.storage.local.get(["comicStripPattern"]);
  console.log(pattern);
  comicStripContainer.src = getPatternUrl(pattern, date);
  dateSpan.innerHTML = date.toDateString();
  nextButton.disabled = today.getDate() == date.getDate();
}

previousButton.addEventListener("click", function() {
  date.setDate(date.getDate() - 1);
  loadComicStrip(date);
});

nextButton.addEventListener("click", function() {
  date.setDate(date.getDate() + 1);
  loadComicStrip(date);
});

loadComicStrip(date);
