
function updateHomeValues(data){
    $(".temp").html(Math.round(kToC(data.current.temp))+"°C"); 
    $(".weather-desc-present").html(uppercase(data.current.weather[0].description));
    $(".feels-like-now").html(Math.round(kToC(data.current.feels_like))+"°C");
    $(".humidity-now").html(data.current.humidity+"%");
    $(".uv-index-now").html(data.current.uvi);
    $(".pressure-now").html(data.current.pressure+"hPa");
    for(var i=0;i<12;i++)
    {
        var gmtTime=timestampToDate(data.hourly[i].dt);
        gmtTime=gmtTime.substring(17,19);
        actualTime=6+parseInt(gmtTime);
        actualTime=actualTime%24;
        var select=".time-"+i;
        $(select).html(actualTime);
        var weatherIcon=data.hourly[i].weather[0].icon;
        select=".png-"+i;
        $(select).attr("src","images/png/"+weatherIcon+".png");
        select=".temp-"+i;
        $(select).html(Math.round(kToC(data.hourly[i].temp))+"°C");
    }
    $(".weather-desc-today").html(uppercase(data.daily[0].weather[0].description));
    $(".max-min-today").html(Math.round(kToC(data.daily[0].temp.max))+"°C/"+Math.round(kToC(data.daily[0].temp.min))+"°C");
    $(".today-png").attr("src","images/png/"+data.daily[0].weather[0].icon+".png");
    $(".weather-desc-tomorrow").html(uppercase(data.daily[1].weather[0].description));
    $(".max-min-tomorrow").html(Math.round(kToC(data.daily[1].temp.max))+"°C/"+Math.round(kToC(data.daily[1].temp.min))+"°C");
    $(".tomorrow-png").attr("src","images/png/"+data.daily[1].weather[0].icon+".png");
}