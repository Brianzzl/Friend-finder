// Dependencies
// =============================================================
var express = require("express");
var PORT = process.env.PORT || 3000;

// Sets up the Express App
// =============================================================
var app = express();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import api routing file
require('./app/routes/apiRoutes')(app);
// Import html routing file
require('./app/routes/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });