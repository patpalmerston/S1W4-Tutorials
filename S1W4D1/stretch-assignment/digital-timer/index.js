// ===============Buttons=============
// Get Body
const body = document.querySelector('body');

// Container Div
const buttons = document.createElement('div');
body.append(buttons);
buttons.classList.add('.digits');

// Actual buttons
const start = document.createElement('button'),
    stop = document.createElement('button'),
    reset = document.createElement('button');
// Nest
buttons.append(start);
buttons.append(stop);
buttons.append(reset);
// Content
start.innerText = 'Start';
stop.innerText = 'Stop';
reset.innerText = 'Reset';

// ===============Timer===============
// Set Start
function startTimer() {

    // Set Stop
    function stopTimer() {
        clearInterval(timer);
    }

    // Define arrival and timer
    let arrival = new Date().getTime(),
        timer = setInterval(showElapsed, 10);

    function showElapsed() {
        let rightNow = new Date().getTime(),
            distance = Math.floor((rightNow - arrival) / 10).toString().split(''),
            sTens = distance[3] == undefined ? 0 : distance[0];
        if (distance[1] == undefined) {
            sOnes = 0,
                mHuns = 0,
                mTens = distance[0];
        } else if (distance[2] == undefined) {
            sOnes = 0,
                mHuns = distance[0],
                mTens = distance[1];
        } else if (distance[3] == undefined) {
            sOnes = distance[0],
                mHuns = distance[1],
                mTens = distance[2];
        } else {
            sOnes = distance[1],
                mHuns = distance[2],
                mTens = distance[3];
        }

        // Get and name digits
        const secondTens = document.getElementById('secondTens');
        const secondOnes = document.getElementById('secondOnes');
        const msHundreds = document.getElementById('msHundreds');
        const msTens = document.getElementById('msTens');

        // Set individual digit behaviors
        secondTens.innerText = sTens;
        secondOnes.innerText = sOnes;
        msHundreds.innerText = mHuns;
        msTens.innerText = mTens;
    }

    stop.addEventListener('click', stopTimer);

    reset.addEventListener('click', resetTimer);

    // Set Reset
    function resetTimer() {
        clearInterval(timer);
        secondTens.innerText = '-';
        secondOnes.innerText = '-';
        msHundreds.innerText = '-';
        msTens.innerText = '-';
    }

}

start.addEventListener('click', startTimer);