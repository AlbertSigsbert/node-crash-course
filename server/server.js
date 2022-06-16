const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //Set response headers
  res.setHeader("Content-Type", "text/html");

  // //Read html file and send it as response
  // fs.readFile('./views/index.html', (err, data) => {
  //     if(err){
  //       console.log(err);
  //       res.end()
  //     }
  //     else{
  //         res.end(data);
  //     }
  // })

  //Basic Routing
  let filepath = "./views/";

  switch (req.url) {
    case "/":
      filepath += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      filepath += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;

    default:
      filepath += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });

});



server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
