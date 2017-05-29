var express = require('express')
var app = express()
var url = require("url")
var http = require("http")
var path = require("path")
var moment = require("moment")

// port ajusted to environment
var port = process.env.PORT

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"))
})

app.get("/:date", function (req, res) {
  var date = req.params.date
  res.send(moment(date).format("MMMM DD YYYY"))
})

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})