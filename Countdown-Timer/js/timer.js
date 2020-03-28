//
let p = document.getElementsByTagName('p')[1],
start = document.getElementById('start'),
stop = document.getElementById('stop'),
clear = document.getElementById('reset'),
seconds = 0, minutes = 0, hours = 0,
t; // t is used to set timeout

function add() {
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

p.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

timer();
}
function timer() {
t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
p.textContent = "00:00:00";
seconds = 0; minutes = 0; hours = 0;
}