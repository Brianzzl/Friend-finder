
var friends = require("../data/friends");

module.exports=function(app){


//get request from client
app.get("/api/friends",function(req,res){
    res.json(friends);
});



// post request 

app.post("/api/friends", function(req, res) {
  
    
 friends.push(req.body);
        res.json(true);
   

  });



}
