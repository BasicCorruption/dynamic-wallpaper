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