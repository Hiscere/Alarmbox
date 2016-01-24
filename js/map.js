   
var map;
function initMap() {
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;
  var myLatLng = {lat: 52.0535631, lng: 19.5249493};  
  var red = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + labels[labelIndex++ % labels.length] + "|FE7569";
  var green ='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + labels[labelIndex++ % labels.length] + "|76ff03";
  
  
 
    
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 7
  });
    
    
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
   // label: labels[labelIndex++ % labels.length],
      icon: red
  });
    
//};



            
  var socket = io.connect();
  socket.emit("news", {"event_type":"closed"});
  socket.on("asd", function (data) {
    console.log(4);
      var dataServerGive = JSON.parse(data);
      console.log(data);
      
      console.log(dataServerGive.event_type);
    if (dataServerGive.event_type == "closed") {
        console.log(marker.icon);
        marker.setAnimation(null);
        marker.icon = green;
           
    }else{
        marker.icon =red;
        marker.setAnimation(google.maps.Animation.BOUNCE);
    };
      
      });
    
    socket.on('my other event', function (data) {
          console.log( data);
          socket.emit("fb",  { my: 'data' });

});
    socket.on("wy", function (data) {
        console.log(data)
    });
    
   
  };
    



          