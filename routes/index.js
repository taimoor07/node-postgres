const routes = require("express").Router();
const { getBooks, addBook, deleteBook } = require("../services");

// books routes
routes.get("/books", getBooks);
routes.post("/add-book", addBook);
routes.delete("/delete-book/:id", deleteBook);

module.exports = routes;