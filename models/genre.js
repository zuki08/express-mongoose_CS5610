var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    genre: {type: String}
  }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);
