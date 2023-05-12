let min = 0;
let sec = 0;
let milsec = 0;
let isRunning = false;
let intervals = 0;
let intArr = [];

function watch(command) {
  if (command == "start" && isRunning == false) {
    isRunning = true;

    intervals = setInterval(() => {
      milsec++;
      if (milsec == 100) {
        milsec = 0;
        sec++;
      }
      if (sec == 60) {
        sec = 0;
        min++;
      }

      document.getElementById("min").innerHTML = min;
      document.getElementById("sec").innerHTML = sec;
      document.getElementById("milsec").innerHTML = milsec;
    }, 10);
    intArr.push(intervals);
  } else {
    for (i of intArr) {
      clearInterval(i);
    }
    isRunning = false;
    min = 0;
    sec = 0;
    milsec = 0;
  }
}
