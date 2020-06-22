function indices(locationId){
    fetch("http://dataservice.accuweather.com/indices/v1/daily/5day/"+locationId+"?apikey=AD2s40HYIB1C6ItsTya0fkkD6J1XhNWn")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error))
}
//indices();

function accuLocationId(location){
    fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=AD2s40HYIB1C6ItsTya0fkkD6J1XhNWn&q="+location)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        indices(data[0].Key)
    })
    .catch(error => console.log(error))
}
//accuLocationId("ranchi");