function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0) {
        h = 12;
    }

    if(h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("rtc").innerText = time;
    document.getElementById("rtc").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();

function showDate() {
    var date = new Date();
    var d = date.getDate();
    console.log(d);
    var m = date.getMonth();
    var y = date.getFullYear();
    
    var fd = m + "/" + d + "/" + y;
    //var fd = date.getDate();
    document.getElementById("rtd").innerText = fd;
    document.getElementById("rtd").textContent = fd;
    
    setTimeout(showDate, 1000);
}

showDate();