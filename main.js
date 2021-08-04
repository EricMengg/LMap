let mainMap;

function initializeMain() {
    var mapCenter = new google.maps.LatLng(59.3426606750, 18.0736160278),
    myOptions = {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    },
    mainMap = new google.maps.Map(document.getElementById("main-map"), myOptions);
}

$(document).on("pageinit", "#main", function() {
    initializeMain();
});