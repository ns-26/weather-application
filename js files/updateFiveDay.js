function updateFiveDaysContent(data){
    for(var i=0;i<6;i++)
    {
        var select=".five-day-row-date-"+i;
        var day=data.daily[i].dt;
        
        $(select).html()
    }
}