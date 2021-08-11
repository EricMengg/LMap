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
            geoMarker.setPosition(pos);
            mainMap.setCenter(pos);
        }
        );
    }

    let input = document.getElementById("search-input");
    let searchBox = new google.maps.places.SearchBox(input);
    let markers = [];

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces()

        if (places.length == 0) {
        return;
        }

        markers.forEach((marker) => {
        marker.setMap(null);
        });
        markers = [];

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
        }
        const icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
        };

        markers.push(
            new google.maps.Marker({
            mainMap,
            icon,
            title: place.name,
            position: place.geometry.location,
            })
        );

        if (place.geometry.viewport) {

            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
        });
        mainMap.fitBounds(bounds);
    });
}

$(document).on("pageinit", "#main", function() {
    initializeMain();
});