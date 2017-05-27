var express = require('express')
var app = express()
var url = require("url")
var http = require("http")

// port ajusted to environment
var port = process.env.PORT


app.get("/:date", function (req, res) {
  res.send(req.params.date)
})

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})