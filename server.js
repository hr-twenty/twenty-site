var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));

app.listen(3000, function() {
  console.log('listening on 3000...');
});

