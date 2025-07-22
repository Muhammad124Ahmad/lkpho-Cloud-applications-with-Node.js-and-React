 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    const date = new Date(); // ✅ Native Date object

    let greetings="Good Morning";

    if(date.getHours()>12 && date.getHours()<18){
        greetings="Good Afternoon"
    }
    else if(date.getHours()>18 && date.getHours()<23){
        greetings="Good Night"
    }
    else if(date.getHours()>0 && date.getHours()<6){
        greetings="Good MidNight"
    }
    res.end(`${greetings}`);
};

// Define the port number
const port = 8081;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
