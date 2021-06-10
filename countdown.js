function getTimeRemaining(endTime){
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {total,days,hours,minutes,seconds};
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const timeinterval = setInterval(() => {
        const t = getTimeRemaining(endtime);
        clock.innerHTML = t.days + ':' +
                        t.hours + ':' +
                        t.minutes + ':' +
                        + t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
            document.getElementById("imgResult").style.visibility = "visible"; 
        }
    },1000);
}