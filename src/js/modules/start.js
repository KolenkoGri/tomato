const btnStart = document.querySelector('.button-primary');
const windowTimerText = document.querySelector('.window__timer-text');
const btnStop = document.querySelector('.button-secondary');
let time = 1500;
let interval;

btnStart.addEventListener('click', () => {
    interval = setInterval(() => {
        time -= 1;
        let minutes = Math.trunc(time / 60);
        let format = time % 60;
        windowTimerText.textContent = `${minutes}:${format}`; 
    }, 1000);
});

btnStop.addEventListener('click', () => {
    clearTimeout(interval);
})


