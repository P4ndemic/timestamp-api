var express = require('express')
var app = express()
var url = require("url")
var path = require("path")
var moment = require("moment")

// port ajusted to environment
var port = process.env.PORT

app.all("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"))
})

app.all("/:date", function (req, res) {
  var date = req.params["date"]
  var unix = null
  var natural = null
  var regex = /^[0-9]*$/g
  if(regex.test(date)) {
    unix = date
    natural = moment.unix(date).format("MMMM DD YYYY")
  } else if (moment(date, "MMMM DD YYYY").isValid()) {
    unix = moment(date).format("X")
    natural = moment(date).format("MMMM DD YYYY")
  } else {
    unix = null
    natural = null
  }
  res.send(date)
  // res.send(JSON.stringyfy({
  //   "unix": unix,
  //   "natural": natural
  // }))
})

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})