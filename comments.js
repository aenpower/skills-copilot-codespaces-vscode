// Create web server
// 1. Create a new web server object
// 2. Define the route for the home page
// 3. Define the route for the about page
// 4. Start listening for incoming requests

// 1. Create a new web server object
var express = require("express");
var app = express();

// 2. Define the route for the home page
app.get("/", function(request, response) {
  response.send("Welcome to my page!");
});

// 3. Define the route for the about page
app.get("/about", function(request, response) {
  response.send("About me");
});

// 4. Start listening for incoming requests
app.listen(3000, function() {
  console.log("Web server is now running...");
});