/*Global variable declaration*/
var port,server;

//import packages
var http = require('http');
var app = require('./web-server');

//set port
port  =  getPort(9000);

server = http.createServer(app);
server.listen(port);
server.on('listening',onListening);


//reusable functions
function onListening(){
	var addr = server.address();
	console.log("server started on " + addr.port  );
}

function getPort(defaultport){
	var commandlineport = process.argv.find((item)=>{
		return item.indexOf('port') !== -1;
	});

	if(commandlineport){
		commandlineport = commandlineport.slice(commandlineport.indexOf('=')+1,commandlineport.length);
		return commandlineport;		
	}else{
		return defaultport;
	}
}