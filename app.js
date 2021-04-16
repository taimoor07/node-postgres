const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/books");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.use("/books", routes);

app.listen(port, () => {
    console.log(`App running on port ${port}`)
});