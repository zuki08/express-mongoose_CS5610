let BookInstance = require('../models/bookinstance');

get_available_list = async () => {
  let avail_list = await BookInstance.find({status: "Available"}).populate('book');
  return avail_list.map(function(book) {
    return book.book.title + " : " + book.status;
  });
};

exports.show_all_books_status = function(res) {
  get_available_list()
  .then((data) => res.send(data))
  .catch(err => console.error(err));
}