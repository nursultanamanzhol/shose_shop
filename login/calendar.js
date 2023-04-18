// Created by Safura patel 💫
   
   
function zero(d) {
    if (d < 10) {
    d = "0" + d;
    }
    return d;
    }
    
    // Time
    function time() {
    let time= new Date();
    let h = zero(time.getHours());
    let m = zero(time.getMinutes());
    let s = zero(time.getSeconds());
    let w = new Array()
    document.getElementById("hour").innerHTML = h + ":" + m + ":" + s  ;
    }
    
    setInterval(time, 0)
    function date() {
    let date = new Date();
    let m = new Array();
    }
    setInterval(Date, 0)
    
    
 // Weekdays 
    function now() {
    let now = new Date();
    let w = new Array()
    w[0] = 'Sunday';
    w[1] = 'Monday';
    w[2] = 'Tuesday';
    w[3] = 'Wednesday';
    w[4] = 'Thursday';
    w[5] = 'Friday';
    w[6] = 'Saturday';
    let weekday = w[now.getDay()];
    document.getElementById("day").innerHTML =  '('+ weekday + ')' ;
    }
    
    // Month 
    setInterval(now, 0)
    function date() {
    let date = new Date();
    let d = zero(date.getDate());
    let m = new Array();
    m[0] = 'Jan';
    m[1] = 'Feb';
    m[2] = 'March';
    m[3] = 'April';
    m[4] = 'May';
    m[5] = 'June';
    m[6] = 'July';
    m[7] = 'Aug';
    m[8] = 'Sept';
    m[9] = 'Oct';
    m[10] ='Nov';
    m[11] ='Dec';
    
    let month = m[date.getMonth()];
    let y = date.getFullYear();
    document.getElementById("date").innerHTML = d
    document.getElementById("year").innerHTML = y
    document.getElementById("month").innerHTML = month
    }
    setInterval(date, 0)
    