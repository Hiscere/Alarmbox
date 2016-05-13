var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var myLatLng = {lat: 52.0535631, lng: 19.5249493};
var red = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + labels[labelIndex++ % labels.length] + "|FE7569";
var green = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + labels[labelIndex++ % labels.length] + "|76ff03";
var bounce = "BOUNCE";
var socket = io.connect();

socket.on("asdasd", function(dat) {
    console.log(dat)
}) //DEBUG
socket.on("asd", function (data) {
    
    console.log(data);
    var dataServerGive = data;
    console.log(data.event_type);
    
    if (dataServerGive.event_type === "closed") {
        
        mark.animation = null;
        mark.icon = green;
        
    } else {
        
        if (dataServerGive.auth === "true") {
            mark.icon = red;
        
    } else {
        mark.icon = red;
        //mark.animation = "BOUNCE";
        }
    }
        
});

socket.on('my other event', function (data) {
    
    console.log(data);
    socket.emit("fb",  { my: 'data' });
});

socket.on("wy", function (data) {
    
    console.log(data);
});        