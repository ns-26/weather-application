function getCoOrds(historical){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            if(!historical){
                //weatherForecast(position);
            }
            else{
                //historicalData(position);
            }
        })
    }
    else{
        console.log("Failed");
    }
}
getCoOrds(false);


function weatherForecast(position){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=f140e67f24f32ad183329359c313f9d7")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateHomeValues(data);
            updateFiveDaysContent(data);
        })
        .catch(error => console.log(error))
}

$(".search-weather").click(searchWeather);

function searchWeather(){
    var searchQuery=$(".search-query").val();
    console.log(searchQuery);
    if(searchQuery != ""){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&appid=f140e67f24f32ad183329359c313f9d7")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            position={
                coords:{
                    longitude:0,
                    latitude:0,
                },
            }
            position.coords.longitude=data.coord.lon;
            position.coords.latitude=data.coord.lat;
            //will be called if more deatils are needed
            //weatherForecast(position);

        })
        .catch(error => console.log(error))
    }
}
$(".historical-search-location-button").click(searchHistoricalWeather);

function searchHistoricalWeather(){
    var searchQuery=$(".search-location").val();
    console.log(searchQuery);
    if(searchQuery != ""){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&appid=f140e67f24f32ad183329359c313f9d7")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            position={
                coords:{
                    longitude:0,
                    latitude:0,
                },
            }
            position.coords.longitude=data.coord.lon;
            position.coords.latitude=data.coord.lat;
            //will be called if more deatils are needed
            //historicalData(position);

        })
        .catch(error => console.log(error))
    }
}

$(".historical-current-location-button").click(function(){
    getCoOrds(true);
});


function historicalData(position){
    var position=position;
    var today=calcTime();
    var presentDate=today.date;
    var presentMonth=today.month;
    var presentYear=today.year;
    var leap=false;
    months=[31,28,31,30,31,30,31,31,30,31,30,31];
    leapMonths=[31,29,31,30,31,30,31,31,30,31,30,31];
    if(today.year%4==0)
    {
        if(today.year%100==0)
        {
            if(today.year%400==0)
            {
                leap=true;
            }
        }
    }
    var dates=[];
    for(var i=0;i<5;i++){
        presentDate-=1;
        if(presentDate>0 && presentMonth>=0){
            var temp={};
            temp.date=presentDate;
            temp.month=presentMonth;
            temp.year=presentYear;
            dates.push(temp);
        }
        else if(presentMonth>=0){
            todayMonth-=1;
            if(leap){
                presentDate=leapMonths[presentMonth];
                var temp={};
                temp.date=presentDate;
                temp.month=presentMonth;
                temp.year=presentYear;
                dates.push(temp);
            }
            else{
                presentDate=months[presentMonth];
                var temp={};
                temp.date=presentDate;
                temp.month=presentMonth;
                temp.year=presentYear;
                dates.push(temp);
            }
        }
        else{
            presentYear-=1;
            presentMonth=11;
            presentDay=months[presentMonth];
            var temp={};
            temp.date=todayDate;
            temp.month=todayMonth;
            temp.year=todayYear;
            dates.append(temp);
        }
    }
    console.log(dates);
    historicalForecast(position,dates);
}


function historicalForecast(position,dates){
    var index=1;
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=f140e67f24f32ad183329359c313f9d7")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        updatePresentValue(data,0);
    })
    .catch(error => console.log(error));
    dates.forEach(function(date){
        var timeStamp=dateToUnixStamp(date.year,date.month,date.date);
        console.log(timeStamp);
        fetch("http://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&dt="+timeStamp+"&appid=f140e67f24f32ad183329359c313f9d7")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateHistoryValues(data,index);
            index++;
        })
        .catch(error => console.log(error))
    });
}
//historicalForecast()




// {
    // "coord": {
    // "lon": 85.33,
    // "lat": 23.35
    // },
    // "weather": [
    // {
    // "id": 500,
    // "main": "Rain",
    // "description": "light rain",
    // "icon": "10d"
    // }
    // ],
    // "base": "stations",
    // "main": {
    // "temp": 299.15,
    // "feels_like": 304.08,
    // "temp_min": 299.15,
    // "temp_max": 299.15,
    // "pressure": 1001,
    // "humidity": 94
    // },
    // "visibility": 2500,
    // "wind": {
    // "speed": 2.1,
    // "deg": 180
    // },
    // "clouds": {
    // "all": 75
    // },
    // "dt": 1592827813,
    // "sys": {
    // "type": 1,
    // "id": 9131,
    // "country": "IN",
    // "sunrise": 1592782410,
    // "sunset": 1592831269
    // },
    // "timezone": 19800,
    // "id": 1258526,
    // "name": "Ranchi",
    // "cod": 200
    // }




    // {
    //     "lat": 23.1,
    //     "lon": 85,
    //     "timezone": "Asia/Kolkata",
    //     "timezone_offset": 19800,
    //     "current": {
    //     "dt": 1592898474,
    //     "sunrise": 1592868934,
    //     "sunset": 1592917727,
    //     "temp": 299.15,
    //     "feels_like": 302.36,
    //     "pressure": 1006,
    //     "humidity": 88,
    //     "dew_point": 297.01,
    //     "uvi": 14.75,
    //     "clouds": 90,
    //     "visibility": 2500,
    //     "wind_speed": 3.6,
    //     "wind_deg": 240,
    //     "weather": [
    //     {
    //     "id": 500,
    //     "main": "Rain",
    //     "description": "light rain",
    //     "icon": "10d"
    //     }
    //     ]
    //     },
    //     "hourly": [
    //     {
    //     "dt": 1592895600,
    //     "temp": 299.15,
    //     "feels_like": 301.23,
    //     "pressure": 1006,
    //     "humidity": 88,
    //     "weather": [
    //     {
    //     "id": 500,
    //     "main": "Rain",
    //     "description": "light rain",
    //     "icon": "10d"
    //     }
    //     ],
    //     },
    //     ],
    //     "daily": [
    //     {
    //     "dt": 1592890200,
    //     "sunrise": 1592868934,
    //     "sunset": 1592917727,
    //     "temp": {
    //     "min": 299.15,
    //     "max": 302.16,
    //     },
    //     "feels_like": {
    //     "day": 301.36,
    //     "night": 302.55,
    //     "eve": 304.16,
    //     "morn": 301.36
    //     },
    //     "pressure": 1006,
    //     "humidity": 88,
    //     "dew_point": 297.01,
    //     "weather": [
    //     {
    //     "id": 500,
    //     "main": "Rain",
    //     "description": "light rain",
    //     "icon": "10d"
    //     }
    //     ],
    //     "uvi": 14.75
    //     },
    // 