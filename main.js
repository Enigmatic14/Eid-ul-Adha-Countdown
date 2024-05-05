// console.log(`${counterDays} Days ${counterHrs} Hours ${counterMin} Mins ${counterSec} Sec`)
htmlDays = document.getElementById("daycounter");
htmlHrs = document.getElementById("hrscounter");
htmlMin = document.getElementById("mincounter");
htmlSec = document.getElementById("seccounter");

eidDate = new Date();
eidDate.setDate(18);
eidDate.setMonth(5);

setInterval(function () {
  let currentDate = new Date();
  currentDate1970 = currentDate.getTime();
  // console.log(currentDate1970);

  eidDate1970 = eidDate.getTime();
  timeDiff = eidDate1970 - currentDate1970;
  counterSec = Math.floor(timeDiff / 1000);
  counterMin = Math.floor(counterSec / 60);
  counterHrs = Math.floor(counterMin / 60);
  counterDays = Math.floor(counterHrs / 24);

  htmlDays.innerText = `${counterDays} Days : `;
  htmlHrs.innerText = `${counterHrs} Hrs : `;
  htmlMin.innerText = `${counterMin} Mins : `;
  htmlSec.innerText = `${counterSec} Sec`;
}, 1000);
