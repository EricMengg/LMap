let direcMap;

function initializeDirec() {
    var mapCenter = new google.maps.LatLng(59.3426606750, 18.0736160278),
    myOptions = {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    },
    direcMap = new google.maps.Map(document.getElementById("direc-map"), myOptions);
}

$(document).on("pageinit", "#direction", function() {
    initializeDirec();
});