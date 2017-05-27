const express = require('express')
const app = express()

// port ajusted to environment
var port = process.env.PORT


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port' + port)
})