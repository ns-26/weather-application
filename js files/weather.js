(function(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            //weatherForecast(position);
        })
    }
})();

function weatherForecast(position){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=f140e67f24f32ad183329359c313f9d7")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateHomeValues(data);
        })
        .catch(error => console.log(error))
}

$(".search-weather").click(function(){
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
    
})


function historicalForecast(){
    fetch("http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1592736487&appid=f140e67f24f32ad183329359c313f9d7")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
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