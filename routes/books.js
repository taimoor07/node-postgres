const routes = require("express").Router();
const { getBooks, addBook, deleteBook } = require("../services/books");

// books routes
routes.get("/", getBooks);
routes.post("/add-book", addBook);
routes.delete("/delete-book/:id", deleteBook);

module.exports = routes;