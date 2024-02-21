/**
 * @param {string | undefined} pattern 
 * @param {Date | undefined} date 
 * @returns {string}
 */
function getPatternUrl(pattern, date) {
  if (!pattern) return "";

  const today = date || new Date(), dateComponents = {};
  dateComponents.yyyy = today.getFullYear();
  dateComponents.m = parseInt(today.getMonth()) + 1;
  dateComponents.mm = dateComponents.m < 10 ? "0" + dateComponents.m : dateComponents.m;
  dateComponents.d = parseInt(today.getDate());
  dateComponents.dd = dateComponents.d < 10 ? "0" + dateComponents.d : dateComponents.d;

  let url = pattern;
  Object.keys(dateComponents).forEach(function(key) {
    url = url.replace(new RegExp("\{" + key + "\}", 'g'), dateComponents[key]);
  });

  return url;
}
