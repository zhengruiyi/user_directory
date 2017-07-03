const data= require("./data.js")
const path = require('path');
const mustacheExpress = require('mustache-express');
const express = require('express')
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('public'))

//Listening on root
app.get('/user', function (req, res) {
  var list=data.users;
  res.render('index' ,{user: list})
})

//{users : data.users[0]}
app.get('/user/:id', function(req, res){
  var list=data.users;
  var inputID= req.params.id-1
  res.render('userInfo' ,{user: list[inputID]})

})



app.listen(3000, function () {
  console.log("'Successfully started express application!'")
});
