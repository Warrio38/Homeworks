let dates = new Date();
function separation(str) {
  str = String(str);
  str = str.split("");
  if (str.length === 1) {
    str.unshift("0");
    str = str.join("");
  } else {
    str = str.join("");
  }
  return str;
}
let date = `${separation(dates.getDate())}.${separation(
  dates.getMonth() + 1
)}.${dates.getFullYear()}`;
let time = `${separation(dates.getHours())}:${separation(
  dates.getMinutes()
)}:${separation(dates.getSeconds())}`;
let clocks = document.getElementsByClassName("clock");
let calendar = document.getElementsByClassName("calendar");
clocks[0].append(time);
calendar[0].append(date);
function rest() {
  dates = new Date();
  date = `${separation(dates.getDate())}.${separation(
    dates.getMonth() + 1
  )}.${dates.getFullYear()}`;
  time = `${separation(dates.getHours())}:${separation(
    dates.getMinutes()
  )}:${separation(dates.getSeconds())}`;
  clocks[0].innerHTML = time;
  calendar[0].innerHTML = date;
}
let interval = setInterval(rest, 1000)
