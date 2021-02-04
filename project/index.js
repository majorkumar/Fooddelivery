const http = require('http');
const fs = require('fs');
const { type } = require('os');

const hostname = '127.0.0.1';
const port = '8000';

const home = fs.readFileSync('index.html');
const order = fs.readFileSync('order.html');
const services = fs.readFileSync('services.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');


const server = http.createServer( (req,res)=>{
    url= req.url
    res.statusCode= 200;
    res.setHeader('content-type', 'text/html');
    
    if (url == '/'){
        res.end(home);
    }
    else if (url == '/home'){
        res.end(home);
    }

    else if (url == '/order'){
        res.end(order);
    }
    else if (url == '/services'){
        res.end(services);
    }
    else if (url == '/about'){
        res.end(about);
    }
    else if (url == '/contact'){
        res.end(contact);
    }
    else {
        res.statusCode= 404;
        res.end("<h1>Page not found ERROR</h1>");
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })