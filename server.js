var express = require('express');
var app = express();
var path = require("path");
var moment = require("moment");

// port ajusted to environment
var port = process.env.PORT;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/:date", function (req, res) {
  var date = req.params["date"];
  var unix = null;
  var natural = null;
  var regex = /^[0-9]*$/g;
  if(regex.test(date)) {
    unix = date;
    natural = moment.unix(date).format("MMMM DD YYYY");
  } else if (moment(date, "MMMM DD YYYY").isValid()) {
    unix = moment(date).format("X");
    natural = moment(date).format("MMMM DD YYYY");
  } else {
    unix = null;
    natural = null;
  }
  res.send(JSON.stringify({
    "unix": unix,
    "natural": natural
  }));
});

app.listen(port, function () {
  console.log('Example app listening on port' + port);
})