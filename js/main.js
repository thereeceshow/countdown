const goal = document.getElementById('goal');
const btn = document.getElementById('btn');
const display = document.getElementById('display');

let cTime = document.getElementById('dropdownTime').value; // INIT VALUE, WILL NEED TO CALL IN FUNC

// let currentTime = new Date();
let day = 0
let hour = 0
let min = 0
let sec = 0
let dayInSec = 86400
let hourInSec = 3600
let minInSec = 60
let goalTime = new Date('February 22, 2021 08:00:00')
function test() {
    // let currentTime = Date.now()
    currentTime = new Date();

    let displayTime = goalTime -  currentTime;
    // console.log(displayTime);
    // Convert time in Milliseconds to seconds
    let totalSec = displayTime / 1000;
    // Get Total Days by dividing total secs by 86400 and rounding down to the nearest whole number
    let days = Math.floor(totalSec / dayInSec);
    //Check
    // console.log(days);
    // Now we need to take the remainder of Sec that weren't a full day.
    totalSec %= dayInSec;
    // Check
    // console.log(displayTime);
    // Get Total Hours by dividing 
    let hours = Math.floor(totalSec / hourInSec);
    // Check
    // console.log(hours);
    // Now take remainder of sec less than hour
    totalSec %= hourInSec;
    //Check
    // console.log(totalSec);
    // Get total mins by dividing
    let mins = Math.floor(totalSec / minInSec);
    // Check
    // console.log(mins);
    // Now take rem of mins as secs
    totalSec %= mins;
    //
    let secs = Math.floor(totalSec);
    //
    // console.log(days, hours, mins, secs);
    // cat var to string with two digs
    days = days.toString(); hours = hours.toString(); mins = mins.toString(), secs = secs.toString();
    if (days < 10) {
        days = '0'.concat(days);
        } if (hours < 10) {
        hours = '0'.concat(hours);
        } if (mins < 10) {
        mins = '0'.concat(mins);
        } if (secs < 10) {
        secs ='0'.concat(secs);
        }

    // console.log(days, hours, mins, secs)
    goal.textContent = days + ':' + hours + ':' + mins + ':' + secs;
    }

btn.onclick = function changeTime() {
    cTime = document.getElementById('dropdownTime').value;
    if (cTime == 'distraction') {
        goal.textContent = 'RIGHT NOW';
        let intTimes = Math.floor(Math.random()* 7) + 1;
        let things = ['Phone Call'+'Will you play with me?','Random Pokemon Question','Daddy I am Hungry','NTI Snow Day','Daddy I am Thirsty','Come Play','Dog Crying','NEED MORE COFFEE!!!!!!!']
        function crazyDis () {
            goal.classList.add('distract');
            for (i = 0; i < intTimes; i++) {
                let intOrder = Math.floor(Math.random() * things.length);
                function randText() {
                    setTimeout(alert(things[intOrder]),1000);
                }
                randText();
                }
        }
    // while (cTime == 'distraction') {
    crazyDis();
    location.reload();
    
    } else if (cTime == '2022') {
        // display.classList.remove('distract');
        // alert('The Year of the Travel Boom')
        goalTime = new Date('January 01, 2022 24:00:00');
        // setInterval(test, 1000);
    } else {
        display.classList.remove('distract');
        goalTime = new Date('February 22, 2021 08:00:00')
        // setInterval(test, 1000);
    }
}

setInterval(test, 1000);
