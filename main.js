let mainMap;

function initializeMain() {
    let mapCenter = new google.maps.LatLng(39.9564, -75.1887),
        myOptions = {
            zoom:14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: mapCenter
        },
        mainMap = new google.maps.Map(document.getElementById("main-map"), myOptions);
        
    
    let geoMarker = new google.maps.Marker({
        position: { lat: 39.9564, lng: -75.1887 },
        mainMap,
        title: "Geolocation",
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            //geoMarker.setPosition(pos);
            mainMap.setCenter(pos);
        }
        );
    }
}

$(document).on("pageinit", "#main", function() {
    initializeMain();
});