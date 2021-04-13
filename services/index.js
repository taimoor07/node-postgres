let data = require("../assets/data.json");

// books CRUD
exports.getBooks = (req, res) => {
    res.status(200).json({message: "Books list", data: data.books})
}

exports.addBook = (req, res) => {
    data.books.push(req.body)
    res.status(200).json({message: "New book added", data: data.books})
}

exports.deleteBook = (req, res) => {
    const index = data.books.findIndex(item=>{
        return item.id == req.params.id
    })

    if (index > -1) {
        data.books.splice(index, 1);
        res.status(200).json({message: "Book is deleted", data: data.books})
    } else {
        res.status(500).json({message: "Item not found"})
    }
    
}
