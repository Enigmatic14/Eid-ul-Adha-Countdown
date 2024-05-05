// console.log(`${counterDays} Days ${counterHrs} Hours ${counterMin} Mins ${counterSec} Sec`)
htmlDays = document.getElementById("daycounter");
htmlHrs = document.getElementById("hrscounter");
htmlMin = document.getElementById("mincounter");
htmlSec = document.getElementById("seccounter");

eidDate = new Date();
eidDate.setDate(18);
eidDate.setMonth(5);
eidDate1970 = eidDate.getTime();

setInterval(function () {
  let currentDate = new Date();
  currentDate1970 = currentDate.getTime();
  // console.log(currentDate1970);


  timeDiff = eidDate1970 - currentDate1970;
  counterDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  counterHrs = Math.floor(timeDiff % (1000 * 60 * 60 * 24)/(1000 * 60 * 60 ));
  counterMin = Math.floor(timeDiff%(1000 * 60 * 60)/(1000 * 60));
  counterSec = Math.floor(timeDiff%(1000 * 60) / 1000);

  htmlDays.innerText = `${counterDays} Days : `;
  htmlHrs.innerText = `${counterHrs} Hrs : `;
  htmlMin.innerText = `${counterMin} Mins : `;
  htmlSec.innerText = `${counterSec} Sec`;
}, 1000);
