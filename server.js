var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('App listening on port 3000');
});

