var express = require('express')
var app = express()
var url = require("url")
var http = require("http")

// port ajusted to environment
var port = process.env.PORT
console.log(url);

app.('/', function (req, res) {
  res.send(req.url)
})

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})