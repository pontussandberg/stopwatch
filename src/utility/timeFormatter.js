export function formatHourMinSec(timeElapsedMs) {
    let hourInMs = 3600000;
    let minuteInMs = 60000;
    let secondInMs = 1000;

    if (timeElapsedMs) {

        let h = Math.floor(timeElapsedMs / hourInMs);
        let min = Math.floor((timeElapsedMs / minuteInMs) % 60);
        let sec = Math.floor((timeElapsedMs / secondInMs) % 60);

        let displayHours = (h >= 10) ? h : "0" + h;
        let displayMins = (min >= 10) ? min : "0" + min;
        let displaySeconds = (sec >= 10) ? sec : "0" + sec;

        return `${displayHours} : ${displayMins} : ${displaySeconds} . `;

    }

    else return '00 : 00 : 00 . ';
}

export function formatMilliSec(timeElapsedMs) {

    if (timeElapsedMs) {
        let ms = Math.floor((timeElapsedMs % 1000) / 10);
        let displayMilli = (ms >= 10) ? ms : "0" + ms;
        return displayMilli;
    }
    else return '00'
}
