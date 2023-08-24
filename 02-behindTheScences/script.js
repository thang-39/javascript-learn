function digitalClock( ) {
    var date = new Date();

    var hours = date.getHours() + '';

    var miniutes = date.getMinutes() + '';

    var seconds = date.getSeconds() + '';

    var day = date.getDay();

    if (hours.length < 2) hours = '0' + hours;

    if (miniutes.length < 2) miniutes = '0' + miniutes;

    if (seconds.length < 2) seconds = '0' + seconds;

    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr', 'Sat'];

    var clock = weekDays[day] + " " + hours + ":" + miniutes + ":" + seconds;

    document.getElementById('clock').innerHTML = clock;

    // console.log(clock);
}

digitalClock();

setInterval(digitalClock, 1000);