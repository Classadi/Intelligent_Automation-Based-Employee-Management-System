// Function to update session time
function updateSessionTime(startTime, endTime) {
    const sessionDuration = endTime - startTime;
    const hours = Math.floor(sessionDuration / (1000 * 60 * 60));
    const minutes = Math.floor((sessionDuration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((sessionDuration % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Clock-in and Clock-out functionality
let isClockIn = true;
let startTime = null;
let endTime = null;
const clockInBtn = document.getElementById('clock-in-btn');
const clockOutBtn = document.getElementById('clock-out-btn');
const clockTimer = document.getElementById('clock-timer');
const sessionTimeDisplay = document.getElementById('session-time');
let updateTimer = null;

clockInBtn.addEventListener('click', function() {
    if (isClockIn) {
        isClockIn = false;
        clockInBtn.textContent = 'Clock Out';
        clockInBtn.style.backgroundColor = '#dc3545'; // Change to red for clock out
        startTime = new Date().getTime();
        // Start the timer
        updateTimer = setInterval(function() {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;
            const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
            clockTimer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    } else {
        isClockIn = true;
        clearInterval(updateTimer); // Stop the timer
        clockInBtn.textContent = 'Clock In';
        clockInBtn.style.backgroundColor = '#007bff'; // Change back to blue for clock in
        endTime = new Date().getTime();
        sessionTimeDisplay.textContent = `Total Session Time: ${updateSessionTime(startTime, endTime)}`;
    }
});
