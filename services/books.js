const { Client } = require('pg');

// connect postgres db
const connectionString = 'postgres://postgres:Post@db07@localhost:5432/Online_Library';
const client = new Client({
    connectionString: connectionString
});
client.connect();

// books CRUD
exports.getBooks = (req, res) => {
    client.query('SELECT * FROM public.book_list ORDER BY id ASC', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).json({message: "Db error", error: err})
        }
        res.status(200).json({message: "Book list", data: result.rows})
    });
}

exports.addBook = (req, res) => {
    const newBook = {
        id: parseInt(req.body.id), 
        book_name: req.body.book_name, 
        auther_name: req.body.auther_name, 
        edition: req.body.edition,
        type_id: parseInt(req.body.type_id)
    };
    
    const addBookQuery = `INSERT INTO public.book_list (id, book_name, auther_name, edition, type_id) values (${newBook.id}, '${newBook.book_name}', '${newBook.auther_name}', '${newBook.edition}', ${newBook.type_id});`;
    client.query(addBookQuery, function (err, result) {
        if (err) {
            res.status(400).json({message: "Db error", error: err})
        }
        res.status(200).json({message: "Book is added successfully.", data: result.rows})
    });
}

exports.deleteBook = (req, res) => {
    const deleteBookQuery = `DELETE FROM public.book_list WHERE id = ${req.params.id};`;
    client.query(deleteBookQuery, function (err, result) {
        console.log("🚀 ~ file: books.js ~ line 45 ~ err", err)
        if (err) {
            res.status(400).json({message: "Db error", error: err})
        }
        res.status(200).json({message: "Book is removed.", data: result.rows})
    });    
}
