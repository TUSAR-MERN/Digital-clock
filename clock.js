// Initialize Some Variables 
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function digitalClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h >= 12) {
        h = ((h - 12) == 0) ? 12 : (h - 12);
        
    } else {
        h = h;
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;

    hours.innerHTML = h;
    minutes.innerHTML = m;
}

setInterval(() => {
    digitalClock()
})