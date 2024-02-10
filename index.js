// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const PORT = 3030;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Timestamp endpoint
app.get("/api/:date?", function (req, res) {
  const inputDate = req.params.date;
  function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
  }

  if (inputDate) {
    // Check if the input is a Valid number (unix timestamp)
    if (!isNaN(inputDate)) {
      const unixTimestamp = parseInt(inputDate, 10);
      const utcDate = new Date(unixTimestamp).toUTCString();
      res.json({ unix: unixTimestamp, utc: utcDate });
    } else if (isDateValid(inputDate)) {
      // Check if it's a valid date string
      const utcDate = new Date(inputDate).toUTCString();
      const unixDate = new Date(inputDate).getTime();
      res.json({ unix: unixDate, utc: utcDate });
    } else {
      res.json({ error: "Invalid Date" });
    }
  } else { // Valid date format YYYY-MM-DD
    const utcDate = new Date().toUTCString();
    const unixDate = new Date().getTime();
    res.json({ unix: unixDate, utc: utcDate });
  }
});

// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
