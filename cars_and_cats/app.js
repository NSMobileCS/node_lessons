const PORT = 7077;
// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);

    var imgRegex = /^\/images\/(\w+\d*).(jpg|gif)$/;
    // this is how we do routing:
    if (request.url === '/') {
        response.writeHead(302, {'Location': "/cars"});
        response.end();
    }
    else if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new'){
        fs.readFile('views/newcarinfo.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/style.css'){
        fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url.match(imgRegex)){
        var matches = imgRegex.exec(request.url);
        var imgName = matches[1] + '.' + matches[2];
        fs.readFile('images/'+imgName, function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/'+matches[2]});
            response.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(PORT);
// print to terminal window
console.log("Running in localhost at port "+PORT);

