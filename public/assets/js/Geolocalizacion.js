/* 
 * API GOOGLE MAPS - NOMBRE PROJECTO: GeolocalizacionInicio
 * API KEY: 
 * Mas info API Google Maps --> https://developers.google.com/maps/web/?hl=es-419
 */
function onLoad(){
    //Carga el mapa interactivo
    gLocation();

}
///////////////////////////////////////////////////////////////////////////////////////////////////

//MOSTRAR MAPA INTERACTIVO
function gLocation(){
    var mensaje_error = document.getElementById("mensaje_error");   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sPosition, showError);
    } else { 
        mensaje_error.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function sPosition(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    var localizacionActual = {lat: latitud, lng: longitud};
    var localizacionInventada = {lat: 41.413500299999995, lng:  -4.7183425};
    var mapProp= {
        //center:new google.maps.LatLng(51.508742,-0.120850),
        center:new google.maps.LatLng(latitud,longitud),
        zoom:14,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
   //Marcador 1
   var marker = new google.maps.Marker({
    position: localizacionActual,
    map: map
  });
  
  var styledMapType = new google.maps.StyledMapType([{
    //elementType: 'geometry', stylers: [{color: '#ebe3cd'}]
    //elementType: 'labels.text.fill', stylers: [{color: '#523735'}]
    //elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]
    featureType: 'administrative.land_parcel',
    elementType: 'geometry', stylers: [{color: '#ebe3cd'}]
    }], {name: 'Styled Map'})

 //Associate the styled map with the MapTypeId and set it to display.
 map.mapTypes.set('styled_map', styledMapType);
 map.setMapTypeId('styled_map');

}

//////////////////////////////////////////////////////////////////////////////////////////////////
//METODO PARA MOSTRAR POSIBLES ERRORES
function showError(error) {
    var mensaje_error = document.getElementById("mensaje_error");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mensaje_error.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            mensaje_error.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            mensaje_error.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            mensaje_error.innerHTML = "An unknown error occurred."
            break;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", onLoad, false);

