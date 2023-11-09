let Book = require('../models/book');
let Author = require('../models/author');

function get_books () {
  return Book.find({}, 'title author')
    .sort({title : 1})
    .populate('author');
}

exports.show_books = async () => {
  try {
    let books = await get_books().exec();
    return books.map(function(b) {
      return b._id + ' : ' + b.title + ' : ' + Author(b.author).name;
    });
  }
  catch(err) {
    console.log('Could not get books ' + err);
  }
}
