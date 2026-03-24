
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour12: true });
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();



let stopwatchInterval;
let elapsedTime = 0;

function startStopwatch() {
    if (stopwatchInterval) return;
    const startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById('stopwatch-display').textContent = formatTime(elapsedTime);
    }, 10);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    document.getElementById('stopwatch-display').textContent = "00:00:00";
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}




let countdownInterval;

function startTimer() {
    clearInterval(countdownInterval);
    let seconds = parseInt(document.getElementById('timer-input').value);

    if (isNaN(seconds) || seconds <= 0) return alert("Please enter seconds");

    const display = document.getElementById('timer-display');

    countdownInterval = setInterval(() => {
        seconds--;
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        display.textContent = `${m}:${s}`;

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);
}