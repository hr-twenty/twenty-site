var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));

app.listen(8080, function() {
  console.log('listening on 8080...');
});

