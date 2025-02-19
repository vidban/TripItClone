function updateUI(loc, trvDate, endDate, days, lengthOfTrip) {
  // update destination
  document.getElementById("place").innerHTML = `My Trip to: ${loc}`;
  // update departing date
  document.getElementById("date").innerHTML = `Departing: ${trvDate}`;
  // update returning date
  document.getElementById("ret-date").innerHTML = `Returning ${endDate}`;
  // update days to travel
  document.getElementById(
    "content",
  ).innerHTML = `Your ${lengthOfTrip} day trip to ${loc} is just ${days} day(s) away!`;
}

export { updateUI };
