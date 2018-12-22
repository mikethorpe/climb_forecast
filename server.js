const express = require('express');
const app = express();
const path = require('path');
const reactStaticBuildFilePath = './client/build';

// Tell express to serve up the static files from the react build
app.use(express.static(path.join(__dirname, reactStaticBuildFilePath)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + reactStaticBuildFilePath + '/index.html'))
})

// If a port is not defined we default to 5000
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port);
