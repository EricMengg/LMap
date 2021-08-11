let savedmap;

function initializeSaved() {
    var mapCenter = new google.maps.LatLng(59.3426606750, 18.0736160278),
    myOptions = {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    },
    savedmap = new google.maps.Map(document.getElementById("savedMap"), myOptions);
}

$(document).on("pageinit", "#saved", function() {
    initializeSaved();
});