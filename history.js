let hismap;

function initializeHis() {
    var mapCenter = new google.maps.LatLng(59.3426606750, 18.0736160278),
    myOptions = {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    },
    hismap = new google.maps.Map(document.getElementById("hisMap"), myOptions);
}

$(document).on("pageinit", "#history", function() {
    initializeHis();
});