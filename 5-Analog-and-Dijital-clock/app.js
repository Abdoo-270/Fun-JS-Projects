const week = ["Pt","Sa","Ça","Pe","Cu","Ct","Pa"]
const saat = document.getElementById("saat");
const dk = document.getElementById("dakika");
const san = document.getElementById("saniye");
const days = document.getElementById("days");

const d = new Date();
const hour = d.getHours();
const mins = d.getMinutes();
const secs = d.getSeconds();
const day = d.getDay();

saat.innerHTML = (hour).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

dk.innerHTML = (mins).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

san.innerHTML = (secs).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

days.innerHTML = week[day-1];

const secondHand = document.getElementById("second-hand");
const secDeg = secs*6;
const secvalue = secDeg + 90 + "deg";
const rotateValueSec = "rotate" +"(" + secvalue + ")";
secondHand.style.transform = rotateValueSec;

const minHand = document.getElementById("min-hand");
const minDeg = mins*6;
const minValue = minDeg + 90 + "deg";
const rotateValueMin = "rotate" +"(" + minValue + ")";
minHand.style.transform = rotateValueMin;

const hourHand = document.getElementById("hour-hand");
const hourDeg = (hour-12)*30;
const hourValue = hourDeg + 90 + "deg";
const rotateValueHour = "rotate" +"(" + hourValue + ")";
hourHand.style.transform = rotateValueHour;



setInterval(timer, 1000) ;
function timer() {

  const week = ["Pt","Sa","Ça","Pe","Cu","Ct","Pa"]
  const saat = document.getElementById("saat");
  const dk = document.getElementById("dakika");
  const san = document.getElementById("saniye");
  const days = document.getElementById("days");

  const d = new Date();
  const hour = d.getHours();
  const mins = d.getMinutes();
  const secs = d.getSeconds();
  const day = d.getDay();

  saat.innerHTML = (hour).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  dk.innerHTML = (mins).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  san.innerHTML = (secs).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

  days.innerHTML = week[day-1];

  const secondHand = document.getElementById("second-hand");
  const secDeg = secs*6;
  const secvalue = secDeg + 90 + "deg";
  const rotateValueSec = "rotate" +"(" + secvalue + ")";
  secondHand.style.transform = rotateValueSec;

  const minHand = document.getElementById("min-hand");
  const minDeg = mins*6;
  const minValue = minDeg + 90 + "deg";
  const rotateValueMin = "rotate" +"(" + minValue + ")";
  minHand.style.transform = rotateValueMin;

  const hourHand = document.getElementById("hour-hand");

  const hourDeg = ((hour / 12) * 360) + ((mins/60)*30);
  const hourValue = hourDeg + 90 + "deg";
  const rotateValueHour = "rotate" +"(" + hourValue + ")";
  hourHand.style.transform = rotateValueHour;
}
