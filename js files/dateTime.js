function calcTime(city, offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return "The local time for city"+ city +" is "+ nd.toLocaleString();
}
// var currentDateTime=calcTime('Kolkata', '+5.5');
// console.log(currentDateTime);
function dateToUnixStamp(year,month,date){
    var datum = new Date(Date.UTC(year,month,date));
    unixTimestamp=datum.getTime()/1000;
    console.log(datum.getTime()/1000);  
}
// dateToUnixStamp("2020","06","21");

function timestampToDate()
{
    var theDate = new Date(unixTimestamp * 1000);
    dateString = theDate.toGMTString();
    console.log(dateString );
}