var mysql      = require('mysql');
var express    = require('express');
var http       = require('http');
var app        = express();
var server     = http.createServer(app);
var fs         = require('fs');
var io         = require('socket.io').listen(server);
var connection;
server.listen(8080);


var options = {
  host     : 's11.zenbox.pl',
  user     : 'crtv_alarmbox',
  password : 'qwerty123',
  database : 'crtv_alarmbox'
};


app.use(express.static(__dirname));
app.use(express.static(__dirname+ "/css"));
app.use(express.static(__dirname+ "/fonts"));
app.use(express.static(__dirname+ "/js"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
  
    console.log("Polaczono clienta");
});   
    
function handleDisconnect() {
    connection = mysql.createConnection(options);
    
    connection.connect( function(err) {
        if (err) {
            
            console.log ('error when connecting to db:' , err);
            setTimeout(handleDisconnect, 2000);    
            
        }else{
            
            console.log("polaczylo z sql");
        };

        
        
        io.on('connection', function(socket) {
                    console.log("TO ON");
                  //  socket.emit("asd", 1);
                    
               var sendEmit = function(data){
               socket.emit("asd", data);
                console.log(JSON.stringify(dane));
    
};             
            
            socket.on('news', sendEmit);
            socket.emit("my other event", 1);
            socket.on("fb", function (data) {
                      socket.emit("wy", "no");
                      });
            
                
           // socket.on('news', function (data) {
           //      console.log(data);
           //     connection.query("INSERT INTO logs SET data = data.data, event_type = data.event_type, mac_address = data.mac_address", function (err, rows, fields) {
           //     socket.emit('news', data);
           //     });
           // }); 
        });
    });  
    
    connection.on('error', function(err) {
            console.log('db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                handleDisconnect();
            } else {
                console.log(err);
                handleDisconnect()
             };
        });
};

    

handleDisconnect()