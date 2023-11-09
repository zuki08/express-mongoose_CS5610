let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {

  BookInstance.find()
    .populate('book')
    .exec()
    .then(list_bookinstances => {
      res.send(list_bookinstances.map(function(bookInstance) {
        return bookInstance.book.title + " : " + bookInstance.status
      }));
    })
    .catch(err => res.send('Status not found'));
};

// exports.show_all_books_status = function() {
//
//   BookInstance.find()
//     .populate('book')
//     .exec(function (err, list_bookinstances) {
//       if (err) {
//         console.log('Could not find status : ' + err);
//         return;
//       }
//       console.log(list_bookinstances.map(function(bookInstance) {
//         return bookInstance.book.title + " : " + bookInstance.status
//       }));
//     });
//
// };
