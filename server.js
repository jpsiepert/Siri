var http = require("http");

var port = 8887;

var messages = ["Cupcakes", "I was hoping you would ask", "Try again Later"];

var randomIndex = function(){
	return Math.floor(Math.random() * messages.length - 0)
}



var onRequest = function(req, res){
	res.writeHead(200, {
	  'Connection': 'close',
	  'Content-Type': 'application/json',
	  'Access-Control-Allow-Origin': '*',
	  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});
	if(req.method === "GET"){
	res.end(JSON.stringify({'message': messages[randomIndex()]}))
}
};

http.createServer(onRequest).listen(port, function(){
	console.log("listening on port, " + port)
})

