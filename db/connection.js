const mongoose = require('mongoose');
const uri = 'mongodb://localhost/trinYelp'
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

