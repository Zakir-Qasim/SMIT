
function month(){
    let dateFull = new Date();
    let month_num = dateFull.getMonth();
    let month_name = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let month = month_name[month_num];
    let complete_month = document.getElementById("month");
    complete_month.innerText = month
}
month();

function showDate(){
    let dateFull = new Date();
    let Actdate = dateFull.getDate();
    let complete_date = document.getElementById("date");
    if(Actdate < 10){
        complete_date.innerText ="0"+Actdate;
    }
    else{
    complete_date.innerText = Actdate;
    }
}
showDate();

function showYear(){
    let dateFull = new Date();
    let Actyear = dateFull.getFullYear();
    complete_year = document.getElementById("year");
    complete_year.innerText = Actyear;
}
showYear();

function showDay(){
    let dateFull = new Date();
    let Day_num = dateFull.getDay()
    let Day_name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let ActDay = Day_name[Day_num];
    let fullDay = document.getElementById("day");
    fullDay.innerText = ActDay;
}
showDay();

function showHours(){
    let dateFull = new Date();
    let hours = dateFull.getHours();
    // hours = 24;
    if (hours == 0){
        hours = 12;
    }
    else if(hours >=13 && hours <=24){
        hours -= 12;
    }
    ActHours = document.getElementById("hour");
    ActHours.innerText = hours;
}
showHours();
setInterval(showHours,1000*60*60);

function shoeZone(){
    let dateFull = new Date();
    let hours = dateFull.getHours();
    if(hours >= 1 && hours <= 11){
        hours = "AM"
    }
    else if(hours >= 12 && hours <= 23){
        hours = "PM"
    }
    else if(hours = 24){
        hours = "AM"
    }
    ActZone = document.getElementById("zone");
    ActZone.innerText=hours;
}
shoeZone();

function showMin(){
    let dateFull = new Date();
    let min = dateFull.getMinutes();
    ActMin = document.getElementById("min");
    if (min < 10){
    ActMin.innerText ="0"+min;    
    }
    else{
    ActMin.innerText = min;
    }
}
showMin();
setInterval(showMin,1000);

function showSecond(){
    let dateFull = new Date();
    let second = dateFull.getSeconds();
    ActSecond = document.getElementById("second");
    if(second < 10){
        ActSecond.innerText ="0"+second;
    }
    else{
    ActSecond.innerText = second;
    }
}
showSecond();
setInterval(showSecond,1000);