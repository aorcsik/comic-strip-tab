
/** @type {HTMLTextAreaElement} */
const comicStripPatternTextArea = document.getElementById("comic-strip-pattern");

/** @type {HTMLImageElement} */
const comicStripPreviewImage = document.getElementById("comic-strip-preview");

/** @type {HTMLButtonElement} */
const previewButton = document.getElementById("preview-btn");

/** @type {HTMLButtonElement} */
const saveButton = document.getElementById("save-btn");

/** @type {HTMLSpanElement} */
const statusSpan = document.getElementById("status-span");

/** */
async function init() {
  const { comicStripPattern: pattern } = await chrome.storage.local.get(["comicStripPattern"]);
  comicStripPatternTextArea.value = pattern;
  comicStripPreviewImage.src = getPatternUrl(pattern);
}

previewButton.addEventListener("click", function() {
  const pattern = comicStripPatternTextArea.value;
  comicStripPreviewImage.src = getPatternUrl(pattern);
});

saveButton.addEventListener("click", async function() {
  const pattern = comicStripPatternTextArea.value;
  await chrome.storage.local.set({ comicStripPattern: pattern});
  
  comicStripPreviewImage.src = getPatternUrl(pattern);

  statusSpan.innerHTML = "Saved.";
  window.setTimeout(function() {
    statusSpan.innerHTML = "";
  }, 1000);
});

init();
