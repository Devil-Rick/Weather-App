console.log("everything is connected");
var time = new Date().getHours();
if (time >= 18 || time <= 7) {
  $("body").removeClass("day").addClass("night");
  $("body").removeClass("morning").addClass("night_pic");
  console.log("added night")
} else {
  console.log("its day");
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
var today = new Date();
let now = (today.getDate() + "-" + months[today.getMonth()] + " ( " + days[today.getDay()] + " )");
document.getElementById("now").innerHTML = now;


var nextDay = new Date(today);
nextDay.setDate(today.getDate() + 1);
let date = (nextDay.getDate() + "-" + months[nextDay.getMonth()] + " ( " + days[nextDay.getDay()] + " )");
document.getElementById("date").innerHTML = date;

var nextDay2 = new Date(nextDay);
nextDay2.setDate(nextDay.getDate() + 1);
let date2 = (nextDay2.getDate() + "-" + months[nextDay2.getMonth()] + " ( " + days[nextDay2.getDay()] + " )");
document.getElementById("date2").innerHTML = date2;

var nextDay3 = new Date(nextDay2);
nextDay3.setDate(nextDay2.getDate() + 1);
let date3 = (nextDay3.getDate() + "-" + months[nextDay3.getMonth()] + " ( " + days[nextDay3.getDay()] + " )");
document.getElementById("date3").innerHTML = date3;
