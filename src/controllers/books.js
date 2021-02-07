const { Book } = require("../models");

const addBook = (req, res) => {
  Book.create(req.body).then((book) => res.render("index")
  )};

const getBookList = (req, res) => {
  Book.findAll({ raw: true }).then((rows) => {
      res.render("books", {books: rows});
  });
  };


const deleteBook = (req, res) => {
  Book.destroy({ where: { id: req.body.bookId } }).then((numOfRowsDeleted) => {
      res.render("index")   
});
};

const getBookTitles = () => {
  Book.findAll({ raw: true })
  return books;
}

module.exports = { addBook, getBookList, deleteBook, getBookTitles }